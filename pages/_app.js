import { useEffect } from "react"
import Head from "next/head"
import AOS from "aos"
import "aos/dist/aos.css"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <section className="w-[100%]">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <title>Workhub</title>
      </Head>
      
      <Component {...pageProps} />
    </section>
  )
}

export default MyApp
