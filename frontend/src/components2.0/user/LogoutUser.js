// import React, { useState } from 'react'
// import axios from 'axios'
// import Auth from '../../lib/auth'



// const Logout = (props) => {
  
//   // const [data, setData] = useState({
//   //   email: '',
//   //   password: ''
//   // })
//   // const [errors, setErrors] = useState({
//   //   errors: {}
//   // })


//   async function handleLogout() {
//     await Auth.signOut()
  
//     userHasAuthenticated(false)
  
//     props.history.push('/')
//   }


//   return <section className="section">
//     <div className="container">
//       <div className="title">Logout</div>
//       {/* Form to complete registration */}
//       <form className="form" onSubmit={(e) => handleSubmit(e)}>
//         {/* We use bulma field, label and control classes for nice forms */}
//         <div className="field">
//           <label htmlFor="" className="label">
//             Email
//           </label>
//           <div className="control">
//             <input
//               onChange={(e) => handleChange(e)}
//               type="text"
//               name="email"
//               className="input"
//             />
//           </div>
//           {/* {this.state.errors.email && <small className="help is-danger">
//             {this.state.errors.email}
//           </small>} */}
//         </div>
//         <div className="field">
//           <label htmlFor="" className="label">
//             password
//           </label>
//           <div className="control">
//             <input
//               onChange={(e) => handleChange(e)}
//               type="text"
//               name="password"
//               className="input"
//             />
//           </div>
//           {/* {this.state.errors.username && <small className="help is-danger">
//             {this.state.errors.username}
//           </small>} */}
//         </div>
       
//         <button className='button is-success'>
//           Log out
//         </button>
//       </form>
//     </div>
//   </section>

// }



// export default Logout