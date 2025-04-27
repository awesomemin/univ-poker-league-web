import Header from '../components/Header';
import LeagueSelect from '../components/LeagueSelect';
import Banner from '../components/Banner';
import MatchList from '../components/MatchList';

function Home() {
  return (
    <>
      <Header />
      <LeagueSelect />
      <Banner />
      <MatchList />
    </>
  );
}

export default Home;
