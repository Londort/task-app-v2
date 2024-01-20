import { FaTimes } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './TaskDetails.module.css';
const TaskDetails = (props) => {
  let { ...task } = props.task;
  const { deleteTask, onTaskClose, isActive } = props;
  return (
    <section
      className={`${styles.container} ${isActive ? `${styles.active}` : ''}`}
    >
      <div className={styles.header}>
        <p>Task Details</p>
        <div className={styles.iconbox}>
          <FaTimes className={styles.icon} onClick={onTaskClose} />
        </div>
      </div>
      <div className={styles.main}>
        <input name="title" type="text" value={task.title}></input>
        <textarea name="description" value={task.description}></textarea>

        <div className={styles.date_type}>
          <select name="type" value={task.type}>
            <option name="reminder">reminder</option>
            <option name="meeting">meeting</option>
            <option name="call">call</option>
            <option name="message">message</option>
          </select>
          <input name="date" type="date" value={task.dueDate}></input>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.iconbox}>
          <FaTrashAlt
            className={styles.icon}
            title="Delete Task"
            onClick={() => {
              deleteTask(task.id);
              onTaskClose();
            }}
          />
        </div>
        <div className={styles.iconbox}>
          <FaEdit className={styles.icon} title="Edit Task" />
        </div>
      </div>
    </section>
  );
};
export default TaskDetails;
