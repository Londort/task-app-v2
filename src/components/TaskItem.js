import styles from './TaskItem.module.css';

const TaskItem = ({ task, deleteTask, onTaskClick }) => {
  return (
    <article className={styles.container} onClick={() => onTaskClick(task)}>
      <div className={styles.header}>
        <p>{task.title}</p>
      </div>
      <div className={styles.footer}>
        <p>
          <span>type:</span> {task.type}
        </p>
        <p>
          <span>date:</span> {task.dueDate}
        </p>
      </div>
    </article>
  );
};
export default TaskItem;
