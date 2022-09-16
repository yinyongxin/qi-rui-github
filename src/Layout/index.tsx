import NavBar from "./NavBar"
import FootBar from "./FootBar"
import Content from "./Content"
import PhoneNav from "./PhoneNav"
import styles from './index.module.less'
import { useMobile } from "@/utils/hooks/useMobile"

const Loyout = () => {
  const isMobile = useMobile()
  return (
    <div className={isMobile ? styles.layoutPhone : styles.layout}>
      {isMobile ? <PhoneNav /> : <NavBar />}
      <Content />
      {isMobile && <FootBar />}

    </div>
  )
}

export default Loyout