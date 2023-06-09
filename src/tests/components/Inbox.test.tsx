import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Inbox from '@/components/Inbox';
import { mockedMails } from '../mocks';

describe('Testing Inbox Component', () => {
  it('testing inbox with static data - mail header', async () => {
    render(
      <Inbox mails={mockedMails} />,
    );
    const fromAddr = screen.getByText(/test@example\.com1/i);
    const headerSubject = screen.getByText(/headerSubject1/i);
    const text = screen.getByText(/text1/i);

    expect(fromAddr).toBeInTheDocument();
    expect(headerSubject).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it('testing inbox with static data - mail content', async () => {
    render(
      <Inbox mails={mockedMails} />,
    );
    const emailHeader = screen.getByText(/test@example\.com1/i);
    expect(emailHeader).toBeInTheDocument();
    await userEvent.click(emailHeader);
    const titleEmail = screen.getByRole('heading', { name: /headerSubject1/i, level: 1 });
    expect(titleEmail).toBeInTheDocument();
  });
});
