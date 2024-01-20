import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TaskForm.module.css';
import Btn from '../UI/Btn';

const TaskForm = (props) => {
  const { addTask, handleFormOpen, isActive } = props;

  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    type: '',
    details: {},
  });
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskID = uuidv4();
    if (!task.title) return;
    addTask({ ...task, id: taskID });

    handleFormOpen(!isActive);
    setTask({
      title: '',
      description: '',
      dueDate: '',
      type: '',
      details: {},
    });
  };

  // const formClose = (e, nowisActive = isActive) => {
  //   const form = document.body.querySelector(`.${styles.container}`);

  //   if (!form.contains(e.target)) {
  //     handleFormOpen();
  //   }
  // };
  // useEffect(() => {
  //   document.body.addEventListener('click', formClose);
  //   return () => {
  //     document.body.removeEventListener('click', formClose);
  //   };
  // });

  // useEffect(() => {
  //   const form = document.body.querySelector(`.${styles.container}`);

  //   const handleClickOutsideForm = (e) => {
  //     if (form && !form.contains(e.target)) {
  //       handleFormOpen(false);
  //     }
  //   };

  //   form.addEventListener('click', (e) => e.stopPropagation());
  //   document.addEventListener('click', handleClickOutsideForm);

  //   return () => {
  //     form.removeEventListener('click', (e) => e.stopPropagation());
  //     document.removeEventListener('click', handleClickOutsideForm);
  //   };
  // }, [handleFormOpen]);

  return (
    <section
      className={`${styles.container} ${isActive ? `${styles.active}` : ' '}`}
    >
      <FaBars
        className={styles.openFormBtn}
        onClick={handleFormOpen}
        title="Add New Task"
      />

      <div className={styles.header}>
        <p>Add New Task</p>
      </div>
      <div className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="title"
            placeholder="Caption"
            value={task.title}
            onChange={handleChange}
          ></input>
          <textarea
            className={styles.textarea}
            name="description"
            placeholder="Description"
            value={task.description}
            onChange={handleChange}
          ></textarea>
          <div>
            <label htmlFor="type">Type:</label>
            <select
              required
              name="type"
              value={task.type}
              onChange={handleChange}
            >
              <option name="reminder">reminder</option>
              <option name="meeting">meeting</option>
              <option name="call">call</option>
              <option name="message">message</option>
            </select>
            <label htmlFor="dueDate">Date</label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
            ></input>
          </div>
        </form>
      </div>
      <div className={styles.footer}>
        <button type="submit" className={styles.btn} onClick={handleSubmit}>
          Add Task
        </button>
      </div>
    </section>
  );
};

export default TaskForm;
