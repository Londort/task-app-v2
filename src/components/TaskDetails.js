import { useState, useEffect } from 'react';

import { FaTimes } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './TaskDetails.module.css';

const TaskDetails = (props) => {
  let { ...task } = props.task;

  // Start new code

  // End new code

  const { deleteTask, onTaskClose, isActive } = props;

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
          value={task.title}
          // onChange={handleChange}
        ></input>
        <textarea name="description" value={task.description}></textarea>

        <div className={styles.date_type}>
          <select name="type" value={task.type}>
            <option name="reminder">reminder</option>
            <option name="meeting">meeting</option>
            <option name="call">call</option>
            <option name="email">email</option>
          </select>
          <input name="date" type="date" value={task.dueDate}></input>
        </div>

        {task.details && (
          <div className={styles.details}>
            {Object.keys(task.details).map((key) => (
              <div className={styles.extra} key={key}>
                <p>{key}</p>
                <input
                  type={task.type}
                  value={task.details[key]}
                  readOnly
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
          <FaEdit className={styles.icon} title="Edit Task" />
        </div>
      </div>
    </section>
  );
};
export default TaskDetails;
