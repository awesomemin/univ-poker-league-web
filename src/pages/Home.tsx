import Header from '../components/Header';
import LeagueSelect from '../components/Home/LeagueSelect';
import Banner from '../components/Home/Banner';
import MatchList from '../components/Home/MatchList';

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
