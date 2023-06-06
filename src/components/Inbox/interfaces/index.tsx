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
