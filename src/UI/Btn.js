import styles from './Btn.module.css';

const Btn = (props) => {
  const { children, onClick, type } = props;
  let { className } = props;

  className = className
    .split(' ')
    .map((cls) => styles[cls])
    .join(' ');

  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
export default Btn;
