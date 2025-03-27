import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Users, LineChart, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  {
    title: "Community Driven",
    description: "Built on the principles of Kwanzaa, fostering unity and collective growth",
    icon: Users
  },
  {
    title: "Secure Platform",
    description: "Leveraging Solana blockchain for fast and secure transactions",
    icon: Shield
  },
  {
    title: "Staking Rewards",
    description: "Earn rewards by participating in our staking program",
    icon: Coins
  },
  {
    title: "Growth Potential",
    description: "Join early and be part of our expanding ecosystem",
    icon: LineChart
  }
]

export default function Home() {
  return (
    <div>
      {/* Hero Section with Images */}
      <section className="relative px-4 py-20 text-center lg:py-32">
        <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-8">
          {/* Left Side - Legends Image */}
          <div className="relative h-[500px] w-1/3">
            <Image
              src="https://raw.githubusercontent.com/kwanzaacoin/kwa/67cc4746875bd5ba507f22f3e9f26973caa12bfd/legendsrightsize.png"
              alt="Legends"
              fill
              style={{ objectFit: "contain" }}
              className="opacity-30"
              priority
            />
          </div>
          
          {/* Right Side - Hassan Clark Image */}
          <div className="relative h-[500px] w-1/3">
            <Image
              src="https://raw.githubusercontent.com/kwanzaacoin/kwa/67cc4746875bd5ba507f22f3e9f26973caa12bfd/h1.jpg"
              alt="Hassan Clark"
              fill
              style={{ objectFit: "contain" }}
              className="opacity-30"
              priority
            />
          </div>
        </div>

        {/* Content overlay */}
        <div className="relative z-10">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Welcome to Kwanzaa Coin
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            The first cryptocurrency built on the principles of Kwanzaa, powered by Solana blockchain
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/how-to-buy">
              <Button size="lg">How to Buy</Button>
            </Link>
            <Link href="/staking">
              <Button variant="outline" size="lg">
                Start Staking
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Why Choose Kwanzaa Coin?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-gray-800 text-white">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black px-4 py-16 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white">Ready to Join Our Community?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-300">
          Be part of the future of decentralized finance while embracing the principles of Kwanzaa
        </p>
        <Link href="/how-to-buy">
          <Button size="lg">Get Started Now</Button>
        </Link>
      </section>
    </div>
  )
}
