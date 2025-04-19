
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About PTSC</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Fostering innovation and technical excellence</p>
          </div>

          <div className="grid gap-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300">
                The Programming and Tech Skill Club was founded in 2015 by a group of passionate individuals who shared a common love for coding and technology. What started as a small meetup in a classroom has now grown into a vibrant community of 50 students, professionals, and enthusiasts from various backgrounds and skill levels.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our mission is simple: to create an inclusive environment where aspiring coders and seasoned developers can collaborate, learn, and innovate together. We believe that anyone, regardless of experience, can become a successful programmer with the right guidance and resources.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our mission is simple: to create an inclusive environment where aspiring coders and seasoned developers can collaborate, learn, and innovate together. We believe that anyone, regardless of experience, can become a successful programmer with the right guidance and resources.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
