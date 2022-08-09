import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { userReducer } from './userSlice'
import { exempleReducer } from './exempleSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    exemple: exempleReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;