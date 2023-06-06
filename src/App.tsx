import { useMutation } from '@apollo/client';
import { INTRODUCE_SESSION } from './services/querys.ts';

function App() {
  const [createSession, { data, loading, error }] = useMutation(INTRODUCE_SESSION);

  if (data) console.log(data);

  return (
    <button
      type="button"
      onClick={() => createSession()}
    >
      create session
    </button>
  );
}

export default App;
