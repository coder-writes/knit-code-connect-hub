
import { Card } from "@/components/ui/card";

export default function Team() {
  const teamMembers = [
    {
      name: "Himanshu Dubey",
      role: "Joint Secretary",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "Gaurpad Shukla",
      role: "Head of PTSC",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Team</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Meet the people behind PTSC</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
