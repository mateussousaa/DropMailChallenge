import { gql } from '@apollo/client';

const INTRODUCE_SESSION = gql`
  mutation {
    introduceSession {
      id,
      expiresAt,
      addresses {
        address
      }
    }
  }
`;

const GET_EMAILS = gql`
query GetSessionMails($sessionId: ID!) {
  session(id: $sessionId) {
    mails {
      rawSize
      fromAddr
      toAddr
      downloadUrl
      text
      headerSubject
    }
  }
}
`;

export { INTRODUCE_SESSION, GET_EMAILS };
