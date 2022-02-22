export const adjustUrl = (value) =>
  !value || value.startsWith('http://') || value.startsWith('https://') ? value : `http://${value}`
