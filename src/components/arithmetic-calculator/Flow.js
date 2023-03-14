import React from 'react'
import img from '../../images/Arith-Flowchart.png'

function Flow() {
  return (
    <div>
      <h2 className="mainbar-main-heading">Flow Chart</h2>
      <div className="mainbar-main-line"></div>
      <br />
      <br />

      <img src={img} alt="Arth flowchart" className='normal-img'/>
    </div>
  )
}

export default Flow
