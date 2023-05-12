import React from 'react'

function Navbar() {
  return (
    <div className='bg-cyan-300 flex justify-center text-black h-[60px] w-full py-2 px-6 '>
        <diV className=' h-full w-10/12 my-auto flex jutify-between items-center'>
            <ul className='flex justify-center items-center gap-6 text-[#efefef] text-[18px]'>
                <li>Inicio</li>
                <li>contactos</li>
                <li>perfil</li>
                <li>Login </li>
                <li>Registro</li>
            </ul>
        </diV>
    </div>
  )
}

export default Navbar