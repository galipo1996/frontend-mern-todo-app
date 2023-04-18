import axios from 'axios'
const baseURL = `http://localhost:5000/api/v1/tasks`

const modifyData = (
  id,
  text,
  setId,
  setUpdate,
  fetchingData,
  setTODO,
  Settext
) => {
  axios.patch(`${baseURL}/${id}`, { name: text }).then(() => {
    setId('')
    setUpdate(false)
    fetchingData(setTODO)
    Settext('')
  })
}

export default modifyData
