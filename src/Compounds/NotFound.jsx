import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <div className='container text-center mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5'>404 Not Found</h1>
                <p className='fs-4 ' >We couldn’t find the page you were looking for. Visit <Link to="/" style={{textDecoration:"none"}}>Zerodha’s home page</Link> </p>
            </div>
        </div>
    </div>
  )
}

export default NotFound
