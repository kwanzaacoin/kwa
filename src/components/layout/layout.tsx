import { Navbar } from "./navbar"
import Head from "next/head"
import { Toaster } from "@/components/ui/toaster"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Kwanzaa Coin - Community Driven Cryptocurrency</title>
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/kwanzaacoin/kwa/67cc4746875bd5ba507f22f3e9f26973caa12bfd/Kwanzaa_Without_Background.png"
          type="image/png"
        />
        <meta name="description" content="The first cryptocurrency built on the principles of Kwanzaa" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-800 py-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Kwanzaa Coin. All rights reserved.
          </p>
        </footer>
        <Toaster />
      </div>
    </>
  )
}