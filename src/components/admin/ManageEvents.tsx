
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EventItem {
  title: string;
  date: string;
  description: string;
  status: "Live" | "upcoming" | "past" | string;
}

interface ManageEventsProps {
  initialEvents: EventItem[];
  onUpdateEvents: (updatedEvents: EventItem[]) => void;
}

export default function ManageEvents({ initialEvents, onUpdateEvents }: ManageEventsProps) {
  const [events, setEvents] = useState<EventItem[]>(initialEvents);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newEvent, setNewEvent] = useState<EventItem>({
    title: "",
    date: "",
    description: "",
    status: "upcoming",
  });

  const handleDelete = (index: number) => {
    const updated = events.filter((_, i) => i !== index);
    setEvents(updated);
    onUpdateEvents(updated);
    if (editingIndex === index) setEditingIndex(null);
  };

  const handleEditChange = (field: keyof EventItem, value: string, index: number) => {
    const updated = [...events];
    updated[index] = { ...updated[index], [field]: value };
    setEvents(updated);
  };

  const handleSaveEdit = (index: number) => {
    setEditingIndex(null);
    onUpdateEvents(events);
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.description || !newEvent.status) {
      alert("Please fill in all fields.");
      return;
    }
    const updated = [...events, newEvent];
    setEvents(updated);
    onUpdateEvents(updated);
    setNewEvent({ title: "", date: "", description: "", status: "upcoming" });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Events</h2>
      <div className="space-y-6 mb-8">
        {events.map((event, index) => (
          <Card key={index} className="p-4">
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  className="border rounded p-2 mb-2 w-full"
                  value={event.title}
                  onChange={(e) => handleEditChange("title", e.target.value, index)}
                  placeholder="Title"
                />
                <input
                  type="text"
                  className="border rounded p-2 mb-2 w-full"
                  value={event.date}
                  onChange={(e) => handleEditChange("date", e.target.value, index)}
                  placeholder="Date"
                />
                <input
                  type="text"
                  className="border rounded p-2 mb-2 w-full"
                  value={event.description}
                  onChange={(e) => handleEditChange("description", e.target.value, index)}
                  placeholder="Description"
                />
                <select
                  className="border rounded p-2 mb-2 w-full"
                  value={event.status}
                  onChange={(e) => handleEditChange("status", e.target.value, index)}
                >
                  <option value="Live">Live</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                </select>
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
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{event.date}</p>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    event.status === "upcoming"
                      ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
                      : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                  }`}
                >
                  {event.status === "upcoming" ? "Upcoming" : "Past"}
                </span>
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

      <div>
        <h3 className="text-xl font-bold mb-2">Add New Event</h3>
        <input
          type="text"
          placeholder="Title"
          className="border rounded p-2 mb-2 w-full"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Date"
          className="border rounded p-2 mb-2 w-full"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border rounded p-2 mb-2 w-full"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <select
          className="border rounded p-2 mb-2 w-full"
          value={newEvent.status}
          onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value })}
        >
          <option value="Live">Live</option>
          <option value="upcoming">Upcoming</option>
          <option value="past">Past</option>
        </select>
        <Button onClick={handleAddEvent}>Add Event</Button>
      </div>
    </div>
  );
}
