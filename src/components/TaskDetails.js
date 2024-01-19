import { FaTimes } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import Btn from '../UI/Btn';
import styles from './TaskDetails.module.css';
const TaskDetails = (props) => {
  return (
    <section
      className={`${styles.container} ${
        props.isActive ? `${styles.active}` : ''
      }`}
    >
      <div className={styles.header}>
        <p>Task Details</p>
        <div className={styles.iconbox}>
          <FaTimes className={styles.icon} onClick={props.onTaskClose} />
        </div>
      </div>
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
        <div className={styles.iconbox}>
          <FaTrashAlt className={styles.icon} title="Delete Task" />
        </div>
        <div className={styles.iconbox}>
          <FaEdit className={styles.icon} title="Edit Task" />
        </div>
        {/* <Btn className="btn" onClick={props.onTaskClose}>
          Close Details
        </Btn> */}
      </div>
    </section>
  );
};
export default TaskDetails;
