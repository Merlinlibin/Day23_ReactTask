import React from 'react'

export default function Rating({detail}) {
    if (detail.star) {
        return (
            
            <div className="bi-star-fill"><i className="fa-solid fa-star"></i></div>
            
        )
    }
}

