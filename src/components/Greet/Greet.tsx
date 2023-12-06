import React from 'react'

interface greetProps {
    name?: string
}

const Greet = ({name}: greetProps) => {
  return (
      <div>Greet {name}</div>
  )
}

export default Greet