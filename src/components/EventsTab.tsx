import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsTab = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader className="bg-purple-50">
        <CardTitle>Community Events Calendar</CardTitle>
        <CardDescription>Upcoming events in our community</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Community Garden Day</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">April 25, 2025</span>
            </div>
            <p className="text-gray-600 mt-1">Join us for a day of gardening and beautifying our community spaces. Tools and refreshments provided. 9 AM - 1 PM at the community garden.</p>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Friday, April 25, 2025 • 9:00 AM</span>
            </div>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Movie Night Under the Stars</h3>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">April 27, 2025</span>
            </div>
            <p className="text-gray-600 mt-1">Bring your blankets and chairs for a family-friendly movie night at the community lawn. Movie: "The Secret Garden" (2020). Popcorn provided.</p>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Sunday, April 27, 2025 • 7:30 PM</span>
            </div>
          </div>
          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Community Yard Sale</h3>
              <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">May 3, 2025</span>
            </div>
            <p className="text-gray-600 mt-1">Time to declutter! Set up a table in front of your home or in the community center parking lot. Register your spot by April 28th.</p>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Saturday, May 3, 2025 • 8:00 AM - 2:00 PM</span>
            </div>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Fitness in the Park</h3>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Weekly</span>
            </div>
            <p className="text-gray-600 mt-1">Join our community yoga instructor every Saturday morning for a relaxing session suitable for all levels. Bring your own mat.</p>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Every Saturday • 8:00 AM - 9:00 AM</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline">View Full Calendar</Button>
        <Button>Submit an Event</Button>
      </CardFooter>
    </Card>
  </div>
);

export default EventsTab;
