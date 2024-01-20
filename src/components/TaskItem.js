import styles from './TaskItem.module.css';

const TaskItem = ({ task, deleteTask, onTaskClick }) => {
  return (
    <article className={styles.container} onClick={() => onTaskClick(task)}>
      <div className={styles.header}>
        <p>{task.title}</p>
      </div>
      <div className={styles.footer}>
        {task.type && (
          <p>
            <span>type:</span> {task.type}
          </p>
        )}
        {task.dueDate && (
          <p>
            <span>date:</span> {task.dueDate}
          </p>
        )}
      </div>
    </article>
  );
};
export default TaskItem;
