import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-cyan-300 flex justify-center text-black h-[60px] w-full py-2 px-6 '>
        <div className=' h-full w-10/12 my-auto flex jutify-between items-center'>
            <ul className='flex justify-center items-center gap-6 text-black-500 text-[18px]'>
                <li>Inicio</li>
                <li>contactos</li>
                <li>perfil </li>
                <Link href='/login'>
                    <li > Login </li>
                </Link>
                
                <li>Registro</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar