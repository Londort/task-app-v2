import styles from './RoundBtn.module.css';

const RoundBtn = (props) => {
  const { children, onClick, title } = props;
  let { className } = props;

  console.log(title);
  if (className) {
    className = className
      .split(' ')
      .map((cls) => cls.trim())
      .join(' ');
  } else {
    className = '';
  }

  return (
    <div
      className={`${styles.container} ${className}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export default RoundBtn;
