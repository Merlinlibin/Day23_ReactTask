import React from 'react'

function Price({ detail }) {
    if (detail.sale === false & detail.one === false) {
        return (
            <div>{detail.priceend +'-'+detail.priceend }</div>
        )
    } else if (detail.sale === true & detail.one === false) {
        return (
            <div><span className="text-muted text-decoration-line-through">{detail.pricestart}</span>
                {' '+detail.priceend}</div>)
    }else if (detail.sale === false & detail.one === true) {
        return (
            <div>{detail.pricestart}</div>)
    }
}
export default Price