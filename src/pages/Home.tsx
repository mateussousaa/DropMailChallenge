import Header from '../components/Header.tsx';

function Home() {
  return (
    <div>
      <Header emailValue="user@user.com" refreshTime={15} />
    </div>
  );
}

export default Home;
