import React from 'react'

function Sale({detail}) {
    if (detail.sale) {
      return (
     <div className="badge bg-dark text-white position-absolute" id="cardSale">{detail.type}</div>
  )
  }
}

export default Sale