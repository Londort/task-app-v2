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

  useEffect(() => {
    const taskList = LocalStorage.getTasks();
    if (taskList) {
      setTasks(taskList);
    }
  }, []);

  const newTask = (task) => {
    const addTask = [task, ...tasks];
    setTasks(addTask);
    LocalStorage.updateTasks(addTask);
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
    if (!isTaskFormActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  if (isTaskFormActive && isDetailsActive) {
    // isDetailsActive = false;
    handleTaskClose();
  }

  return (
    <div className="App">
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        onTaskClick={handleTaskClick}
        // onTaskClose={handleTaskClose}
      />
      <TaskForm
        addTask={newTask}
        handleFormOpen={handleFormOpen}
        isActive={isTaskFormActive}
      />

      {selectedTask && (
        <TaskDetails
          task={selectedTask}
          isActive={isDetailsActive}
          onTaskClose={handleTaskClose}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
};

export default App;
