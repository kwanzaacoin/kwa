import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Gift, Clock, AlertCircle } from "lucide-react"
import { useState } from "react"

const activeAirdrops = [
  {
    name: "Early Adopter Bonus",
    amount: "500 KWZ",
    endDate: "April 30, 2024",
    requirements: ["Hold minimum 1,000 KWZ", "Wallet age > 30 days"],
    status: "Active"
  },
  {
    name: "Staker Rewards",
    amount: "250 KWZ",
    endDate: "May 15, 2024",
    requirements: ["Staked for 90+ days", "Minimum stake 5,000 KWZ"],
    status: "Active"
  },
  {
    name: "Community Champion",
    amount: "1,000 KWZ",
    endDate: "May 31, 2024",
    requirements: ["Active chapter member", "Participated in 3+ events"],
    status: "Coming Soon"
  }
]

export default function Claim() {
  const [referralCode, setReferralCode] = useState("")

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold">Claim Rewards</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Claim your Kwanzaa Coin rewards, airdrops, and special distributions. Connect your wallet to
          view all available claims.
        </p>
      </section>

      {/* Main Content */}
      <Tabs defaultValue="airdrops" className="space-y-8">
        <TabsList className="mx-auto w-full max-w-md">
          <TabsTrigger value="airdrops" className="flex-1">
            Airdrops
          </TabsTrigger>
          <TabsTrigger value="staking" className="flex-1">
            Staking Rewards
          </TabsTrigger>
          <TabsTrigger value="referral" className="flex-1">
            Referral Rewards
          </TabsTrigger>
        </TabsList>

        {/* Airdrops Tab */}
        <TabsContent value="airdrops">
          <div className="grid gap-8">
            {activeAirdrops.map((airdrop) => (
              <Card key={airdrop.name}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Gift className="mr-2 h-5 w-5 text-primary" />
                      {airdrop.name}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        airdrop.status === "Active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {airdrop.status}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Amount</p>
                        <p className="text-2xl font-bold text-primary">{airdrop.amount}</p>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <Clock className="mr-2 h-4 w-4" />
                        Ends: {airdrop.endDate}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 font-medium">Requirements</p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        {airdrop.requirements.map((req, index) => (
                          <li key={index} className="flex items-center">
                            • {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="mt-6 w-full" disabled={airdrop.status !== "Active"}>
                    {airdrop.status === "Active" ? "Connect Wallet to Claim" : "Coming Soon"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Staking Rewards Tab */}
        <TabsContent value="staking">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Clock className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                <h3 className="mb-2 text-xl font-bold">Staking Rewards</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Connect your wallet to view and claim your staking rewards
                </p>
                <Button size="lg">Connect Wallet</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Referral Rewards Tab */}
        <TabsContent value="referral">
          <Card>
            <CardContent className="space-y-6 pt-6">
              <div className="rounded-lg bg-primary/5 p-4">
                <h3 className="mb-2 font-medium">How Referrals Work</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Share your referral code with friends. When they join and stake Kwanzaa Coin, you'll
                  both receive bonus rewards!
                </p>
              </div>

              <div>
                <label className="mb-2 block font-medium">Your Referral Code</label>
                <div className="flex gap-4">
                  <Input
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    placeholder="Enter referral code"
                  />
                  <Button>Apply</Button>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="mb-4 flex items-start">
                  <AlertCircle className="mr-2 h-5 w-5 text-primary" />
                  <p className="text-sm">
                    Connect your wallet to view your referral stats and earned rewards
                  </p>
                </div>
                <Button className="w-full">Connect Wallet</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Info Section */}
      <section className="mt-16 rounded-lg border p-6">
        <h2 className="mb-4 text-xl font-bold">Important Information</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li className="flex items-start">
            • Make sure you're connected to the correct wallet address when claiming rewards
          </li>
          <li className="flex items-start">
            • Claims may require a small network fee for transaction processing
          </li>
          <li className="flex items-start">
            • Some rewards may have a vesting period or lock-up duration
          </li>
          <li className="flex items-start">
            • Contact support if you encounter any issues with claiming rewards
          </li>
        </ul>
      </section>
    </div>
  )
}