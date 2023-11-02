import React from 'react'

const Header = () => {
  return (
    <div>
      <h1 style={headingStyle}>Todo List</h1>
    </div>
  )
}

const headingStyle ={
  textAlign: 'center',
  background: '#0f0f0f',
  padding: '10px',
  color: 'white',
  margin: '0'
}

export default Header