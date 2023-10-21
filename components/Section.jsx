
import Card from './Card';
const data = [{
  id:1,
  detail:{
    type: 'sale',
    pricestart: '$40.00',
    priceend:'$80.00',
    sale: false,
    one:false,
},
  itemName: 'Fancy Product',
  rating: {
    star: false,
    value:'<i className="fa-solid fa-star"></i>'
  }
},
  {
  id:2,
  detail:{
    type: 'sale',
    pricestart: '$20.00',
    priceend:'$18.00',
    sale: true,
    one:false,
},
  itemName: 'Special Item',
  rating: {
    star: true,
    value:'<i className="fa-solid fa-star"></i>'
    }
  },
  {
  id:3,
  detail:{
    type: 'sale',
    pricestart: '$50.00',
    priceend:'$25.00',
    sale: true,
    one:false,
},
  itemName: 'Sale Item',
  rating: {
    star: false,
    value:'<i className="fa-solid fa-star"></i>'
    }
  },
  {
  id:4,
  detail:{
    type: 'sale',
    pricestart: '$40.00',
    priceend:'',
    sale: false,
    one:true,
},
  itemName: 'Popular Item',
  rating: {
    star: true,
    value:'<i className="fa-solid fa-star"></i>'
    }
  },
{
  id:5,
  detail:{
    type: 'sale',
    pricestart: '$50.00',
    priceend:'$25.00',
    sale: true,
    one:false,
},
  itemName: 'Sale Item',
  rating: {
    star: false,
    value:'<i className="fa-solid fa-star"></i>'
    }
  },
{
  id:6,
  detail:{
    type: 'sale',
    pricestart: '$120.00',
    priceend:'$180.00',
    sale: false,
    one:false,
},
  itemName: 'Fancy Product',
  rating: {
    star: false,
    value:'<i className="fa-solid fa-star"></i>'
  }
},
{
  id:7,
  detail:{
    type: 'sale',
    pricestart: '$20.00',
    priceend:'$18.00',
    sale: true,
    one:false,
},
  itemName: 'Special Item',
  rating: {
    star: true,
    value:'<i className="fa-solid fa-star"></i>'
    }
  },
 {
  id:8,
  detail:{
    type: 'sale',
    pricestart: '$40.00',
    priceend:'',
    sale: false,
    one:true,
},
  itemName: 'Popular Item',
  rating: {
    star: true,
    value:'<i className="fa-solid fa-star"></i>'
    }
  },]
  
function Section({cart,setcart }) {
  return (
    <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
            data.map((card, i) =>
              <Card key={i} cart={cart} setcart={setcart} carddetail={ card} />)
                  }
                </div>
            </div>
        </section>
  )
}

export default Section