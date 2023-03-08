import React from 'react'
import './styles.css'

export default function InputField() {
  return (
    <form className='input'>
        <input type='input' placeholder='Enter  a task' className='input__box' />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}
