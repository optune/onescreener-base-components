export const getValuesRecursively = (obj, arr = []) => {
  for (let k in obj) {
    /* For Teaser links and Icons */
    if (k === 'list' || k === 'hiddenList') {
      const newList = JSON.stringify(obj[k])
      arr = [newList, ...arr]
      /* For Settings types */
    } else if (k === 'extendedTypes') {
      const types = obj[k] || []
      const newTypes = types.join(',')
      arr = [newTypes, ...arr]
      /* For Images */
    } else if (k === 'image') {
      const newId = obj[k]?.public_id || ''
      arr = [newId, ...arr]
    } else if (typeof obj[k] === 'object') {
      arr = [...getValuesRecursively(obj[k], arr)]
    } else {
      arr = [obj[k], ...arr]
    }
  }
  return arr
}
