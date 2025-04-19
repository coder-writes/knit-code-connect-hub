import { useState } from "react";
import { Card } from "@/components/ui/card";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Gaurpad Shukla",
      role: "Secretary",
      image: "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    },
    {
      name: "Vansh Kunwar Ji",
      role: "CP Head",
      image: "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    },
    {
      name: "Anurag Srivastav",
      role: "Web Dev Head",
      image: "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    },
    {
      name: "Himanshu Dubey",
      role: "Joint Secretary",
      image: "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    },
    {
      name: "Aditya Kumar Singh",
      role: "Comptetive Programming Head",
      image: "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    },
    {
      name: "Abhishek Yadav",
      role: "Comptetive Programming Head",
      image: "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    },
    {
      name: "Vivek Tripathi",
      role: "Web Dev Head",
      image: "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    },
    {
      name: "Anshul Kumar Yadav",
      role: "Web dev Head",
      image: "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    },
    {
      name: "Shekhar Sharma",
      role: "Data Science Head",
      image: "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    },
    {
      name: "Akshit Raj Singh",
      role: "App Dev Head",
      image: "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    },
    {
      name: "Nayan Dixit",
      role: "Event Head",
      image: "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    },
    {
      name: "Piyush Pandey",
      role: "Event Head",
      image: "https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png",
    },
    // ... other members
  ]);

  const [newMember, setNewMember] = useState({ name: "", role: "", image: "" });

  const handleAddMember = () => {
    if (newMember.name && newMember.role && newMember.image) {
      setTeamMembers([...teamMembers, newMember]);
      setNewMember({ name: "", role: "", image: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Team</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Meet the people behind PTSC</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Add New Member</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                placeholder="Role"
                value={newMember.role}
                onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={newMember.image}
                onChange={(e) => setNewMember({ ...newMember, image: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              onClick={handleAddMember}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Member
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
