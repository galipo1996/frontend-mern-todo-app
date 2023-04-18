import axios from 'axios'
const baseURL = `http://localhost:5000/api/v1/tasks`
const sendData = (data, Settext, fetchingData, setTODO) => {
  axios.post(baseURL, { name: data }).then(() => {
    Settext('')
    fetchingData(setTODO)
  })
}

export default sendData
