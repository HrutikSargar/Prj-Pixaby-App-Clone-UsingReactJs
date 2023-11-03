
import { useEffect, useState } from 'react'
import Navbar from './New_folder/Navbar'

const App = () => {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=40363756-160f89c7768a2a4e2b0888016&q=${search}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(d => setData(d.hits))
  }, [data])

  return (
    <div className="App">
      <Navbar />
      <center><input type="text" onChange={(e) => setSearch(e.target.value)}></input></center>
      {data.map((x) => {
        return (
          <section key={x.type} className="secimg">
            <img src={x.webformatURL} height={x.webformatHeight} width={x.webformatWidth}></img>
          </section>
        )
      })}
    </div>
  )
}

export default App
