import styles from './styles.module.css';
import avatar from '../../assets/avatar.png';

const Mirror = () => {
  return (
    <div className={styles.border}>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
        <p>Username</p>
      </div>

      <div className={styles.mirror}></div>
    </div>
  );
};
export default Mirror;
