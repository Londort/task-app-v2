import styles from './TaskList.module.css';
import TaskItem from './TaskItem.js';

const TaskList = (props) => {
  const { tasks, onTaskClick, deleteTask } = props;
  return (
    <section className={styles.container}>
      {tasks.length === 0 && <p>No tasks yet</p>}
      {tasks.map((task) => (
        <TaskItem
          onTaskClick={onTaskClick}
          task={task}
          key={task.id}
          deleteTask={deleteTask}
        />
      ))}
    </section>
  );
};
export default TaskList;
