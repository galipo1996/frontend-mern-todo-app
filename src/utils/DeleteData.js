import axios from 'axios'
const baseURL = `http://localhost:5000/api/v1/tasks`
const DeleteData = (id, fetchingData, setTODO) => {
  axios
    .delete(`${baseURL}/${id}`)
    .then(() => fetchingData(setTODO))
    .catch((e) => console.log(e))
}

export default DeleteData
