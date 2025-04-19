
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import EventCountdown from "@/components/EventCountdown";
import Gallery from "@/components/Gallery";

export default function Home() {
  const testimonials = [
    {
      quote: "PTSC helped me kickstart my programming journey and land my dream internship!",
      author: "Rahul S., 3rd Year"
    },
    {
      quote: "The workshops and mentorship provided by PTSC are invaluable.",
      author: "Priya M., 4th Year"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Programming and Technical Skill Club
              <br />
              <span className="text-cyan-600 dark:text-cyan-400">KNIT Sultanpur</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering students through code, innovation, and collaboration
            </p>
            <Link to="/join">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                Join Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Event Countdown */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EventCountdown />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Event Gallery</h2>
          <Gallery />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <blockquote className="text-lg italic mb-4">{testimonial.quote}</blockquote>
                <cite className="text-cyan-600 dark:text-cyan-400 not-italic">
                  {testimonial.author}
                </cite>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Events</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Check out our upcoming hackathons and workshops</p>
              <Link to="/events">
                <Button variant="outline">View Events</Button>
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Resources</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Access learning materials and tutorials</p>
              <Link to="/resources">
                <Button variant="outline">Browse Resources</Button>
              </Link>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-2">Leaderboard</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">See top performers in competitions</p>
              <Link to="/leaderboard">
                <Button variant="outline">View Rankings</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
