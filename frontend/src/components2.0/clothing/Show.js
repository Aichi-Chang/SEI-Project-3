import React from 'react'
import useAxios from '../UseAxios'
import 'bulma'

const SingleClothing = (props) => {
  const data = useAxios(`/api/clothing/${props.match.params.id}`)

  return <div>{data.title}</div>
}

export default SingleClothing