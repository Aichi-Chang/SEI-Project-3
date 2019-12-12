import React, { useState, useEffect } from 'react'
import Auth from '../../lib/auth'
import axios from 'axios'



const CommentForm = ({ url, updateData, data }) => {
  const [formData, setFormData] = useState('')
  const [errors, setErrors] = useState({
    errors: []
  })

  // function getcomment(){
  //   axios.get(comment)
  //   .then((response)=>setFormData(response))
  // }

  // useEffect(getcomment, [])

  function handleChange(e) {
    setFormData(e.target.value)
    setErrors({ ...errors, errors: '' })
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post( url , { content: formData }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(response => {
        const newData = { ...data }
        newData.comments = response.data 
        updateData(newData)
        setFormData('')
        // getcomment()
      })
      .catch(err => setErrors({ ...err, errors: err.data }))
  }
  


  return (
    <div>
      {Auth.isAuthenticated() && <h6>Hi {`${Auth.getUser().username}`}, what's on your mind?</h6>}
      {Auth.isAuthenticated() && <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          onChange={(e) => handleChange(e)}
          className="name-bar form-control"
          placeholder="Your Comment"
          value={formData}
          name="content"
          rows="5"
        /><br></br>
        <button className="comment-bar">
          Send Comment
        </button>
      </form>}
    </div>

  )
}





export default CommentForm