
import { Card } from "@/components/ui/card";

export default function Events() {
  const events = [
    {
      title: "Decode_AI",
      date: "April 19, 2025",
      description: "Deep dive into Basic Concepts of AI and ML",
      status: "Live"
    },
    {
      title: "Short_INT 2025",
      date: "To be announced",
      description: "2-hour coding challenge to build innovative solutions",
      status: "upcoming"
    },
    {
      title: "HACK THE WEB",
      date: "7 Jan, 2025",
      description: "Learn Open Source Contribution and Github Collaration",
      status: "past"
    },
    {
      title: "LONG_INT",
      date: "Jan 7, 2025",
      description: "Deep dive into advanced data structures and algorithms and Competetive Programming",
      status: "past"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Events</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Join our upcoming events and workshops</p>
          </div>

          <div className="grid gap-8">
            {events.map((event) => (
              <Card key={event.title} className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{event.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    event.status === 'upcoming' 
                      ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                  }`}>
                    {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
