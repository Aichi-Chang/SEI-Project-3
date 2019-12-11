import React from 'react'

export default function Comment(props) {
  const { text } = props.comment

  return (
    <div className="media mb-3">
      <h6 className="mt-0 mb-1 text-muted">{text}</h6>
    </div>
  )
}