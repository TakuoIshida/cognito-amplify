export const cognitoConstants = {
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    userPoolId: process.env.REACT_APP_AWS_USER_POOLS_ID,
    // REQUIRED - Amazon Cognito Region
    region: process.env.REACT_APP_AWS_COGNITO_REGION,
    // OPTIONAL - Amazon Cognito User Pool ID
    identityPoolId: process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: process.env.REACT_APP_AWS_USER_POOLS_CLIENT_ID,
  },
  API: {
    aws_appsync_graphqlEndpoint: process.env.REACT_APP_AWS_APPSYNC_GRAPHQLENDPOINT,
    aws_appsync_region: process.env.REACT_APP_AWS_APPSYNC_REGION,
    aws_appsync_authenticationType: process.env.REACT_APP_AWS_APPSYNC_AUTHENTICATION_TYPE,
  }
};