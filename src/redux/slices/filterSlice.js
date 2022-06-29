import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    }
   
  
  },
})


export const { setCategoryId } = filterSlice.actions

export default filterSlice.reducer