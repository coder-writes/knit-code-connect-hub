
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResourceTopic {
  title: string;
  link: string;
}

interface ResourceCategory {
  category: string;
  topics: ResourceTopic[];
}

interface ManageResourcesProps {
  initialResources: ResourceCategory[];
  onUpdateResources: (updatedResources: ResourceCategory[]) => void;
}

export default function ManageResources({ initialResources, onUpdateResources }: ManageResourcesProps) {
  const [resources, setResources] = useState<ResourceCategory[]>(initialResources);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number | null>(null);
  const [newTopic, setNewTopic] = useState<ResourceTopic>({ title: "", link: "" });

  const handleAddTopic = () => {
    if (!newTopic.title || !newTopic.link || selectedCategoryIndex === null) {
      alert("Please fill all fields and select a category.");
      return;
    }
    const updated = [...resources];
    updated[selectedCategoryIndex] = {
      ...updated[selectedCategoryIndex],
      topics: [...updated[selectedCategoryIndex].topics, newTopic],
    };
    setResources(updated);
    onUpdateResources(updated);
    setNewTopic({ title: "", link: "" });
  };

  const handleDeleteTopic = (catIndex: number, topicIndex: number) => {
    const updated = [...resources];
    updated[catIndex] = {
      ...updated[catIndex],
      topics: updated[catIndex].topics.filter((_, i) => i !== topicIndex),
    };
    setResources(updated);
    onUpdateResources(updated);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Resources</h2>
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Select Category</label>
        <select
          className="border rounded p-2 w-full max-w-sm"
          value={selectedCategoryIndex !== null ? selectedCategoryIndex : ""}
          onChange={(e) => setSelectedCategoryIndex(e.target.value === "" ? null : Number(e.target.value))}
        >
          <option value="">-- Select a category --</option>
          {resources.map((res, i) => (
            <option key={res.category} value={i}>
              {res.category}
            </option>
          ))}
        </select>
      </div>

      {selectedCategoryIndex !== null && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Topics in {resources[selectedCategoryIndex].category}</h3>
          <ul className="mb-4 space-y-2">
            {resources[selectedCategoryIndex].topics.map((topic, index) => (
              <li key={index} className="flex justify-between items-center border p-2 rounded">
                <div>
                  <a href={topic.link} target="_blank" rel="noreferrer" className="text-cyan-600 hover:underline">
                    {topic.title}
                  </a>
                </div>
                <Button size="sm" variant="destructive" onClick={() => handleDeleteTopic(selectedCategoryIndex, index)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>

          <div>
            <input
              type="text"
              placeholder="Topic Title"
              className="border rounded p-2 mb-2 w-full max-w-sm"
              value={newTopic.title}
              onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
            />
            <input
              type="url"
              placeholder="Topic Link"
              className="border rounded p-2 mb-2 w-full max-w-sm"
              value={newTopic.link}
              onChange={(e) => setNewTopic({ ...newTopic, link: e.target.value })}
            />
            <Button onClick={handleAddTopic}>Add Topic</Button>
          </div>
        </div>
      )}
    </div>
  );
}
