// for Add items to cart
export const addCart =(product)=>{
 return{

     type:"ADDITEM" ,
     payload:product
 }
}

// for Delete items to card 
export const delCart =(product)=>{
    return{
   
        type:"DELITEM" ,
        payload:product
    }
   }