
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Leaderboard() {
  const [showForm, setShowForm] = useState(false);
  
  const sampleData = [
    { rank: 1, name: "John Doe", leetcode: 450, gfg: 380 },
    { rank: 2, name: "Jane Smith", leetcode: 420, gfg: 350 },
    { rank: 3, name: "Alex Johnson", leetcode: 400, gfg: 320 },
    { rank: 4, name: "Sam Wilson", leetcode: 380, gfg: 300 },
    { rank: 5, name: "Emily Brown", leetcode: 350, gfg: 290 },
    { rank: 6, name: "Chris Lee", leetcode: 330, gfg: 280 },
    { rank: 7, name: "Pat Murphy", leetcode: 310, gfg: 260 },
    { rank: 8, name: "Jordan Taylor", leetcode: 290, gfg: 250 },
    { rank: 9, name: "Casey Zhang", leetcode: 270, gfg: 240 },
    { rank: 10, name: "Riley Patel", leetcode: 250, gfg: 230 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for submitting! The leaderboard will be updated by 12:00 AM.");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Leaderboard</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Top performers in competitive programming</p>
            <Button onClick={() => setShowForm(!showForm)} className="mb-8">
              {showForm ? "Close Form" : "Add Yourself to Leaderboard"}
            </Button>
          </div>

          {showForm && (
            <Card className="p-6 mb-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">LeetCode Profile URL</label>
                  <Input required type="url" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">GeeksForGeeks Profile URL</label>
                  <Input required type="url" />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </Card>
          )}

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">LeetCode</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">GFG</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {sampleData.map((user) => (
                    <tr key={user.rank} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="px-6 py-4 whitespace-nowrap">{user.rank}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.leetcode}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{user.gfg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
