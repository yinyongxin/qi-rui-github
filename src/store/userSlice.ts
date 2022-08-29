import { createSlice } from '@reduxjs/toolkit'
export interface UserInfoInterface {
  info: {
    admin: boolean
    avatar: string
    createBy: null
    createTime: null
    delFlag: string
    deptId: null
    email: string
    id: number
    inductionTime: null
    jobAge: null
    jobNumber: null
    phoneNumber: string
    status: string
    updateBy: number
    updateTime: string
    username: string
  } | null;
}

const initialState: UserInfoInterface = {
  info: JSON.parse(localStorage.getItem('user'))
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updater: (state, { payload }) => {
      state.info = payload
    },
  },
})

export const userActions = userSlice.actions


export const userReducer = userSlice.reducer

