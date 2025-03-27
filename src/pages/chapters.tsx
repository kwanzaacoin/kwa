import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Users, MapPin, Calendar, ArrowRight } from "lucide-react"
import { useState } from "react"

const featuredChapters = [
  {
    name: "New York City",
    members: 245,
    location: "New York, USA",
    nextMeeting: "March 30, 2024",
    description:
      "One of our largest and most active chapters, focusing on crypto education and community building in the greater NYC area."
  },
  {
    name: "Lagos",
    members: 189,
    location: "Lagos, Nigeria",
    nextMeeting: "April 2, 2024",
    description:
      "A vibrant community promoting blockchain adoption and financial literacy across West Africa."
  },
  {
    name: "London",
    members: 167,
    location: "London, UK",
    nextMeeting: "April 5, 2024",
    description:
      "Bringing together crypto enthusiasts and traditional finance professionals in the UK's capital."
  }
]

const upcomingEvents = [
  {
    title: "Crypto Trading Workshop",
    date: "April 10, 2024",
    location: "Virtual",
    chapter: "Global Community"
  },
  {
    title: "Kwanzaa Coin Meetup",
    date: "April 15, 2024",
    location: "Atlanta, GA",
    chapter: "Atlanta Chapter"
  },
  {
    title: "DeFi Education Series",
    date: "April 20, 2024",
    location: "Virtual",
    chapter: "Global Community"
  }
]

export default function Chapters() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold">Kwanzaa Coin Chapters</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Join a local chapter to connect with other Kwanzaa Coin holders, attend events, and help grow
          our community.
        </p>
        <div className="mx-auto max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for chapters by location..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Featured Chapters */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold">Featured Chapters</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredChapters.map((chapter) => (
            <Card key={chapter.name}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {chapter.name}
                  <span className="text-sm font-normal text-gray-600 dark:text-gray-300">
                    {chapter.members} members
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">{chapter.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4" />
                      {chapter.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      Next meeting: {chapter.nextMeeting}
                    </div>
                  </div>
                  <Button className="w-full">Join Chapter</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Start a Chapter */}
      <section className="mb-16 rounded-lg bg-primary/5 p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Start a Chapter</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              No chapter in your area? Lead the way by starting one! We'll provide you with resources,
              guidance, and support to build a thriving local community.
            </p>
            <ul className="mb-6 space-y-3">
              <li className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-primary" />
                Connect with local crypto enthusiasts
              </li>
              <li className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                Organize events and meetups
              </li>
              <li className="flex items-center">
                <ArrowRight className="mr-2 h-5 w-5 text-primary" />
                Receive leadership training and resources
              </li>
            </ul>
            <Button size="lg">Apply to Lead</Button>
          </div>
          <div className="rounded-lg bg-white p-6 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-bold">Chapter Leader Benefits</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Early access to new features and updates</li>
              <li>• Special staking rewards and bonuses</li>
              <li>• Direct communication with core team</li>
              <li>• Exclusive leadership events and training</li>
              <li>• Chapter development funding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <h2 className="mb-8 text-2xl font-bold">Upcoming Events</h2>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <Card key={event.title}>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="mt-1 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      {event.chapter}
                    </div>
                  </div>
                </div>
                <Button>Register</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}