
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface ManageTeamProps {
  initialTeam: TeamMember[];
  onUpdateTeam: (updatedTeam: TeamMember[]) => void;
}

export default function ManageTeam({ initialTeam, onUpdateTeam }: ManageTeamProps) {
  const [team, setTeam] = useState<TeamMember[]>(initialTeam);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newMember, setNewMember] = useState<TeamMember>({ name: "", role: "", image: "" });

  const handleDelete = (index: number) => {
    const updated = team.filter((_, i) => i !== index);
    setTeam(updated);
    onUpdateTeam(updated);
    if (editingIndex === index) setEditingIndex(null);
  };

  const handleEditChange = (field: keyof TeamMember, value: string, index: number) => {
    const updated = [...team];
    updated[index] = { ...updated[index], [field]: value };
    setTeam(updated);
  };

  const handleSaveEdit = (index: number) => {
    setEditingIndex(null);
    onUpdateTeam(team);
  };

  const handleAddMember = () => {
    if (!newMember.name || !newMember.role || !newMember.image) {
      alert("Please fill in all fields.");
      return;
    }
    const updated = [...team, newMember];
    setTeam(updated);
    onUpdateTeam(updated);
    setNewMember({ name: "", role: "", image: "" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Team Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {team.map((member, index) => (
          <Card key={index} className="p-4 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              {editingIndex === index ? (
                <input
                  type="text"
                  value={member.image}
                  onChange={(e) => handleEditChange("image", e.target.value, index)}
                  placeholder="Image URL"
                  className="w-full border rounded p-1"
                />
              ) : (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              )}
            </div>
            {editingIndex === index ? (
              <>
                <input
                  className="border rounded mb-2 p-1 w-full"
                  type="text"
                  value={member.name}
                  onChange={(e) => handleEditChange("name", e.target.value, index)}
                  placeholder="Name"
                />
                <input
                  className="border rounded mb-2 p-1 w-full"
                  type="text"
                  value={member.role}
                  onChange={(e) => handleEditChange("role", e.target.value, index)}
                  placeholder="Role"
                />
                <div className="flex gap-2">
                  <Button size="sm" variant="default" onClick={() => handleSaveEdit(index)}>
                    Save
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => setEditingIndex(null)}>
                    Cancel
                  </Button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" onClick={() => setEditingIndex(index)}>
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </div>
              </>
            )}
          </Card>
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Add New Member</h3>
        <input
          type="text"
          placeholder="Name"
          className="border rounded p-2 mb-2 w-full"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          className="border rounded p-2 mb-2 w-full"
          value={newMember.role}
          onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="border rounded p-2 mb-2 w-full"
          value={newMember.image}
          onChange={(e) => setNewMember({ ...newMember, image: e.target.value })}
        />
        <Button onClick={handleAddMember}>Add Member</Button>
      </div>
    </div>
  );
}
