import styles from './TaskList.module.css';
import TaskItem from './TaskItem.js';

const TaskList = (props) => {
  return (
    <section className={styles.container}>
      {props.tasks.length === 0 && <p>No tasks yet</p>}
      {props.tasks.map((task) => (
        <TaskItem
          onTaskClick={props.onTaskClick}
          task={task}
          key={task.id}
          deleteTask={props.deleteTask}
        />
      ))}
    </section>
  );
};
export default TaskList;
