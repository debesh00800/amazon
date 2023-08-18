export const initialState={
    basket:[],
    user:null
}
//selector
//fancy way of writing for loop and incrementting to add total
export const getbasketTotal=(basket) =>
    basket?.reduce((amount,item)=> Number(item.price)+amount,0)



// reducer just listens and says oook u just updated the basket ,  ook u just removed from the basket

// below is code to create reducer
// reducer listens for a dispatch into data layer

const reducer=(state,action)=>{
    console.log(action);
    
    switch(action.type){
        case "ADD_TO_BASKET":
        return{
            ...state,
            basket:[...state.basket,action.item],
        };
        case "REMOVE_FROM_BASKET":
              
                const index=state.basket.findIndex(
                    //== instead of === as we converted string to number befoe for computing total
                    (basketItem)=>basketItem.price==action.price
                )
                let newBasket=[...state.basket];

                if(index>=0){
                    newBasket.splice(index,1);
                }else{
                    console.warn('cant remove:${action.price}')
                }
                return{
                    ...state,
                    basket:newBasket
                }
                case "SET_USER":
                    return{
                        ...state,
                        user:action.user
                    }
        default: return state;

        }
    };
    export default reducer;
