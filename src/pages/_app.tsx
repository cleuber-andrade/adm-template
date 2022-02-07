import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProvider } from '../contextApi/context/AppContext'
import { AuthProvider } from '../contextApi/context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  )
}

export default MyApp
