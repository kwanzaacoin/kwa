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
        <meta name="theme-color" content="#BE3B31" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex min-h-screen flex-col bg-background">
        <div className="bg-primary h-1" /> {/* Kwanzaa red accent line */}
        <Navbar />
        <main className="flex-1 px-4 py-8">{children}</main>
        <div className="bg-secondary h-1" /> {/* Kwanzaa green accent line */}
        <footer className="border-t border-secondary py-8 bg-background">
          <div className="container mx-auto text-center">
            <p className="text-foreground font-medium">
              © {new Date().getFullYear()} Kwanzaa Coin. All rights reserved.
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <div className="w-4 h-4 bg-primary rounded-full" /> {/* Red dot */}
              <div className="w-4 h-4 bg-black rounded-full" /> {/* Black dot */}
              <div className="w-4 h-4 bg-secondary rounded-full" /> {/* Green dot */}
            </div>
          </div>
        </footer>
        <Toaster />
      </div>
    </>
  )
}