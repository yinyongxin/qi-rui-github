import { FC } from "react"
import { ExempleComponentPropType } from "./types"
import styles from './styles.module.less'

const ExemplePage: FC<ExempleComponentPropType> = () => {
  return (
    <div className={styles.exemplePage}>
      ExemplePage
      <div className={styles.text}>
        Text
      </div>
    </div>
  )
}

export default ExemplePage