import "../styles/globals.css"
import * as Fathom from "fathom-client"
import { useRouter } from "next/router"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load("KZWMGYWA", {
      includedDomains: ["yourdomain.com"],
    })
    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    router.events.on("routeChangeComplete", onRouteChangeComplete)
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete)
    }
  }, [])

  return <Component {...pageProps} />
}
export default MyApp
