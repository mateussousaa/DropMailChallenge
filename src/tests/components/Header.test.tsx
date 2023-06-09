import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

describe('Testing Header Component', () => {
  it('testing header with static data', () => {
    render(
      <Header
        emailValue="test@test.com"
        refreshTime={15}
        handleRefreshButton={async () => { console.log('a'); }}
      />,
    );

    expect(screen.getByText('your temporary email')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('auto refresh in 15')).toBeInTheDocument();
  });
});
