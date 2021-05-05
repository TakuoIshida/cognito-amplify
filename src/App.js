import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { AmplifyAuthenticator, AmplifySignOut, AmplifySignUp } from '@aws-amplify/ui-react';
import Amplify, { API, graphqlOperation, I18n } from 'aws-amplify';
import React from 'react';
import './App.css';
import { cognitoConstants } from './constants/auth';
import { vocabularies } from './constants/i18n';
import { listPosts } from './graphql/queries';
Amplify.configure(cognitoConstants);
I18n.putVocabularies(vocabularies);
I18n.setLanguage('ja');

const AuthStateApp = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [posts, setPost] = React.useState();
  React.useEffect(() => {
  
      return onAuthUIStateChange((nextAuthState, authData) => {
          setAuthState(nextAuthState);
          setUser(authData)
      });
  }, []);
  React.useEffect( () => {
    try {
      const fetchData = async () => {
        const resPosts = await API.graphql(graphqlOperation(listPosts));
        console.log('posts: ', resPosts);
        setPost(resPosts);
      }
      fetchData()
        
      } catch (e) {
        console.log(e)
    }
  }, []);
  console.log("posts")
  console.log(posts)

return authState === AuthState.SignedIn && user ? (
    <div className="App">
    <div>Hi, {user.username}</div>
      <AmplifySignOut />
    </div>
) : (
  <AmplifyAuthenticator>
  <AmplifySignUp
    slot="sign-up"
    formFields={[
      { type: "username" },
      { type: "password" },
      { type: "email" },
    ]}
  />
</AmplifyAuthenticator>
);
}

export default AuthStateApp;
