import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Layout } from "@/components/layout/layout"
import { Toaster } from "@/components/ui/toaster"
import { useEffect } from "react"

export default function App({ Component, pageProps }: AppProps) {
  // Ensure dark theme is applied
  useEffect(() => {
    document.documentElement.classList.add("dark")
    document.body.className = "bg-black text-white"
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  )
}
