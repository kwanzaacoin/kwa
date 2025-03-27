import Link from "next/link"
import Image from "next/image"
import { WalletButton } from "@/components/wallet-button"

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
  return (
    <nav className="border-b border-gray-800 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link href="/" className="flex flex-shrink-0 items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src="https://raw.githubusercontent.com/kwanzaacoin/kwa/67cc4746875bd5ba507f22f3e9f26973caa12bfd/Kwanzaa_Without_Background.png"
                  alt="Kwanzaa Coin"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <span className="text-xl font-bold text-white">Kwanzaa Coin</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <WalletButton />
          </div>
        </div>
      </div>
    </nav>
  )
}