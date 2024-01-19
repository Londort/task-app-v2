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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Caption"
            value={task.title}
            onChange={handleChange}
          ></input>
          <textarea
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

        {/* <form onSubmit={handleSubmit}>
          <label>
            Title
            <input
              type="text"
              name="title"
              placeholder="Tite"
              value={task.title}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Description
            <textarea
              name="description"
              placeholder="Description"
              value={task.description}
              onChange={handleChange}
            ></textarea>
          </label>
          <label>
            Due Date
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Type:
            <select name="type" value={task.type} onChange={handleChange}>
              <option name="reminder">reminder</option>
              <option name="meeting">meeting</option>
              <option name="call">call</option>
              <option name="message">message</option>
            </select>
          </label>
        </form> */}

        {/* <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Title</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="title"
                    placeholder="Tite"
                    value={task.title}
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Description</label>
                </td>
                <td>
                  <textarea
                    name="description"
                    placeholder="Description"
                    value={task.description}
                    onChange={handleChange}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Due Date</label>
                </td>
                <td>
                  <input
                    type="date"
                    name="dueDate"
                    value={task.dueDate}
                    onChange={handleChange}
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Type:</label>
                </td>
                <td>
                  <select name="type" value={task.type} onChange={handleChange}>
                    <option name="reminder">reminder</option>
                    <option name="meeting">meeting</option>
                    <option name="call">call</option>
                    <option name="message">message</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </form> */}
      </div>
      <div className={styles.footer}>
        <Btn type="submit" className="btn" onClick={handleSubmit}>
          Add Task
        </Btn>
      </div>
    </section>
  );
};

export default TaskForm;
