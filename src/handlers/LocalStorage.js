const LOCAL_STORAGE_KEY = 'tasks';

const LocalStorage = {
  getTasks: () => {
    const tasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    return tasks ? JSON.parse(tasks) : [];
  },

  updateTasks: (tasks) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  },
};

export default LocalStorage;
