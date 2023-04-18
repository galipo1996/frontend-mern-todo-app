import './index.css'
import Input from './MaterielUi/Input'
import Button from './MaterielUi/Button'
import List from './components/List'
import fetchingData from './utils/FetchingData'
import sendData from './utils/sendData'
import { useEffect, useState } from 'react'
import DeleteData from './utils/DeleteData'
import UpdateData from './utils/UpdateData'
import modifyData from './utils/modifyData'
function App() {
  const [TODO, setTODO] = useState([])
  const [text, Settext] = useState('')
  const [id, setId] = useState('')
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    fetchingData(setTODO)
  }, [])

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>ToDo App</h1>
        <div className='top'>
          <Input
            value={text}
            onChange={(e) => Settext(e.target.value)}
            label='write Your Todo'
          />
          <Button
            onClick={() =>
              update
                ? modifyData(
                    id,
                    text,
                    setId,
                    setUpdate,
                    fetchingData,
                    setTODO,
                    Settext
                  )
                : sendData(text, Settext, fetchingData, setTODO)
            }
            name={update ? 'update' : 'add'}
          />
        </div>
        <div className='list'>
          {TODO.map((item, i) => (
            <List
              deleteTask={() => DeleteData(item._id, fetchingData, setTODO)}
              updateTask={() =>
                UpdateData(setUpdate, Settext, item.name, setId, item._id)
              }
              key={item._id}
              text={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
