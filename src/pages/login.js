
import React from 'react'

function login() {
  return (
    <div>
        <>
        <form method="post">
            <input type='email' placeholder='email'/> 
            <input type='password' placeholder='contraseña'/>
            <input type='password' placeholder='confirmar contraseña'/>
        </form>
        </>
    </div>
  )
}

export default login