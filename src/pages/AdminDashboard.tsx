
import { useState } from "react";
import ManageTeam from "@/components/admin/ManageTeam";
import ManageEvents from "@/components/admin/ManageEvents";
import ManageResources from "@/components/admin/ManageResources";
import ManageLeaderboard from "@/components/admin/ManageLeaderboard";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  // Initial data taken roughly from current pages' hardcoded data for editing
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
    // ... include other initial members from the Team page if needed
  ]);

  const [events, setEvents] = useState([
    {
      title: "Decode_AI",
      date: "April 19, 2025",
      description: "Deep dive into Basic Concepts of AI and ML",
      status: "Live",
    },
    {
      title: "Short_INT 2025",
      date: "To be announced",
      description: "2-hour coding challenge to build innovative solutions",
      status: "upcoming",
    },
    {
      title: "HACK THE WEB",
      date: "7 Jan, 2025",
      description: "Learn Open Source Contribution and Github Collaration",
      status: "past",
    },
    {
      title: "LONG_INT",
      date: "Jan 7, 2025",
      description: "Deep dive into advanced data structures and algorithms and Competetive Programming",
      status: "past",
    },
  ]);

  const [resources, setResources] = useState([
    {
      category: "Data Structures & Algorithms",
      topics: [
        { title: "Arrays and Strings", link: "#" },
        { title: "Linked Lists", link: "#" },
        { title: "Trees and Graphs", link: "#" },
        { title: "Dynamic Programming", link: "#" },
      ],
    },
    {
      category: "Web Development",
      topics: [
        { title: "HTML & CSS Basics", link: "#" },
        { title: "JavaScript Fundamentals", link: "#" },
        { title: "React.js Tutorial", link: "#" },
        { title: "Backend Development", link: "#" },
      ],
    },
    {
      category: "Programming Languages",
      topics: [
        { title: "Python Programming", link: "#" },
        { title: "Java Fundamentals", link: "#" },
        { title: "C++ Guide", link: "#" },
        { title: "JavaScript ES6+", link: "#" },
      ],
    },
  ]);

  const sampleLeaderboard = [
    { rank: 1, name: "John Doe", leetcode: "https://leetcode.com/johndoe", gfg: "https://auth.geeksforgeeks.org/user/johndoe", codechef: "https://www.codechef.com/users/johndoe", codeforces: "https://codeforces.com/profile/johndoe" },
    { rank: 2, name: "Jane Smith", leetcode: "https://leetcode.com/janesmith", gfg: "https://auth.geeksforgeeks.org/user/janesmith", codechef: "https://www.codechef.com/users/janesmith", codeforces: "https://codeforces.com/profile/janesmith" },
    { rank: 3, name: "Alex Johnson", leetcode: "https://leetcode.com/alexjohnson", gfg: "https://auth.geeksforgeeks.org/user/alexjohnson", codechef: "https://www.codechef.com/users/alexjohnson", codeforces: "https://codeforces.com/profile/alexjohnson" },
    // ... add more if needed
  ];

  const [activeSection, setActiveSection] = useState<"team" | "events" | "resources" | "leaderboard">("team");

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Admin Dashboard</h1>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <Button variant={activeSection === "team" ? "default" : "outline"} onClick={() => setActiveSection("team")}>Manage Team</Button>
          <Button variant={activeSection === "events" ? "default" : "outline"} onClick={() => setActiveSection("events")}>Manage Events</Button>
          <Button variant={activeSection === "resources" ? "default" : "outline"} onClick={() => setActiveSection("resources")}>Manage Resources</Button>
          <Button variant={activeSection === "leaderboard" ? "default" : "outline"} onClick={() => setActiveSection("leaderboard")}>Manage Leaderboard</Button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
          {activeSection === "team" && <ManageTeam initialTeam={teamMembers} onUpdateTeam={setTeamMembers} />}
          {activeSection === "events" && <ManageEvents initialEvents={events} onUpdateEvents={setEvents} />}
          {activeSection === "resources" && <ManageResources initialResources={resources} onUpdateResources={setResources} />}
          {activeSection === "leaderboard" && <ManageLeaderboard members={sampleLeaderboard} />}
        </div>
      </div>
    </div>
  );
}
