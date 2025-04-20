
import React from "react";
import { Card } from "@/components/ui/card";

interface LeaderboardMember {
  rank: number;
  name: string;
  leetcode: string;
  gfg: string;
  codechef: string;
  codeforces: string;
}

interface ManageLeaderboardProps {
  members: LeaderboardMember[];
}

export default function ManageLeaderboard({ members }: ManageLeaderboardProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Leaderboard</h2>
      <Card className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="border px-4 py-2">Rank</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">LeetCode URL</th>
              <th className="border px-4 py-2">GFG URL</th>
              <th className="border px-4 py-2">Codechef URL</th>
              <th className="border px-4 py-2">CodeForces URL</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr key={m.rank} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="border px-4 py-2">{m.rank}</td>
                <td className="border px-4 py-2">{m.name}</td>
                <td className="border px-4 py-2">
                  <a href={m.leetcode} target="_blank" rel="noreferrer" className="text-cyan-600 hover:underline">
                    LeetCode
                  </a>
                </td>
                <td className="border px-4 py-2">
                  <a href={m.gfg} target="_blank" rel="noreferrer" className="text-cyan-600 hover:underline">
                    GFG
                  </a>
                </td>
                <td className="border px-4 py-2">
                  <a href={m.codechef} target="_blank" rel="noreferrer" className="text-cyan-600 hover:underline">
                    Codechef
                  </a>
                </td>
                <td className="border px-4 py-2">
                  <a href={m.codeforces} target="_blank" rel="noreferrer" className="text-cyan-600 hover:underline">
                    CodeForces
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
