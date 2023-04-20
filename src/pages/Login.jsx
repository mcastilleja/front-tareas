import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = () => {

  const [ fromData, setFormData ] = useState({
    email : '',
    password : ''
  })

  const { email, password } = fromData

  const onChange = (e) => {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className='heading'>
        <h4>
          <FaSignInAlt /> Login
        </h4>
        <p>Por favor teclea tus credenciales</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              className='form-control' 
              type="email" 
              name='email' 
              id='email' 
              value={email} 
              placeholder='Teclea tu email' 
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input 
              className='form-control' 
              type="password" 
              name='password' 
              id='password' 
              value={password} 
              placeholder='Teclea tu password' 
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login