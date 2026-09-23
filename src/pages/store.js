import { configureStore, createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {name: '홍길동'},
  reducers: {
    changeName(state) {
      state.name = state.name;
    },
  },
});

export const { changeName } = user.actions;

const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem(state, action) {
      const index = state.findIndex((findId)=>
      findId.id === action.payload.id);
      if(index > -1){
        state[index].count++;
      } else {
        state.unshift(action.payload);
      }
    },
    deleteItem(state, action) {
      const index = state.findIndex((findId) =>
      findId.id === action.payload);
      state.splice(index, 1);
    },
    addCount(state, action) {
      const index = state.findIndex((findId)=>
      findId.id === action.payload);
      state[index].count++;
    },
    subCount(state, action) {
      const index = state.findIndex((findId)=>
      findId.id === action.payload);
      if(state[index].count === 0) {
        state[index].count = 0;
      } else {
        state[index].count--;
      }
    },
    deleteMulti(state, action) {
      return state.filter(item => !action.payload.includes(item.id));
    }
  }
});

const wish = createSlice({
  name: 'wish',
  initialState: [],
  reducers: {
    toggleWish(state, action) {
      const index = state.findIndex((item)=>
      item.id === action.payload.id);
      if(index > -1) {
        state.splice(index, 1);
      } else {
        state.unshift(action.payload);
      }
    },
    deleteWishItem(state, action) {
      const index = state.findIndex((item) => 
      item.id === action.payload);
      if(index > -1) {
        state.splice(index, 1);
      }
    },
    deleteMultiWishes(state, action) {
      return state.filter(item => !action.payload.includes(item.id));
    }
  }
});
export const { toggleWish, deleteWishItem, deleteMultiWishes } = wish.actions;

export const {addItem, deleteItem, addCount, subCount, deleteMulti} = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
    wish: wish.reducer,
  },
});