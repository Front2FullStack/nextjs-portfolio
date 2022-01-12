import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Sidebar } from '../components/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <div className="grid grid-cols-12 gap-6 px-5 my-16 lg:px-48">
      <div className="col-span-12 lg:col-span-3 bg-slate-400 rounded-2xl">
        <Sidebar/>
      </div>
      <div className="col-span-12 lg:col-span-9 bg-slate-400 rounded-2xl">
        <Component {...pageProps} />
      </div>
    </div>

  )
}

export default MyApp