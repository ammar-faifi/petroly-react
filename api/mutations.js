import { gql } from "@apollo/client";

export const tokenAuthMutation = gql`
  mutation getToken($username: String, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      success
      token
      refreshToken
      errors
      user {
        id
        username
        verified
        profile {
          profilePic
        }
      }
    }
  }
`;


export const verifyTokenMutation = gql`
mutation VerifyToken($token:String!){
  verifyToken(
    token:$token
  ){
    success
    errors
    payload
  }
}
`;

export const refreshTokenMutation = gql`
mutation Refresh($refreshToken:String!){
  refreshToken(
    refreshToken:$refreshToken
  ){
    success
    errors
    refreshToken
    token
    payload
  }
}
`;

export const revokeTokenMutation = gql`
mutation Revoke($refreshToken:String!){
  revokeToken(
    refreshToken: $refreshToken
  ){
    success
    errors
    revoked
  }
}
`;

export const registerMutation = gql`
mutation Register($email: String!, $username: String!, $password1: String!, $password2: String!){
  register(
    email:$email
    username: $username
    password1:$password1
    password2:$password2
  ){
    success
    errors
    token
    refreshToken
  }
}
`;

export const evaluationCreateMutation = gql`
mutation EvaluationCreate($instructorId: Int, $username: String, $grading: EvaluationGradingEnum!, 
  $teaching: EvaluationTeachingEnum!, $personality: EvaluationPersonalityEnum!, $course: String, 
  $comment: String){
  evaluationCreate(
    input: {
      instructor: {connect: {id: {equals: $instructorId}}}
      user: {connect: {username: {equals: $username}}}
      grading: $grading
      teaching: $teaching
      personality: $personality
      course: $course
      comment: $comment
    }
  ){
    ok
    errors{
      field
      messages
    }
    result{
      id
    }
  }
}
`;

export const sendPasswordResetEmailMutation = gql`
mutation($email: String!){
  sendPasswordResetEmail(
    email: $email
  ){
    success
    errors
  }
}
`;