export interface Mail {
  toAddr: string,
  text: string,
  rawSize: number,
  html: null,
  headerSubject: string,
  fromAddr: string,
  downloadUrl: string,
}

export interface MailProps {
  headerSubject: string,
  fromAddr: string,
  text: string,
}

export interface MailHeaderProps {
  headerSubject: string,
  fromAddr: string,
  text: string,
  handleClick: React.Dispatch<React.SetStateAction<MailProps | undefined>>,
}

export interface InboxProps {
  mails: Mail[],
}

export interface SessionInfo {
  email: string,
  id: string,
}

interface Address {
  address: string,
  __typename: string,
 }

export interface ResponseCreateSession {
  introduceSession: {
    id: string,
    addresses: Address[],
    expiresAt: string,
    __typename: string
  }
}
