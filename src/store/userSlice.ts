import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: {
    name: '',
    age: '',
    id: '',
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updata: state => {
      state.info  = {
        name: '',
        age: '',
        id: '',
      }
    },
  },
})

export const userActions = userSlice.actions


export const userReducer = userSlice.reducer

