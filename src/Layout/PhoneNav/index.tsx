
import styles from './index.module.less'
import { useMobile } from "@/utils/hooks/useMobile"
import { useLocation } from 'react-router-dom'
import { useLocale } from '@/utils/hooks'
import { Icon } from 'qirui-digitization-ui'
import { PhoneNavType } from './types'
import { FC } from 'react'

const PhoneNav: FC<PhoneNavType> = (props) => {
  const location = useLocation()
  const local = useLocale()
  return (
    <div className={styles.phoneNav}>
      {props.leftPath && <div className={styles.back}>
        <Icon icon='chevron-left'></Icon>
      </div>}
      <div className={styles.title} > {local(location.pathname)}</div>
    </div >
  )
}

export default PhoneNav