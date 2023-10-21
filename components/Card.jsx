import { useState } from "react";
import Sale from "./Card/sale";
import Rating from "./Card/Rating";
import Price from "./Card/Price";


function Card({cart,setcart,carddetail }) {

    console.log(carddetail)
    const [button, setbutton] = useState('Add to Cart');
    
   
    function buttontext() {
        
        setTimeout(() => {
            if (button == 'Add to Cart') {
                setbutton('Remove from Cart');
                setcart(cart+1);
            
            } else {
                setbutton('Add to Cart');
            setcart(cart-1);
            
        }
        },600)
        
    }
  return (
    <div className="col mb-5">
          <div className="card h-100">
                            {/* <!-- Sale badge--> */}
                            <Sale detail={carddetail.detail} />
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{ carddetail.itemName}</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <Rating detail={carddetail.rating} />
                                        <Rating detail={carddetail.rating} />
                                        <Rating detail={carddetail.rating} />
                                        <Rating detail={carddetail.rating} />
                                        <Rating detail={carddetail.rating} />
                                    </div>
                                    {/* <!-- Product price--> */}
                                    <Price detail={carddetail.detail}/>
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><button className="btn btn-outline-dark mt-auto"  onClick={buttontext} >{ button}</button></div>
                            </div>
                        </div>
                    </div>
  )
}

export default Card