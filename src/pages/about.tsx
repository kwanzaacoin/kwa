import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Heart, Users, Gem, Leaf, Shield, Sun } from "lucide-react"

const principles = [
  {
    name: "Umoja (Unity)",
    description: "Building a united community in the crypto space",
    icon: Users
  },
  {
    name: "Kujichagulia (Self-Determination)",
    description: "Empowering individuals through financial independence",
    icon: Star
  },
  {
    name: "Ujima (Collective Work)",
    description: "Working together to build and maintain our community",
    icon: Heart
  },
  {
    name: "Ujamaa (Cooperative Economics)",
    description: "Creating shared economic opportunities through blockchain",
    icon: Gem
  },
  {
    name: "Nia (Purpose)",
    description: "Developing our community with clear goals and vision",
    icon: Sun
  },
  {
    name: "Kuumba (Creativity)",
    description: "Innovating in the DeFi space while honoring our traditions",
    icon: Leaf
  },
  {
    name: "Imani (Faith)",
    description: "Building trust through transparency and security",
    icon: Shield
  }
]

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      {/* Mission Section */}
      <section className="mb-20 text-center">
        <h1 className="mb-6 text-4xl font-bold">About Kwanzaa Coin</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
          Kwanzaa Coin is more than just a cryptocurrency - it's a movement that combines the principles
          of Kwanzaa with the innovation of blockchain technology. Our mission is to create a
          decentralized financial ecosystem that empowers communities while honoring African cultural
          values.
        </p>
      </section>

      {/* Principles Section */}
      <section>
        <h2 className="mb-12 text-center text-3xl font-bold">Our Guiding Principles</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => (
            <Card key={principle.name}>
              <CardHeader>
                <principle.icon className="h-8 w-8 text-primary" />
                <CardTitle className="mt-4">{principle.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="mt-20">
        <div className="rounded-lg bg-gray-50 p-8 dark:bg-gray-800/50">
          <h2 className="mb-6 text-2xl font-bold">Our Vision</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              We envision a future where blockchain technology serves as a bridge between traditional
              values and modern financial innovation. Kwanzaa Coin aims to:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Create economic opportunities for underserved communities</li>
              <li>Promote financial education and blockchain literacy</li>
              <li>Build a sustainable and inclusive DeFi ecosystem</li>
              <li>Foster global collaboration while maintaining cultural authenticity</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}