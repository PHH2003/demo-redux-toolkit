import { createSlice } from '@reduxjs/toolkit'
import { addProduct, deleteProduct, getAllproduct, updateProduct } from '../action/product'


const initialState = {
  products: []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllproduct.fulfilled,(state: any, action)=> {
        state.products = action.payload
    })
    builder.addCase(deleteProduct.fulfilled,(state: any, action)=> {
        const id: any = action.payload
        state.products = state.products.filters((item: any) => item.id != id)
    })
    builder.addCase(addProduct.fulfilled,(state: any, action)=> {
        state.products.push(action.payload)
    })
    builder.addCase(updateProduct.fulfilled,(state: any, action)=> {
        const product: any = action.payload

        state.products = state.product.map((item: any)=> item.id == product.id ? product: item)
    })
  }
    
})

export const productReduce = productSlice.reducer