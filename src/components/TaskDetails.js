import { useState, useEffect } from 'react';

import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './TaskDetails.module.css';

const TaskDetails = (props) => {
  const { task, isActive, onTaskClose, deleteTask, onEditTask } = props;
  const [editTask, setEditTask] = useState(props.task);

  useEffect(() => {
    setEditTask(task);
  }, [task]);

  const handleChange = (e) => {
    if (e.target.name.startsWith('details.')) {
      const detailKey = e.target.name.split('.')[1];
      setEditTask({
        ...editTask,
        details: {
          ...editTask.details,
          [detailKey]: e.target.value,
        },
      });
    } else {
      setEditTask({ ...editTask, [e.target.name]: e.target.value });
    }
  };

  return (
    <section
      className={`${styles.container} ${isActive ? `${styles.active}` : ''}`}
    >
      <div className={styles.header}>
        <p>{task.type || task.title}</p>
        <div className={styles.iconbox}>
          <FaTimes className={styles.icon} onClick={onTaskClose} />
        </div>
      </div>

      <form className={styles.main}>
        <input
          name="title"
          type="text"
          value={editTask.title}
          onChange={handleChange}
        ></input>
        <textarea
          name="description"
          value={editTask.description}
          onChange={handleChange}
        ></textarea>

        <div className={styles.date_type}>
          <select name="type" value={editTask.type} onChange={handleChange}>
            <option name="reminder">reminder</option>
            <option name="meeting">meeting</option>
            <option name="call">call</option>
            <option name="email">email</option>
          </select>

          <input
            name="dueDate"
            type="date"
            value={editTask.dueDate}
            onChange={handleChange}
          ></input>
        </div>

        {editTask.details && (
          <div className={styles.details}>
            {Object.keys(editTask.details).map((key) => (
              <div className={styles.extra} key={key}>
                <p>{key}</p>
                <input
                  type={editTask.type}
                  value={editTask.details[key]}
                  onChange={handleChange}
                ></input>
              </div>
            ))}
          </div>
        )}
      </form>

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
          <FaCheck
            className={styles.icon}
            title="Edit Task"
            onClick={() => {
              onEditTask(editTask);
              onTaskClose();
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default TaskDetails;
