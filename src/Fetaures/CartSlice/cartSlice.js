import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
    ammount: 0,
    totalPrice: 0,
    totalAmmount: 0,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const productId = payload;
      const exist = state.cart.find((product) => {
        return product.id === productId.id;
      });
      console.log(exist);
      if (exist) {
        exist.ammount++;
        exist.totalPrice += productId.price;
        state.totalAmmount++;
        state.totalPrice += productId.price;
      } else {
        state.cart.push({
          id: productId.id,
          price: productId.price,
          ammount: 1,
          totalPrice: productId.price,
          img: productId.img,
          title: productId.title,
        });
        state.totalAmmount++;
        state.totalPrice += productId.price;
      }
    },
    removefromCart: (state, { payload }) => {
      const productId = payload;
      const exist = state.cart.find((product) => {
        return product.id === productId.id;
      });
      if (exist.ammount === 1) {
        state.cart = state.cart.filter((product) => {
          return exist.id !== product.id;
        });
        state.totalAmmount--;
        state.totalPrice -= productId.price;
      } else {
        state.totalAmmount--;
        state.totalPrice -= productId.price;
        exist.ammount--;
        exist.totalPrice -= productId.price;
      }
    },
  },
});

export const { addToCart , removefromCart  } = cartSlice.actions;

export default cartSlice.reducer;
