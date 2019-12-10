import React from 'react'
import useAxios from './UseAxios'
const SingleClothing = (props) => {
  const data = useAxios(`/api/clothing/${props.match.params.id}`, {})
  return <div>{data.name}</div>
}
export default SingleClothing