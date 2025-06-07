import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProducts,loadProductFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

//import '../data/cart-class.js';
//import '../data/backend-practice.js';
async function loadPage() {
try{
    
   await loadProductFetch();

  const value= await  new Promise((resolve) =>{
    loadCart(() =>{
        
        resolve('value4');
    });
});
} catch(error){
    console.log('unexpected error . please try again later.');
}
 
    renderOrderSummary();
    renderPaymentSummary();
            
}
loadPage();
/*
Promise.all([
    loadProductFetch(),
    new Promise((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    })
]).then((values) =>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/
/*
new Promise((resolve) =>{
    loadProducts(() =>{
        resolve('value1');
    }); 
}).then((value) =>{
    console.log(value);
    return new Promise((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    });
}).then(() =>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/
/*
loadProducts(() =>{
   loadCart(() =>{
    renderOrderSummary();
    renderPaymentSummary();
   });
});
*/