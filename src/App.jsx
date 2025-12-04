import { useEffect, useState } from 'react'
import s from './App.module.css'
import { api } from "./api/api"
import { Card } from './components/card'
import logo from '../public/DBlogo.svg'

function App() {
  const[data, setData] = useState([])
  const[searchPage, setSearchPage] = useState("")

  useEffect(() => {
    api.get(`/characters/?page=${searchPage}`).then((response) =>{
      setData(response.data?.items || [])
      console.log(response.data)    
    }).catch((error) => {
      console.error("NÃO FOI POSSIVEL ACESSAR A API", error)
      setData([])
    })
  }, [searchPage])

  return (
    <>

      <main>
        <div className={s.logo}>
          <img className={s.logoIMG} src={logo}/>
          <h1>API</h1>
        </div>
          
        <div className={s.input}>
          <input type='text' value={searchPage} onChange={(e) => setSearchPage (e.target.value)} placeholder='1/6'/>
        </div>
        <div className={s.wrapCards}>
         {Array.isArray && data.map((item, index) => {
            return(
              <div key={index}>
                <Card image={item.image} name={item.name} race={item.race} ki={item.ki}/>
              </div>
            ) 
          })}
        </div>
      </main>
    </>
  )
}

export default App
