import { createSlice } from '@reduxjs/toolkit'
export interface interfaceInfo {
  admin: boolean
  avatar: string
  createBy: null
  createTime: null
  delFlag: string
  deptId: null
  email: string
  id: number
  inductionTime: null | string
  jobAge: null | string
  jobNumber: null | string
  phoneNumber: string
  status: string
  updateBy: number
  updateTime: string
  username: string
};
export interface UserInfoInterface {
  info: interfaceInfo

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

