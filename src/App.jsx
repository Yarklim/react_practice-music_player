import MainPage from './pages/MainPage/MainPage';
import s from '../src/styles/global.module.scss';

const App = () => {
  return (
    <div className={s.wrapper}>
      <MainPage />
    </div>
  );
};

export default App;
