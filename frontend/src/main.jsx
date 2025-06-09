import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MenuContextProvider from './context/MenuContext.jsx'

createRoot(document.getElementById('root')).render(
  <MenuContextProvider>
    <App />
  </MenuContextProvider>,
)

