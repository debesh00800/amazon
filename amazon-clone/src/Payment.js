import React ,{useState, useEffect} from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement ,useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';
import { getbasketTotal } from './reducer';
import { db  } from './firebase';
function Payment() {
    const [{basket,user},dispatch]=useStateValue();

    const stripe=useStripe();
    const navigate=useNavigate();
    const elements=useElements();

    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);
    const [succeeded, setSucceeded]=useState(false);
    const [processing, setProcessing]=useState("");
const [clientSecret,setClientSecret]= useState("");
    useEffect(()=>{
        // generate special stripe secret which allows to charge customer
        const getClientSecret=async()=>{
            //axios is a way of making request
            const response=await axios({
                method:'post',
                //convert according to stripes acceptance
                url:`/payments/create?total=${getbasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    console.log("the secret is>>>>> ",clientSecret);
    const  handleSubmit=async(event)=>{
        //stripe
        event.preventDefault();
        setProcessing(true);
        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //paymentintent =payment confirmation
            console.log("yeh raha   ",paymentIntent)
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            })


            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type:'EMPTY_BASKET'
            })
            navigate("../orders", { replace: true })
        }).catch((error) => {
            // Handle the error here
            console.log('Error:', error);
            setError(error);
            setProcessing(false);
         });


    }
    const handleChange= event=>{
           //listen for chamges in card element and dislay any errors as the customer types their card details
            setDisabled(event.error);
            setError(event.error?event.error.message: "");
        }     
  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout(
                    <Link to="/checkout">{basket?.length} items</Link>)
            </h1>
            <div className="payment__section">
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>MNK road</p>
                    <p>Nalhati, WB</p>

                </div>

            </div>

            <div className="payment__section">
                <div className='payment__title'>
                    <h3>review items and delivery</h3>

                </div>
                <div className='payment__items'>
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

            <div className="payment__section">
                <div className='"payment__title'>
                    <h3>Payment Method</h3>

                </div>
                <div className="payment__details">

                    {/* stripe funcionality */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className='payment__priceContainer'>
                        <CurrencyFormat renderText={(value)=>(
                            <>
                               <h3>Order Total:{value}</h3>
                            </>
                        )}


                        decimalScale={3}
                        value={getbasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"Rs"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>Processing</p>: "Buy Now"}</span>

                        </button>

                        </div>
                         {error && <div>{error}</div>}
                    </form>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Payment