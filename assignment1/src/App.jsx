import { useState } from 'react'
import DataDisplay from './component/DataDisplay.jsx'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [isLoading , setIsLoading ] = useState(false)
  const [error, setError] = useState(null)

  async function fetchData (){
    setIsLoading(true)
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.coM/posts`)
      let finalRes = await res.json()
      setData(finalRes)
      console.log(data);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setError(true)
      setIsLoading(false)
    }
  }

  if(isLoading){
    return <p style={{textAlign:"center",marginTop:"50px"}}>Loading...</p>
  }
  if(error){
    return <p style={{textAlign:"center",marginTop:"50px"}}>Error due to some problem</p>
  }

  return (
    <>
    <div style={{display:"flex",justifyContent:"center"}}>
      <button style={{padding:"10px",margin:"10px",borderRadius:"10px",backgroundColor:"lightcyan"}} onClick={fetchData}>Fetch Data</button>
    </div>
      <DataDisplay data={data}/>
    </>
  )
}

export default App
