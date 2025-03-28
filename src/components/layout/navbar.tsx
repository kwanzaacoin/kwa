import Link from "next/link"
import Image from "next/image"
import { WalletButton } from "@/components/wallet-button"
import { useRouter } from "next/router"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Chapters", href: "/chapters" },
  { name: "How to Buy", href: "/how-to-buy" },
  { name: "FAQs", href: "/faqs" },
  { name: "Staking", href: "/staking" },
  { name: "Claim", href: "/claim" }
]

export function Navbar() {
  const router = useRouter()

  return (
    <nav className="bg-background border-b border-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          <div className="flex">
            <Link href="/" className="flex flex-shrink-0 items-center gap-3 group">
              <div className="relative h-10 w-10 transform transition-transform group-hover:scale-110">
                <Image
                  src="https://raw.githubusercontent.com/kwanzaacoin/kwa/67cc4746875bd5ba507f22f3e9f26973caa12bfd/Kwanzaa_Without_Background.png"
                  alt="Kwanzaa Coin"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                  className="brightness-110"
                />
              </div>
              <span className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
                Kwanzaa Coin
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-1">
            {navigation.map((item) => {
              const isActive = router.pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-md transition-colors
                    ${isActive 
                      ? 'text-white bg-primary' 
                      : 'text-foreground hover:text-primary hover:bg-primary/10'
                    }
                  `}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary" />
                  )}
                </Link>
              )
            })}
          </div>
          <div className="flex items-center">
            <WalletButton />
          </div>
        </div>
      </div>
    </nav>
  )
}