import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, Users, LineChart, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

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
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center lg:py-32 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-8">
          {/* Left Side Image */}
          <div className="relative h-[500px] w-1/3 transform hover:scale-105 transition-transform duration-500">
            <Image
              src="https://raw.githubusercontent.com/kwanzaacoin/kwa/42ed5ec6021f2216692b37905e09499569341d3d/book.png"
              alt="Book"
              fill
              style={{ objectFit: "contain" }}
              className="opacity-75 brightness-150 contrast-125 saturate-150"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/10 to-transparent" />
          </div>
          
          {/* Right Side Image */}
          <div className="relative h-[500px] w-1/3 transform hover:scale-105 transition-transform duration-500">
            <Image
              src="https://raw.githubusercontent.com/kwanzaacoin/kwa/67cc4746875bd5ba507f22f3e9f26973caa12bfd/h1.jpg"
              alt="Hassan Clark"
              fill
              style={{ objectFit: "contain" }}
              className="opacity-75 brightness-150 contrast-125 saturate-150"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background via-secondary/10 to-transparent" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <div className="mb-8 inline-block rounded-full bg-primary/10 px-4 py-1.5">
            <span className="text-primary font-semibold">
              Powered by Solana Blockchain
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Welcome to <span className="text-primary">Kwanzaa</span> Coin
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-foreground/80">
            The first cryptocurrency built on the principles of Kwanzaa, empowering our community.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/how-to-buy">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                How to Buy
              </Button>
            </Link>
            <Link href="/staking">
              <Button 
                variant="outline" 
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                Start Staking
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contract Address Section */}
      <section className="px-4 py-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-primary bg-background/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold text-primary">
                The Kwanzaa Altcoin is Here!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 text-xl text-foreground/90">
                Here is the contract address:
              </p>
              <div className="mx-auto max-w-3xl rounded-lg bg-primary/10 p-6">
                <code className="text-xl font-mono text-primary break-all">
                  6xJN7iCP9jpumvgmCU1RBu2WnZsSzEU2Sh2kmn8SrqFe
                </code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-black/50">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Why Choose <span className="text-primary">Kwanzaa</span> Coin?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-background/50 border border-secondary/20 backdrop-blur-sm
                         hover:border-secondary/50 transition-all duration-300
                         transform hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {React.createElement(feature.icon, { className: "h-6 w-6 text-primary" })}
                  </div>
                  <CardTitle className="mt-4 text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10" />
        <div className="relative z-10">
          <div className="inline-block mb-6 rounded-full bg-primary/10 px-4 py-1.5">
            <span className="text-primary font-semibold">Join Our Community</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Ready to Be Part of Something Greater?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-foreground/80">
            Be part of the future of decentralized finance while embracing the principles of Kwanzaa.
          </p>
          <Link href="/how-to-buy">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white transform hover:scale-105 transition-all duration-300"
            >
              Get Started Now
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />
      </section>
    </div>
  );
}
