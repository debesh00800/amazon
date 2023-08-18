import React from 'react'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Payment from './Payment'

const promise=loadStripe('pk_test_51NDk6fSFlcP5XvbMLRZYqlo2v0WuNoflyU54rs8MdxCli5QQMPW81GDSEEcZXQVRFxVKFXmqyga7AlIEkBKXqTVv00ccuE7Xiw');
function Stripe() {

  return (
    <div>
        <Elements stripe={promise}>
            <Payment/>

        </Elements>
    </div>
  )
}

export default Stripe