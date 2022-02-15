import React from 'react'
import '../css/loader.css'
const Loader = () => {
    return (
        <div className='spinners'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader