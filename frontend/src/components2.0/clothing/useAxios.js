import { useEffect, useState } from 'react'
import axios from 'axios'


const useAxios = (url, initialState = []) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
    return () => console.log('Route Changed')
  }, [])
  return data
  
}
export default useAxios