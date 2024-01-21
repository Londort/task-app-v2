import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TaskForm.module.css';

const TaskForm = (props) => {
  const { addTask, handleFormOpen, isActive } = props;

  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: 'no date',
    type: 'reminder',
    details: {},
  });

  const handleChange = (e) => {
    console.log(task.details);
    console.log(e.target.name);
    if (e.target.name.startsWith('details.')) {
      const detailKey = e.target.name.split('.')[1];
      setTask({
        ...task,
        details: {
          ...task.details,
          [detailKey]: e.target.value,
        },
      });
    } else {
      setTask({ ...task, [e.target.name]: e.target.value });
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   console.log(task.details);
  //   console.log(name);

  //   if (name.startsWith('details.')) {
  //     // Если изменяются значения в подробностях
  //     const detailKey = name.split('.')[1];
  //     setTask({
  //       ...task,
  //       details: {
  //         ...task.details,
  //         [detailKey]: value,
  //       },
  //     });
  //   } else {
  //     // Иначе, обновление обычных свойств
  //     setTask({ ...task, [name]: value });
  //   }
  // };

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
            required
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
            <select name="type" value={task.type} onChange={handleChange}>
              <option value="reminder">reminder</option>
              <option value="meeting">meeting</option>
              <option value="call">call</option>
              <option value="email">email</option>
            </select>

            <label htmlFor="dueDate">Date</label>
            <input
              type="date"
              name="dueDate"
              value={task.dueDate}
              onChange={handleChange}
            ></input>
          </div>

          {/* Task detailes extra */}
          {task.type === 'meeting' && (
            <div className={styles.extra}>
              <label htmlFor="details.location">Location:</label>
              <input
                type="text"
                name="details.location"
                value={task.details.location}
                onChange={handleChange}
              ></input>
              <label htmlFor="details.attendees">Attendees:</label>
              <input
                type="text"
                name="details.attendees"
                value={task.details.attendees}
                onChange={handleChange}
              ></input>
            </div>
          )}
          {task.type === 'call' && (
            <div className={styles.extra}>
              <label htmlFor="details.person">Person:</label>
              <input
                type="text"
                name="details.person"
                value={task.details.person}
                onChange={handleChange}
              ></input>
              <label htmlFor="details.phone">Phone:</label>
              <input
                type="tel"
                name="details.phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={task.details.phone}
                onChange={handleChange}
              ></input>
            </div>
          )}
          {task.type === 'email' && (
            <div className={styles.extra}>
              <label htmlFor="details.email">Email:</label>
              <input
                type="email"
                name="details.email"
                value={task.details.email}
                onChange={handleChange}
              ></input>
            </div>
          )}
          {/* END Task detailes extra*/}
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
