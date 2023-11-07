import Track from '../../components/Track/Track';
import tracksList from '../../data/trackList';
import s from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={s.search}>
      <>Search tracks</>
      <div className={s.list}>
        {tracksList?.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
