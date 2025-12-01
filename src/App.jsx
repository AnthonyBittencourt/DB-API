import { useEffect, useState } from 'react'
import s from './App.module.css'
import {api} from "./api/api"
import { Card } from './components/card'

function App() {
  const[data, setData] = useState([])
  const[searchName, setSearchName] = useState("")
  const[searchPage, setSearchPage] = useState("")

  useEffect(() => {
    api.get(`/characters/?name=${searchName}&page=${searchPage}`).then((response) =>{
      setData(response.data.items)
      console.log(response.data.items)      
    }).catch((error) => {
      console.error("NÃO FOI POSSIVEL ACESSAR A API", error)
    })
  }, [searchName, searchPage])

  return (
    <>
      <h1 className={s.title}>Titulo Aqui</h1>
      <main>
        <div className={s.input}>
          <input type='text' value={searchPage} onChange={(e) => setSearchPage (e.target.value)} placeholder='pgs'/>
          <input type='text' value={searchName} onChange={(e) => setSearchName (e.target.value)} placeholder='Procure um personagem'/>
        </div>
        <div className={s.wrapCards}>
          {data.map((item, index) => {
            return(
              <div key={index}>
                <Card image={item.image} name={item.name} race={item.race}/>
              </div>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default App
