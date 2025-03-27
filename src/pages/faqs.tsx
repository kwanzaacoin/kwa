import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What is Kwanzaa Coin?",
    answer:
      "Kwanzaa Coin is a community-driven cryptocurrency built on the Solana blockchain that combines traditional African values with modern blockchain technology. It's designed to create economic opportunities while promoting the principles of Kwanzaa."
  },
  {
    question: "How is Kwanzaa Coin different from other cryptocurrencies?",
    answer:
      "Kwanzaa Coin is unique in its integration of cultural values with blockchain technology. We focus on community building, sustainable growth, and collective economic empowerment, all while leveraging Solana's fast and low-cost infrastructure."
  },
  {
    question: "Is Kwanzaa Coin secure?",
    answer:
      "Yes, Kwanzaa Coin is built on the Solana blockchain, which provides robust security through its proof-of-stake consensus mechanism. Our smart contracts have undergone thorough audits, and we implement best practices in cryptocurrency security."
  },
  {
    question: "How can I buy Kwanzaa Coin?",
    answer:
      "You can buy Kwanzaa Coin through our approved DEX partners using SOL. First, set up a Solana wallet, purchase SOL from an exchange, then swap it for Kwanzaa Coin. Visit our 'How to Buy' page for detailed instructions."
  },
  {
    question: "What are the benefits of staking Kwanzaa Coin?",
    answer:
      "Staking Kwanzaa Coin offers several benefits: earn passive rewards, participate in governance decisions, and contribute to network security. The longer you stake, the more rewards you can earn."
  },
  {
    question: "What is the total supply of Kwanzaa Coin?",
    answer:
      "Kwanzaa Coin has a fixed total supply of 1 billion tokens. This fixed supply helps maintain the token's value and prevents inflation. A portion of the supply is allocated for community rewards, development, and liquidity pools."
  },
  {
    question: "How can I get involved in the Kwanzaa Coin community?",
    answer:
      "There are many ways to get involved: join our social media channels, participate in community events, stake your tokens, or become a chapter leader. Visit our Chapters page to find local communities near you."
  },
  {
    question: "What are the use cases for Kwanzaa Coin?",
    answer:
      "Kwanzaa Coin can be used for various purposes including staking for rewards, participating in governance, accessing exclusive community benefits, and facilitating peer-to-peer transactions within our ecosystem."
  },
  {
    question: "Is there a minimum amount required to stake?",
    answer:
      "The minimum staking amount is 100 Kwanzaa Coins. This threshold ensures meaningful participation while keeping staking accessible to most holders."
  },
  {
    question: "How often are staking rewards distributed?",
    answer:
      "Staking rewards are distributed automatically every 24 hours. The reward rate varies based on the total amount staked and the duration of your stake."
  }
]

export default function FAQs() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <section className="mb-12 text-center">
        <h1 className="mb-6 text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Find answers to common questions about Kwanzaa Coin, staking, and our community.
        </p>
      </section>

      <section className="space-y-4">
        {faqs.map((faq, index) => (
          <Collapsible
            key={index}
            open={openItems.includes(index)}
            onOpenChange={() => toggleItem(index)}
            className="rounded-lg border bg-card text-card-foreground"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left font-medium">
              {faq.question}
              <ChevronDown
                className={`h-5 w-5 transition-transform ${
                  openItems.includes(index) ? "rotate-180" : ""
                }`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t px-4 py-3 text-gray-600 dark:text-gray-300">
              {faq.answer}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </section>

      <section className="mt-12 rounded-lg bg-primary/5 p-6 text-center">
        <h2 className="mb-4 text-xl font-bold">Still have questions?</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">
          Can't find the answer you're looking for? Reach out to our support team.
        </p>
        <a
          href="/contact"
          className="text-primary hover:underline"
        >
          Contact Support →
        </a>
      </section>
    </div>
  )
}