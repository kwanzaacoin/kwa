import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Coins, Clock, TrendingUp, Lock } from "lucide-react"
import { useState } from "react"

const stakingTiers = [
  {
    name: "Bronze",
    duration: "30 days",
    apy: "12%",
    minAmount: "1,000",
    icon: Coins
  },
  {
    name: "Silver",
    duration: "90 days",
    apy: "18%",
    minAmount: "5,000",
    icon: Clock
  },
  {
    name: "Gold",
    duration: "180 days",
    apy: "24%",
    minAmount: "10,000",
    icon: TrendingUp
  },
  {
    name: "Diamond",
    duration: "365 days",
    apy: "32%",
    minAmount: "25,000",
    icon: Lock
  }
]

export default function Staking() {
  const [stakeAmount, setStakeAmount] = useState("")
  const [selectedTier, setSelectedTier] = useState("Bronze")

  const calculateRewards = (amount: string, tier: string) => {
    const apy = stakingTiers.find((t) => t.name === tier)?.apy.replace("%", "") || "0"
    const annualReward = (parseFloat(amount || "0") * parseFloat(apy)) / 100
    return annualReward.toFixed(2)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold">Stake Kwanzaa Coin</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Earn rewards by staking your Kwanzaa Coins. Choose from multiple staking tiers and start
          earning passive income today.
        </p>
      </section>

      {/* Staking Stats */}
      <section className="mb-16 grid gap-8 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Value Locked</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5.2M KWZ</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">≈ $2.6M USD</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Stakers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12,458</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Across all tiers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average APY</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">21.5%</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Updated daily</p>
          </CardContent>
        </Card>
      </section>

      {/* Staking Tiers */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold">Staking Tiers</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stakingTiers.map((tier) => (
            <Card key={tier.name}>
              <CardHeader>
                <tier.icon className="mb-4 h-8 w-8 text-primary" />
                <CardTitle>{tier.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Lock Period:</span> {tier.duration}
                  </p>
                  <p>
                    <span className="font-medium">APY:</span>{" "}
                    <span className="text-green-600 dark:text-green-400">{tier.apy}</span>
                  </p>
                  <p>
                    <span className="font-medium">Min Amount:</span> {tier.minAmount} KWZ
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Staking Calculator */}
      <section className="rounded-lg border p-8">
        <h2 className="mb-8 text-2xl font-bold">Staking Calculator</h2>
        <Tabs defaultValue="stake" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="stake">Stake</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>
          <TabsContent value="stake">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block font-medium">Amount to Stake</label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                  />
                </div>
                <div>
                  <label className="mb-2 block font-medium">Select Tier</label>
                  <select
                    className="w-full rounded-md border p-2"
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                  >
                    {stakingTiers.map((tier) => (
                      <option key={tier.name} value={tier.name}>
                        {tier.name} - {tier.apy} APY
                      </option>
                    ))}
                  </select>
                </div>
                <Button className="w-full" size="lg">
                  Connect Wallet to Stake
                </Button>
              </div>
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800/50">
                <h3 className="mb-4 text-xl font-bold">Estimated Returns</h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Annual Rewards:</span>{" "}
                    {calculateRewards(stakeAmount, selectedTier)} KWZ
                  </p>
                  <p>
                    <span className="font-medium">Monthly Rewards:</span>{" "}
                    {(parseFloat(calculateRewards(stakeAmount, selectedTier)) / 12).toFixed(2)} KWZ
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    *Rewards are calculated based on current APY rates and may vary
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="rewards">
            <div className="text-center">
              <p className="mb-4">Connect your wallet to view your staking rewards</p>
              <Button>Connect Wallet</Button>
            </div>
          </TabsContent>
        </Tabs>

      {/* Contract Address Section */}
      <section className="mb-16">
        <Card className="border-2 border-primary bg-primary/5">
          <CardHeader>
            <CardTitle className="text-center">Kwanzaa Coin is Available to Buy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg font-medium">Contract Address (CA):</p>
              <code className="rounded-lg bg-primary/10 p-4 font-mono text-primary">
                6xJN7iCP9jpumvgmCU1RBu2WnZsSzEU2Sh2kmn8SrqFe
              </code>
            </div>
          </CardContent>
        </Card>
      </section>
>>>>>>> 15d23b8 (feat: add contract address section to staking page)
    </div>
=======
      </section>

      {/* Contract Address Section */}
      <section className="mb-16">
        <Card className="border-2 border-primary bg-primary/5">
          <CardHeader>
            <CardTitle className="text-center">Kwanzaa Coin is Available to Buy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg font-medium">Contract Address (CA):</p>
              <code className="rounded-lg bg-primary/10 p-4 font-mono text-primary">
                6xJN7iCP9jpumvgmCU1RBu2WnZsSzEU2Sh2kmn8SrqFe
              </code>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
=======

      {/* Contract Address Section */}
      <section className="mb-16">
        <Card className="border-2 border-primary bg-primary/5">
          <CardHeader>
            <CardTitle className="text-center">Kwanzaa Coin is Available to Buy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg font-medium">Contract Address (CA):</p>
              <code className="rounded-lg bg-primary/10 p-4 font-mono text-primary">
                6xJN7iCP9jpumvgmCU1RBu2WnZsSzEU2Sh2kmn8SrqFe
              </code>
            </div>
          </CardContent>
        </Card>
      </section>
>>>>>>> 15d23b8 (feat: add contract address section to staking page)
    </div>
  )
}