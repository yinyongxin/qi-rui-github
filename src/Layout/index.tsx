import NavBar from "./NavBar"
import FootBar from "./FootBar"
import Content from "./Content"
import './styles.less'
import { useMobile } from "@/utils/hooks/useMobile"

const Loyout = () => {
  const isMobile = useMobile()
  return (
    <div className="layout">
      {!isMobile && <NavBar />}
      <Content />
      {isMobile && <FootBar />}

    </div>
  )
}

export default Loyout