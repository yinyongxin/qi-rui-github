import ExempleComponent from '@/components/ExempleComponent'
import { useAppDispatch, useAppSelector } from '@/utils/hooks'
import { appLocalStorage } from '@/utils/tools';
import { useEffect } from 'react'
const Home = () => {
  return (
    <div>
      <ExempleComponent />
      Home
    </div>
  )
}
export default Home