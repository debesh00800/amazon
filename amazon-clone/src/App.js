import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home'
import Login from "./Login";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { auth } from "./firebase";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import { useStateValue } from "./StateProvider";
import Stripe from "./Stripe";
import Orders from "./Orders";
const promise=loadStripe('pk_test_51NDk6fSFlcP5XvbMLRZYqlo2v0WuNoflyU54rs8MdxCli5QQMPW81GDSEEcZXQVRFxVKFXmqyga7AlIEkBKXqTVv00ccuE7Xiw');

function App() {
  const [{},dispatch]=useStateValue();
   //important function useeffect
  useEffect(()=>{
    
    auth.onAuthStateChanged(authUser=>{
      console.log('The user is>>>  ', authUser );
      
      if(authUser){
        //the user just logged in or wal already logged in

        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //user is logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/checkout" element={[<Header />,<Checkout/>]}/>
          {/* <Header/>
          
        </Route> */}
       
        
         
         <Route path="/payment" element={[<Header/>,<Stripe/>]} />
          
        <Route path="/" element={[<Header/> ,<Home/>]}/>
         <Route path="/login" element={<Login/>}/>
        {/* </Route> */}
      </Routes>
      
      {/*Header */}
    </div>
    </Router>
  );
}

export default App;
 