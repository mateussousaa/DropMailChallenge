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

export { INTRODUCE_SESSION };
