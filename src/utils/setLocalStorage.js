function setLocalStorage(name, item) {
  localStorage.setItem(name, JSON.stringify(item))
}

export default setLocalStorage;