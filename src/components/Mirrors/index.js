import Mirror from './mirror';
import styles from './styles.module.css';
const Mirrors = () => {
  return (
    <div>
      <h1>Mirrors</h1>
      <div className={styles.mirrorsContainer}>
        <Mirror />
        <Mirror />
        <Mirror />
        <Mirror />
      </div>
    </div>
  );
};
export default Mirrors;
