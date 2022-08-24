import ExempleComponent from '@/components/ExempleComponent'
import { useAppDispatch, useAppSelector } from '@/utils/hooks'
import { appLocalStorage } from '@/utils/tools';
import { useEffect } from 'react'
const Home = () => {
  return (
    <div style={{
      height: '100%',
      fontSize: 60
    }} className='flex-center'>
      Welcome
    </div>
  )
}
export default Home