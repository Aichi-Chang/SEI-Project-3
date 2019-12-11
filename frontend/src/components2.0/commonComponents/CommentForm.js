import React, { useState, useEffect } from 'react'
import Auth from '../../lib/auth'
import axios from 'axios'



const CommentForm = ({ url }) => {
  const [formData, setFormData] = useState('')
  const [errors, setErrors] = useState({
    errors: []
  })


  function handleChange(e) {
    setFormData(e.target.value)
    setErrors({ ...errors, errors: '' })
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post( url , { content: formData }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => setFormData(''))
      .catch(err => setErrors({ ...err, errors: err.data }))
  }


  return (
    <div>
      <h6>Hi! {`${Auth.getUser().username}`}, What is in your mind?</h6>
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          onChange={(e) => handleChange(e)}
          className="form-control"
          placeholder="Your Comment"
          value={formData}
          name="content"
          rows="5"
        />
        <button>
          Send Comment
        </button>
      </form>
    </div>

  )
}





export default CommentForm