import React from 'react'
import "./Checkout.css";
import {Link} from "react-router-dom";
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{basket,user}, dispatch]=useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <Link to="https://www.amazon.in/minitv/tp/dccbc452-0ba9-4d99-9430-875e91e0607d?aaxitk=dd4ae293cac8f42b24c228c019e7203a&dplnk=mIngress&mtv_pt=gateway&refMarker=avod_in_gw_ad_dBTF_Open_CTBH_gen">
            <img className='checkout__ad' src='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/60389a14-64ed-4215-9b51-e23db1432fe4.jpg'/>
            </Link>
            
            <div>
                {/* optional chainingb is very important to avoid errors */}
                <h3>Hello, {user?.email}</h3>
                
                <h2 className='checkout__title'>Your Shopping Basket</h2>
            
            {basket.map(item=>(
                <CheckoutProduct
                
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating} 
                />
            ))}
            </div>

        </div>
        <div className='checkout__right'>
            <Subtotal/>
            
        </div>
    </div>
  )
}

export default Checkout