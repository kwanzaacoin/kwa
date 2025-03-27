import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, ArrowRight, Download, Coins } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    title: "Create a Wallet",
    description:
      "Download and set up a Solana-compatible wallet like Phantom or Solflare to store your Kwanzaa Coins securely.",
    icon: Wallet,
    action: {
      text: "Recommended Wallets",
      href: "https://solana.com/ecosystem/wallets"
    }
  },
  {
    title: "Get SOL",
    description:
      "Purchase SOL from a major exchange and transfer it to your Solana wallet. You'll need SOL to buy Kwanzaa Coin.",
    icon: Download,
    action: {
      text: "Where to Buy SOL",
      href: "https://solana.com/ecosystem/exchanges"
    }
  },
  {
    title: "Swap for Kwanzaa",
    description:
      "Connect your wallet to our approved DEX partners and swap your SOL for Kwanzaa Coin using our token address.",
    icon: Coins,
    action: {
      text: "View Token Address",
      href: "#token-address"
    }
  }
]

export default function HowToBuy() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold">How to Buy Kwanzaa Coin</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Follow these simple steps to purchase and hold Kwanzaa Coin. Our process is designed to be
          straightforward and secure.
        </p>
      </section>

      {/* Steps Section */}
      <section className="mb-16">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title}>
              <CardHeader>
                <div className="mb-4 flex items-center justify-between">
                  <step.icon className="h-8 w-8 text-primary" />
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                <a
                  href={step.action.href}
                  className="inline-flex items-center text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {step.action.text}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Token Information */}
      <section id="token-address" className="rounded-lg bg-gray-50 p-8 dark:bg-gray-800/50">
        <h2 className="mb-6 text-2xl font-bold">Token Information</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Token Address</h3>
            <code className="block rounded bg-gray-100 p-2 text-sm dark:bg-gray-800">
              KWZ1234...789
            </code>
          </div>
          <div>
            <h3 className="font-medium">Decimals</h3>
            <p>9</p>
          </div>
          <div>
            <h3 className="font-medium">Network</h3>
            <p>Solana Mainnet</p>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="mt-16 rounded-lg border border-yellow-200 bg-yellow-50 p-6 dark:border-yellow-900 dark:bg-yellow-900/20">
        <h2 className="mb-4 text-xl font-bold text-yellow-800 dark:text-yellow-200">
          Important Safety Notice
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-yellow-800 dark:text-yellow-200">
          <li>Always verify the token address before making any transactions</li>
          <li>Never share your wallet's private key or seed phrase with anyone</li>
          <li>Be cautious of scams and fake token addresses</li>
          <li>Only use official DEX partners for trading</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <h2 className="mb-6 text-2xl font-bold">Ready to Join the Community?</h2>
        <div className="flex justify-center gap-4">
          <Link href="/staking">
            <Button size="lg">Start Staking</Button>
          </Link>
          <Link href="/faqs">
            <Button variant="outline" size="lg">
              View FAQs
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}