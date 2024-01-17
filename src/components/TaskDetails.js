import Btn from '../UI/Btn';
import styles from './TaskDetails.module.css';
const TaskDetails = (props) => {
  return (
    <section
      className={`${styles.container} ${
        props.isActive ? `${styles.active}` : ''
      }`}
    >
      <div className={styles.header}>Task Details</div>
      <div className={styles.main}>
        <input name="title" type="text" value={props.task.title}></input>
        <textarea name="description" value={props.task.description}></textarea>

        <div className={styles.date_type}>
          <select name="type" value={props.task.type}>
            <option name="reminder">reminder</option>
            <option name="meeting">meeting</option>
            <option name="call">call</option>
            <option name="message">message</option>
          </select>
          <input name="date" type="date" value={props.task.dueDate}></input>
        </div>
      </div>
      <div className={styles.footer}>
        <Btn className="btn" onClick={props.onTaskClose}>
          Close Details
        </Btn>
      </div>
    </section>
  );
};
export default TaskDetails;
