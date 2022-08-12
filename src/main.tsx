import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { GlobalContext } from './config'
import { routes } from './routes'
import { Provider } from 'react-redux';
import { store } from './store'

/**
 * styte  样式
 */
import "normalize.css"
import './index.css'
import 'qirui-digitization-ui/style'
import 'qirui-digitization-ui/icons/css'
import 'qirui-digitization-ui/theme'
import { appLocalStorage, changeTheme } from './utils/tools'

const appInit = () => {
  if (!appLocalStorage.getValue('theme')) {
    changeTheme('dark')
  }
  if (!appLocalStorage.getValue('lang')) {
    appLocalStorage.setValue('lang', 'zh-CN')
  }

}

const Main = () => {

  let elements = useRoutes(routes);

  useEffect(() => {
    appInit()
  }, [])

  return (
    <Provider store={store}>
      <GlobalContext.Provider
        value={{
          lang: 'zh-CN',
          theme: 'light'
        }}
      >
        {elements}
      </GlobalContext.Provider>
    </Provider>

  )
}

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <React.StrictMode>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </React.StrictMode>
  )
