import React from 'react'

const Input = ({ field, fieldSub }) => {
  return (
    <div className={`uk-margin flex flex-col justify-center gap-2`}>
      <span>{field}</span>
      <div className='uk-inline'>
        <input className="uk-input rounded-lg" type="text" aria-label="Not clickable icon" />
      </div>
    </div>)
}

export default Input