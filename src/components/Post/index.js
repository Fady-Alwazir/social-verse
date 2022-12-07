import styles from './styles.module.css';
import ParagraphIcon from '../../assets/paragraph.svg';
import DimensionIcon from '../../assets/vverse@2x.png';
import ImageIcon from '../../assets/Photo Icon.svg';
import Avatar from '../../assets/avatar-6.png';
import { Tabs, Input, Button } from 'antd';

const PostIcon = () => {
  return (
    <div className={styles.IconContainer}>
      <img src={ParagraphIcon} alt="paragrah" />
      <p>Post</p>
    </div>
  );
};
const Dimension = () => {
  return (
    <div className={styles.IconContainer}>
      <img src={DimensionIcon} alt="paragrah" />
      <p>Dimension</p>
    </div>
  );
};
const Image = () => {
  return (
    <div className={styles.IconContainer}>
      <img src={ImageIcon} alt="paragrah" />
      <p>Photo/Video</p>
    </div>
  );
};
const TextArea = () => {
  return (
    <div className={styles.textArea}>
      <div className={styles.inputContainer}>
        <img src={Avatar} alt="avatar" />
        <Input
          placeholder="What's on your mind?"
          style={{
            borderRadius: '20px',
            placeholderColor: 'black',
          }}
          className={styles.input}
        />
      </div>
      <Button
        type="primary"
        style={{
          padding: '0 20px',
        }}
      >
        Post
      </Button>
    </div>
  );
};

const Post = () => {
  return (
    <div className={styles.container}>
      <Tabs
        defaultActiveKey="1"
        items={[PostIcon, Dimension, Image].map((Icon, i) => {
          const id = String(i + 1);

          return {
            label: <Icon />,
            key: id,
            children: <TextArea />,
          };
        })}
      />
    </div>
  );
};

export default Post;
