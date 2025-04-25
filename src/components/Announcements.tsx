
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

export type Announcement = {
  title: string;
  description: string;
  date: string;
  content: string;
  postedBy: string;
  type: "urgent" | "normal";
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    title: "Maintenance Notice",
    description: "April 18, 2025",
    date: "April 18, 2025",
    content: "Water supply will be interrupted on Saturday from 10 AM to 2 PM due to scheduled maintenance work on the main lines. Please store water accordingly.",
    postedBy: "Maintenance Department",
    type: "urgent",
  },
  {
    title: "Community Meeting",
    description: "April 20, 2025",
    date: "April 20, 2025",
    content: "The quarterly community meeting will be held this Sunday at 4 PM in the community hall. All residents are encouraged to attend as we'll be discussing important matters about security upgrades.",
    postedBy: "Community President",
    type: "normal",
  },
  {
    title: "New Security Protocol",
    description: "April 15, 2025",
    date: "April 15, 2025",
    content: "Starting next week, we're implementing a new visitor management system. All visitors must be pre-registered through the app. Please check your email for detailed instructions.",
    postedBy: "Security Team",
    type: "normal",
  },
  {
    title: "Landscaping Update",
    description: "April 10, 2025",
    date: "April 10, 2025",
    content: "The community garden renovation is now complete. Residents are welcome to enjoy the new seating areas and walking paths. Please help us maintain this beautiful space by following the posted guidelines.",
    postedBy: "Landscaping Committee",
    type: "normal",
  },
];

const Announcements = () => (
  <div className="grid gap-4 md:grid-cols-2">
    {ANNOUNCEMENTS.map((a, i) => (
      <Card key={i}>
        <CardHeader className={a.type === "urgent" ? "bg-[#ea384c]/10" : "bg-yellow-100"}>
          <CardTitle className="flex items-center">
            <Bell 
              className={`mr-2 h-5 w-5 ${a.type === "urgent" ? "text-[#ea384c]" : "text-yellow-500"}`}
            />
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
);

export default Announcements;
