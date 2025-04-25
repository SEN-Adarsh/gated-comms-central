
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bell, Calendar } from "lucide-react";
import { toast } from "sonner";

// Import the announcements data from the Announcements component
import { ANNOUNCEMENTS, type Announcement } from "@/components/Announcements";

const PresidentAnnouncements = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>(ANNOUNCEMENTS);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    content: "",
    type: "normal" as "urgent" | "normal"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const announcement: Announcement = {
      title: newAnnouncement.title,
      description: currentDate,
      date: currentDate,
      content: newAnnouncement.content,
      postedBy: "Community President",
      type: newAnnouncement.type
    };

    setAnnouncements([announcement, ...announcements]);
    setNewAnnouncement({ title: "", content: "", type: "normal" });
    toast.success("Announcement posted successfully!");
  };

  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Post New Announcement</CardTitle>
          <CardDescription>Create a new announcement for the community</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input
                value={newAnnouncement.title}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Content</label>
              <Textarea
                value={newAnnouncement.content}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, content: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <select
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                value={newAnnouncement.type}
                onChange={(e) => setNewAnnouncement({ ...newAnnouncement, type: e.target.value as "urgent" | "normal" })}
              >
                <option value="normal">Normal</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            <Button type="submit">Post Announcement</Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {announcements.map((a, i) => (
          <Card key={i}>
            <CardHeader className={a.type === "urgent" ? "bg-[#ea384c]/10" : "bg-yellow-100"}>
              <CardTitle className="flex items-center">
                <Bell className={`mr-2 h-5 w-5 ${a.type === "urgent" ? "text-[#ea384c]" : "text-yellow-500"}`} />
                <span className={a.type === "urgent" ? "text-[#ea384c]" : "text-yellow-700"}>
                  {a.title}
                </span>
              </CardTitle>
              <CardDescription className={a.type === "urgent" ? "text-[#ea384c] font-semibold" : "text-yellow-700 font-semibold"}>
                {a.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className={a.type === "urgent" ? "text-[#ea384c]" : ""}>{a.content}</p>
            </CardContent>
            <CardFooter className={`text-sm ${a.type === "urgent" ? "text-[#ea384c]/80" : "text-yellow-700/90"}`}>
              Posted by: {a.postedBy}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PresidentAnnouncements;
