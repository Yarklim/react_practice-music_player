import MainPage from './pages/MainPage/MainPage';
import Playbar from './components/Playbar/Playbar';
import s from '../src/styles/global.module.scss';

const App = () => {
  return (
    <div className={s.wrapper}>
      <MainPage />
      <Playbar />
    </div>
  );
};

export default App;
