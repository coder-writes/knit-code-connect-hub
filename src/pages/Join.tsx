
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    branch: "",
    whyJoin: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    year: "",
    branch: "",
    whyJoin: ""
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      year: "",
      branch: "",
      whyJoin: ""
    };

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.year) newErrors.year = "Year is required";
    if (!formData.branch) newErrors.branch = "Branch is required";
    if (!formData.whyJoin.trim()) newErrors.whyJoin = "Please tell us why you want to join";

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Thank you for your application! We'll review it and get back to you soon.");
      setFormData({
        name: "",
        email: "",
        year: "",
        branch: "",
        whyJoin: ""
      });
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-cyan-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Join PTSC</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">Become a part of our coding community</p>
          </div>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="year" className="block text-sm font-medium mb-2">
                  Year of Study
                </label>
                <Input
                  id="year"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className={errors.year ? "border-red-500" : ""}
                />
                {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
              </div>

              <div>
                <label htmlFor="branch" className="block text-sm font-medium mb-2">
                  Branch
                </label>
                <Input
                  id="branch"
                  value={formData.branch}
                  onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  className={errors.branch ? "border-red-500" : ""}
                />
                {errors.branch && <p className="text-red-500 text-sm mt-1">{errors.branch}</p>}
              </div>

              <div>
                <label htmlFor="whyJoin" className="block text-sm font-medium mb-2">
                  Why do you want to join PTSC?
                </label>
                <Textarea
                  id="whyJoin"
                  value={formData.whyJoin}
                  onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                  className={errors.whyJoin ? "border-red-500" : ""}
                  rows={4}
                />
                {errors.whyJoin && <p className="text-red-500 text-sm mt-1">{errors.whyJoin}</p>}
              </div>

              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
