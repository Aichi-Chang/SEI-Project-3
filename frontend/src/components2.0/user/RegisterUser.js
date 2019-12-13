import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import axios from 'axios'
import 'bulma'



const RegisterUser = (props) => {
  
  // const history = useHistory()

  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })
  const [errors, setErrors] = useState({
    errors: ''
  })


  function handleChange(e) { 
    e.persist()
    console.log(data)
    // [e.target.name] is a [key], so doesn't matter what we type inside
    // it will be generate to a key in our object
    // see here: https://stackoverflow.com/questions/50376353/wy-we-need-to-put-e-target-name-in-square-brackets
    setData(data => ({ ...data, [e.target.name]: e.target.value }))
    setErrors(errors => ({ ...errors, [e.target.name]: '' }))
  }

  function handleSubmit(e) {
    // e.persist()
    e.preventDefault()
    axios.post('/api/register', data)
      .then(res => {
        console.log(res.data)
        if (errors.errors === '')
          props.history.push('/login')
      }) 
      //this will catch our error in the backend, and setError will save it in our front end
      // ...errors, if they were empty(no error). Keep them empty
      // and if there is any new errors, update them with ...err.errors
      .catch(err =>setErrors({ ...errors, ...err.errors }))
  }
  


  return <section className="section">
    <div className="container">
      <div className="titleOne">Register</div>
      {/* Form to complete registration */}
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        {/* We use bulma field, label and control classes for nice forms */}
        <div className="field">
          <label htmlFor="" className="label">
            Email
          </label>
          <div className="control">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              required={true}
              name="email"
              className="input"
            />
          </div>
          {/* {this.state.errors.email && <small className="help is-danger">
            {this.state.errors.email}
          </small>} */}
        </div>
        <div className="field">
          <label htmlFor="" className="label">
            Username
          </label>
          <div className="control">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              required={true}
              name="username"
              className="input"
            />
          </div>
          {/* {this.state.errors.username && <small className="help is-danger">
            {this.state.errors.username}
          </small>} */}
        </div>
        <div className="field">
          <label htmlFor="" className="label">
            Password
          </label>
          <div className="control">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              required={true}
              name="password"
              className="input"
            />
          </div>
          {/* {this.state.errors.password && <small className="help is-danger">
            {this.state.errors.password}
          </small>} */}
        </div>
        <div className="field">
          <label htmlFor="" className="label">
            Confirm password
          </label>
          <div className="control">
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              required={true}
              name="passwordConfirmation"
              className="input"
            />
          </div>
          {/* {this.state.errors.passwordConfirmation && <small className="help is-danger">
            {this.state.errors.passwordConfirmation}
          </small>} */}
        </div>
        <button className='button is-dark'>
          <strong>Complete Registration</strong>
        </button>
        <div>
          <p>Already have an account?<a href={'/login'}> <strong>Click here to log in!</strong></a></p>
        </div>
      </form>
    </div>
  </section>
}



export default RegisterUser