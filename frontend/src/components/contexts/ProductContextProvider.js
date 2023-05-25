import {useReducer, createContext} from "react";

export const ProductContext = createContext([]);

export const ProductDispatch = createContext(null);

export default function Section({children, initialProducts}){
    const [state, dispatch] =useReducer(productReducer,{
      products: initialProducts
    })

    return(
    <section className="section">
        <ProductContext.Provider value={state.products}>
            <ProductDispatch.Provider value={dispatch}>
              {children}
              </ProductDispatch.Provider>
        </ProductContext.Provider>
    </section>)
}



function productReducer(state, action){
 switch (action.type){
  case 'ADD_PRODUCT':{
    return {
      ...state,
      products: [...state.products, action.item],
      filteredProducts: [...state.filteredProducts, action.item]
    };
  }

  case "UPDATE_PRODUCT": {
    return {
      ...state,
      filteredProducts: state.filteredProducts.map((product) => {
        if (product.product_id === action.item.product_id) {
          product = action.item;
          return { ...product, product: action.item };
        }
        return product;
      }),
      products: state.products.map((product) => {
        if (product.product_id === action.item.product_id) {
          product = action.item;
          return { ...product, product: action.item };
        }
        return product;
      })
    };
  }

  case "DELETE_PRODUCT": {
    return {
      ...state,
      filteredProducts: state.filteredProducts.filter(
        (product) => product.product_id !== action.product_id
      ),
      products: state.products.filter((product) => product.product_id !== action.product_id),
    };
  }
   
  default:{
    throw Error("Unknown action");
  } 
  }
}