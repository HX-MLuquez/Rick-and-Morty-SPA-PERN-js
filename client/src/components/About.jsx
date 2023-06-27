import React from 'react'
import style from '../styles/About.module.css'

export default function About() {
  return (
    <div className={style.about}>
        <h1>Soy Mauro, un dev en crecimiento</h1>
        <h2>actualmente estudio POO</h2>
        <p>React Hook useEffect has a missing dependency: 'seteandoTitle'. 
            Either include it or remove the dependency array. If 'seteandoTitle' 
            changes too often, find the parende it or remove the dependency t 
            component that defines it and wrap that definition in useCallback</p>
    </div>
  )
}
