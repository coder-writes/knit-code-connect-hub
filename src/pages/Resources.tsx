
import { Card } from "@/components/ui/card";

export default function Resources() {
  const resources = [
    {
      category: "Data Structures & Algorithms",
      topics: [
        { title: "Arrays and Strings", link: "#" },
        { title: "Linked Lists", link: "#" },
        { title: "Trees and Graphs", link: "#" },
        { title: "Dynamic Programming", link: "#" }
      ]
    },
    {
      category: "Web Development",
      topics: [
        { title: "HTML & CSS Basics", link: "#" },
        { title: "JavaScript Fundamentals", link: "#" },
        { title: "React.js Tutorial", link: "#" },
        { title: "Backend Development", link: "#" }
      ]
    },
    {
      category: "Programming Languages",
      topics: [
        { title: "Python Programming", link: "#" },
        { title: "Java Fundamentals", link: "#" },
        { title: "C++ Guide", link: "#" },
        { title: "JavaScript ES6+", link: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Learning Resources</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Explore our curated learning materials</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource.category} className="p-6">
                <h2 className="text-xl font-bold mb-4">{resource.category}</h2>
                <ul className="space-y-2">
                  {resource.topics.map((topic) => (
                    <li key={topic.title}>
                      <a 
                        href={topic.link}
                        className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                      >
                        {topic.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
