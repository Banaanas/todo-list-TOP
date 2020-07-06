const setLocalStorage = (arrayProjects) => {
  // Put the Projects Array into storage
  localStorage.setItem(
    "localStorageProjectsArray",
    JSON.stringify(arrayProjects),
  );
};

export default setLocalStorage;
