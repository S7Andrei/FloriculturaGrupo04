import React from 'react'

const NotFound = () => {
  return (
    <>
    <div>
        <h2>Sorry</h2>
        <p>That page cannot be found!</p>
        <Link to="/Home">Back to the homepage...</Link>
    </div>
    </>
  )
}

export default NotFound