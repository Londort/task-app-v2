import { useState, useEffect } from 'react';

import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './TaskDetails.module.css';
import RoundBtn from '../UI/RoundBtn';

const TaskDetails = (props) => {
  const { task, isDetailsActive, onTaskClose, deleteTask, onEditTask } = props;
  const [editTask, setEditTask] = useState(task);

  useEffect(() => {
    setEditTask(task);
  }, [task]);

  // if (!isDetailsActive) {
  //   document.body.style.overflow = 'auto';
  // } else {
  //   document.body.style.overflow = 'hidden';
  // }

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
      className={`${styles.container} ${
        isDetailsActive ? `${styles.active}` : ''
      }`}
    >
      <div className={styles.header}>
        <p>{task.type || task.title}</p>
        <RoundBtn className={styles.closeform} onClick={onTaskClose}>
          <FaTimes className={styles.icon} />
        </RoundBtn>
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
        {/* extra Detials part starts here */}

        {editTask.type === 'meeting' && (
          <div className={styles.extra}>
            <label htmlFor="details.location">Location:</label>
            <input
              type="text"
              name="details.location"
              value={editTask.details.location || ''}
              onChange={handleChange}
            ></input>
            <label htmlFor="details.attendees">Attendees:</label>
            <input
              type="text"
              name="details.attendees"
              value={editTask.details.attendees}
              onChange={handleChange}
            ></input>
          </div>
        )}
        {editTask.type === 'call' && (
          <div className={styles.extra}>
            <label htmlFor="details.person">Person:</label>
            <input
              type="text"
              name="details.person"
              value={editTask.details.person}
              onChange={handleChange}
            ></input>
            <label htmlFor="details.phone">Phone:</label>
            <input
              type="tel"
              name="details.phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={editTask.details.phone}
              onChange={handleChange}
            ></input>
          </div>
        )}
        {editTask.type === 'email' && (
          <div className={styles.extra}>
            <label htmlFor="details.email">Email:</label>
            <input
              type="email"
              name="details.email"
              value={editTask.details.email}
              onChange={handleChange}
            ></input>
          </div>
        )}

        {/* extra Detials part ends here */}
      </form>

      <div className={styles.footer}>
        <RoundBtn
          onClick={() => {
            deleteTask(task.id);
            onTaskClose();
          }}
        >
          <FaTrashAlt className={styles.icondel} title="Delete" />
        </RoundBtn>

        <RoundBtn
          onClick={() => {
            onEditTask(editTask);
            onTaskClose();
          }}
        >
          <FaCheck className={styles.iconedit} title="Edit" />
        </RoundBtn>
      </div>
    </section>
  );
};
export default TaskDetails;
