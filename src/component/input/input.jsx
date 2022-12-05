import { render } from '@testing-library/react'
import React from 'react'
import './input.css'
function Input(props) {
  return (
  <div class="form-input">
    {props.name} <br></br>
  <input type="number" onChange={props.change}/>
  </div>
    )
}

export default Input