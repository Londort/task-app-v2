import { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm.js';
import TaskDetails from './components/TaskDetails.js';
import LocalStorage from './handlers/LocalStorage.js';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});
  const [isDetailsActive, setIsDetailsActive] = useState(false);
  const [isTaskFormActive, setIsTaskFormActive] = useState(false);

  // console.group('App.js');
  // console.log('active form now is ' + isTaskFormActive);
  // console.groupEnd();

  useEffect(() => {
    const taskList = LocalStorage.getTasks();
    if (taskList) {
      setTasks(taskList);
    }
  }, []);

  useEffect(() => {
    if (isDetailsActive || isTaskFormActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDetailsActive, isTaskFormActive]);

  const newTask = (task) => {
    const addTask = [task, ...tasks];
    setTasks(addTask);
    LocalStorage.updateTasks(addTask);
  };

  const editTask = (task) => {
    const updateTasks = tasks.map((item) => {
      if (item.id === task.id) {
        return task;
      }
      return item;
    });
    setTasks(updateTasks);
    LocalStorage.updateTasks(updateTasks);
  };

  const deleteTask = (id) => {
    const updateTasks = tasks.filter((task) => task.id !== id);
    setTasks(updateTasks);
    LocalStorage.updateTasks(updateTasks);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsDetailsActive(true);
  };

  const handleTaskClose = () => {
    setIsDetailsActive(false);
    setTimeout(() => {
      setSelectedTask({});
    }, 300);
  };

  const handleFormOpen = () => {
    setIsTaskFormActive(!isTaskFormActive);
  };

  if (isTaskFormActive && isDetailsActive) {
    handleTaskClose();
  }

  return (
    <div className="App">
      <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
      <TaskForm
        addTask={newTask}
        handleFormOpen={handleFormOpen}
        isFormActive={isTaskFormActive}
      />

      {selectedTask && (
        <TaskDetails
          task={selectedTask}
          isDetailsActive={isDetailsActive}
          onTaskClose={handleTaskClose}
          deleteTask={deleteTask}
          onEditTask={editTask}
        />
      )}
    </div>
  );
};

export default App;
