import React from 'react'

const TutorialPopup = ({setOnActive}) => {
  return (
    <div className='w-150 h-120 absolute left-[30%] bottom-0 bg-green-200' >
        <button onClick={() => setOnActive(false)}>Close</button>
        Hello world
    </div>
  )
}

export default TutorialPopup