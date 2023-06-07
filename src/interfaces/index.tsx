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
