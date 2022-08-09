import { FC } from "react"
import { ExempleComponentPropType } from "./types"
import styles from './styles.module.less'

const LeftLogo: FC<ExempleComponentPropType> = () => {
  return (
    <div className={styles.leftLogo}>
      LeftLogo
    </div>
  )
}

export default LeftLogo