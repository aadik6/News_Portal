import React from 'react'
import "./career.css"

const career = ({close})=> {
  return (
    <div className='career'>
      <button onClick={close} className='closeBtn'>X</button>
      <div className="careerContainer"><h1>Join Our team</h1>
      <p>opps currently there is no any vacancy</p>
      <button onClick={close}>Ok</button></div>     
    </div>
  )
}

export default career
