const getStorage = (key) => {
  const storage = JSON.parse(window.sessionStorage.getItem(key))
  if (storage) {
    return storage
  }
}

const setStorage = (key, data) => {
  window.sessionStorage.setItem(key, JSON.stringify(data))
}

const removeStorage = (key) => {
  sessionStorage.removeItem(key);
};

const clearStorage = () => {
  sessionStorage.clear();
};

export { getStorage, setStorage, removeStorage, clearStorage };
