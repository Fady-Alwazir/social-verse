import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './styles.module.css';
import LiveIcon from '../../assets/live.svg';
import LikeIcon from '../../assets/Path 1823.svg';
import ViewsIcon from '../../assets/user-group-man-man.svg';
import { Button } from 'antd';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Dimensions = () => {
  return (
    <div className={styles.container}>
      <h1>Dimensions</h1>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          padding: '10px',
        }}
      >
        <Button type="primary">All</Button>
        <Button type="secondary">Trending</Button>
        <Button type="secondary">Title</Button>
        <Button type="secondary">Title</Button>
        <Button type="secondary">Title</Button>
        <Button type="secondary">Title</Button>
      </div>
      <Carousel responsive={responsive} partialVisible={false}>
        <div className={styles.imageContainer}>
          <img src={LiveIcon} alt="live" />
          <div className={styles.stats}>
            <div>
              <img src={ViewsIcon} alt="views" />
              <span style={{ color: 'white' }}> 300</span>
            </div>
            <div>
              <img src={LikeIcon} alt="like" />
              <span style={{ color: 'white' }}> 99</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={LiveIcon} alt="live" />
          <div className={styles.stats}>
            <div>
              <img src={ViewsIcon} alt="views" />
              <span style={{ color: 'white' }}> 300</span>
            </div>
            <div>
              <img src={LikeIcon} alt="like" />
              <span style={{ color: 'white' }}> 99</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={LiveIcon} alt="live" />
          <div className={styles.stats}>
            <div>
              <img src={ViewsIcon} alt="views" />
              <span style={{ color: 'white' }}> 300</span>
            </div>
            <div>
              <img src={LikeIcon} alt="like" />
              <span style={{ color: 'white' }}> 99</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {' '}
          <img src={LiveIcon} alt="live" />
          <div className={styles.stats}>
            <div>
              <img src={ViewsIcon} alt="views" />
              <span style={{ color: 'white' }}> 300</span>
            </div>
            <div>
              <img src={LikeIcon} alt="like" />
              <span style={{ color: 'white' }}> 99</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={LiveIcon} alt="live" />
          <div className={styles.stats}>
            <div>
              <img src={ViewsIcon} alt="views" />
              <span style={{ color: 'white' }}> 300</span>
            </div>
            <div>
              <img src={LikeIcon} alt="like" />
              <span style={{ color: 'white' }}> 99</span>
            </div>
          </div>{' '}
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default Dimensions;
