import styles from './styles.module.css';
import firstFriend from '../../assets/Friend-2.png';
import SecondFriend from '../../assets/Friend-3.png';
import ThirdFriend from '../../assets/Friend-5.png';
import FourthFriend from '../../assets/Friend-7.png';

const Friends = () => {
  return (
    <div className={styles.container}>
      <h1>Friends</h1>
      <div className={styles.friends}>
        <img src={firstFriend} alt="firstFriend" />
        <img src={SecondFriend} alt="SecondFriend" />
        <img src={ThirdFriend} alt="ThirdFriend" />
        <img src={FourthFriend} alt="FourthFriend" />
        <img src={firstFriend} alt="firstFriend" />
        <img src={SecondFriend} alt="SecondFriend" />
        <img src={ThirdFriend} alt="ThirdFriend" />
        <img src={FourthFriend} alt="FourthFriend" />
      </div>
    </div>
  );
};
export default Friends;
