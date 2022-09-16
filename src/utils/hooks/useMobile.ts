import { useEffect, useState } from 'react';


export const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const agents = ['iphone', 'ipad', 'ipod', 'android', 'linux', 'windows phone']; // 所有可能是移动端设备的字段
  const handleUserAgent = () => {
    let info = navigator.userAgent
    let isPhone = /mobile/i.test(info)
    setIsMobile(isPhone)
  }
  const handleResize = () => {
    handleUserAgent()
  }
  useEffect(() => {
    handleUserAgent()
    window.addEventListener('resize', handleResize)
  }, []);
  return isMobile
}
