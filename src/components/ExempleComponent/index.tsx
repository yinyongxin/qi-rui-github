import { FC } from "react"
import { ExempleComponentPropType } from "./types"
import styles from './styles.module.less'

const ExempleComponent: FC<ExempleComponentPropType> = () => {
  return (
    <div className={styles.exempleComponent}>
      ExempleComponent
      <div className={styles.text}>
        Text
      </div>
    </div>
  )
}

export default ExempleComponent