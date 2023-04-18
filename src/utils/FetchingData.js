import axios from 'axios'

const baseURL = `http://localhost:5000/api/v1/tasks`
const fetchingData = (setTODO) => {
  axios
    .get(baseURL)
    .then((data) => {
      return data.data.data.task
    })
    .then((data) => {
      setTODO(data)
    })
  // .catch((e) => console.log(e))
}
export default fetchingData
