import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MessageSquare, Bell, Handshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Announcements from "@/components/Announcements";
import ContactSection from "@/components/ContactSection";
import HelpSection from "@/components/HelpSection";
import SubmittedRequestsList from "@/components/SubmittedRequestsList";

const Communications = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Community Communications Center</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your central hub for all community communications, announcements, requests, and support.
          </p>
        </div>
        
        <Tabs defaultValue="announcements" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="announcements" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Announcements</span>
            </TabsTrigger>
            <TabsTrigger value="requests" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Requests</span>
            </TabsTrigger>
            <TabsTrigger value="help" className="flex items-center gap-2">
              <Handshake className="h-4 w-4" />
              <span className="hidden sm:inline">Help</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="announcements" id="announcements">
            <Announcements />
          </TabsContent>
          
          <TabsContent value="requests" id="requests">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader className="bg-orange-50">
                    <CardTitle>Submit a Request to the President</CardTitle>
                    <CardDescription>
                      Your request will be reviewed and addressed within 48 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form className="space-y-4">
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Name</label>
                            <Input id="name" placeholder="Your name" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="unit" className="text-sm font-medium">Unit/Apartment #</label>
                            <Input id="unit" placeholder="e.g., A-101" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                          <Input id="subject" placeholder="Brief subject of your request" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">Message</label>
                          <Textarea 
                            id="message" 
                            placeholder="Please provide details of your request..." 
                            rows={5}
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Submit Request</Button>
                  </CardFooter>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader className="bg-orange-50">
                    <CardTitle>Request Status</CardTitle>
                    <CardDescription>Track your submitted requests</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div className="border rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Park Bench Repair</span>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">In Progress</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Submitted on April 14, 2025</p>
                      </div>
                      
                      <div className="border rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Street Light Issue</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Resolved</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Submitted on April 5, 2025</p>
                      </div>
                      
                      <div className="border rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Guest Parking Permission</span>
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Declined</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Submitted on March 27, 2025</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full">View All Requests</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <SubmittedRequestsList />
          </TabsContent>
          
          <TabsContent value="help" id="help">
            <HelpSection />
          </TabsContent>
          
          <TabsContent value="events" id="events">
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
          </TabsContent>
        </Tabs>
        
        <ContactSection />
      </main>
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">GatedComms</h3>
              <p className="text-gray-400">
                Simplifying community communications for gated societies and residential complexes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <p className="text-gray-400 mb-2">Download our mobile app:</p>
              <div className="flex space-x-3">
                <Button variant="outline" className="text-gray-400 border-gray-600 hover:text-white hover:border-white">
                  App Store
                </Button>
                <Button variant="outline" className="text-gray-400 border-gray-600 hover:text-white hover:border-white">
                  Google Play
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
            <p>© 2025 GatedComms. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Communications;
