import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar as CalendarIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { toast } from "sonner";

const EventsTab = () => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  
  const handleBookNow = (eventName) => {
    toast.success(`You've booked a spot for ${eventName}`);
  };
  
  return (
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
                <CalendarIcon className="h-4 w-4 mr-1" />
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
                <CalendarIcon className="h-4 w-4 mr-1" />
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
                <CalendarIcon className="h-4 w-4 mr-1" />
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
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>Every Saturday • 8:00 AM - 9:00 AM</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="outline" onClick={() => setCalendarOpen(true)}>View Full Calendar</Button>
        </CardFooter>
      </Card>
      
      {/* External Events Section */}
      <Card>
        <CardHeader className="bg-amber-50">
          <CardTitle>External Events</CardTitle>
          <CardDescription>Interesting events happening outside our community</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">City Food Festival</h3>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">May 15-16, 2025</span>
              </div>
              <p className="text-gray-600 mt-1">Annual food festival at downtown featuring cuisines from around the world. Free entry, food purchases available on site.</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>May 15-16, 2025 • 11:00 AM - 8:00 PM</span>
                </div>
                <Button size="sm" className="flex items-center gap-1" onClick={() => handleBookNow("City Food Festival")}>
                  Book now <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Art in the Park Exhibition</h3>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">June 2, 2025</span>
              </div>
              <p className="text-gray-600 mt-1">Local artists showcasing their work at Central Park. Includes interactive workshops and art sales. Great for all ages.</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>June 2, 2025 • 10:00 AM - 6:00 PM</span>
                </div>
                <Button size="sm" className="flex items-center gap-1" onClick={() => handleBookNow("Art in the Park Exhibition")}>
                  Book now <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            <div className="border-l-4 border-cyan-500 pl-4 py-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Regional Home & Garden Show</h3>
                <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">June 10-12, 2025</span>
              </div>
              <p className="text-gray-600 mt-1">Explore the latest trends in home decor, gardening and landscaping. Expert talks and demonstrations throughout the weekend.</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>June 10-12, 2025 • 9:00 AM - 7:00 PM</span>
                </div>
                <Button size="sm" className="flex items-center gap-1" onClick={() => handleBookNow("Regional Home & Garden Show")}>
                  Book now <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Calendar Dialog */}
      <Dialog open={calendarOpen} onOpenChange={setCalendarOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Community Calendar</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Calendar
              mode="single"
              className="rounded-md border"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventsTab;
