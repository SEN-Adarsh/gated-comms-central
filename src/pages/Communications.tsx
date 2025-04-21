import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bell, MessageSquare, HelpCircle, Calendar, Users, Phone, Mail, Contact, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";

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
              <HelpCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Help</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Events</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="announcements" id="announcements">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="bg-[#ea384c]/10">
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2 h-5 w-5 text-[#ea384c]" />
                    <span className="text-[#ea384c]">Maintenance Notice</span>
                  </CardTitle>
                  <CardDescription className="text-[#ea384c] font-semibold">April 18, 2025</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-[#ea384c]">
                    Water supply will be interrupted on Saturday from 10 AM to 2 PM due to scheduled maintenance work on the main lines. Please store water accordingly.
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-[#ea384c]/80">
                  Posted by: Maintenance Department
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="bg-yellow-100">
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2 h-5 w-5 text-yellow-500" />
                    <span className="text-yellow-700">Community Meeting</span>
                  </CardTitle>
                  <CardDescription className="text-yellow-700 font-semibold">April 20, 2025</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>
                    The quarterly community meeting will be held this Sunday at 4 PM in the community hall. All residents are encouraged to attend as we'll be discussing important matters about security upgrades.
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-yellow-700/90">
                  Posted by: Community President
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="bg-yellow-100">
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2 h-5 w-5 text-yellow-500" />
                    <span className="text-yellow-700">New Security Protocol</span>
                  </CardTitle>
                  <CardDescription className="text-yellow-700 font-semibold">April 15, 2025</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>
                    Starting next week, we're implementing a new visitor management system. All visitors must be pre-registered through the app. Please check your email for detailed instructions.
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-yellow-700/90">
                  Posted by: Security Team
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="bg-yellow-100">
                  <CardTitle className="flex items-center">
                    <Bell className="mr-2 h-5 w-5 text-yellow-500" />
                    <span className="text-yellow-700">Landscaping Update</span>
                  </CardTitle>
                  <CardDescription className="text-yellow-700 font-semibold">April 10, 2025</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p>
                    The community garden renovation is now complete. Residents are welcome to enjoy the new seating areas and walking paths. Please help us maintain this beautiful space by following the posted guidelines.
                  </p>
                </CardContent>
                <CardFooter className="text-sm text-yellow-700/90">
                  Posted by: Landscaping Committee
                </CardFooter>
              </Card>
            </div>
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
          </TabsContent>
          
          <TabsContent value="help" id="help">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2 flex flex-col gap-8">
                <div>
                  <h2 className="text-lg font-bold mb-3 text-[#ea384c] flex items-center gap-2">
                    <span>
                      <Handshake size={22} className="inline mr-1 text-[#ea384c]" />
                    </span>
                    Required Help
                  </h2>
                  <div className="bg-white border-l-4 border-[#ea384c] shadow rounded-lg mb-6 px-5 py-4">
                    <h3 className="font-semibold text-[#ea384c] mb-1">Need help with grocery shopping</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      I recently had surgery and can't drive for two weeks. Would someone be willing to help me with grocery shopping? I can provide a list and payment.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
                      <span>Posted by David L. (C-310)</span>
                      <span>•</span>
                      <span>April 16, 2025</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white">
                        Contact
                      </Button>
                      <Button variant="ghost" size="sm">5 Replies</Button>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-3 text-green-700 flex items-center gap-2">
                    <span>
                      <Handshake size={22} className="inline mr-1 text-green-700 fill-green-100" />
                    </span>
                    Offering Help
                  </h2>
                  <div className="bg-[#F2FCE2] border-l-4 border-green-500 shadow rounded-lg mb-6 px-5 py-4">
                    <h3 className="font-semibold text-green-700 mb-1">Offering free piano lessons for kids</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      I'm a retired piano teacher willing to give free basic piano lessons to kids in our community. Sessions would be once a week for 30 minutes. Space for 3 students only.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-2">
                      <span>Posted by Robert M. (A-105)</span>
                      <span>•</span>
                      <span>April 17, 2025</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-green-500 text-green-700 hover:bg-green-600 hover:text-white">
                        Contact
                      </Button>
                      <Button variant="ghost" size="sm">7 Replies</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card>
                  <CardHeader className="bg-green-50">
                    <CardTitle>Post Help Request</CardTitle>
                    <CardDescription>Share your request with the community</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="help-title" className="text-sm font-medium">Title</label>
                        <Input id="help-title" placeholder="Brief title for your request" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="help-details" className="text-sm font-medium">Details</label>
                        <Textarea 
                          id="help-details" 
                          placeholder="Explain what you need help with or what you're offering..." 
                          rows={4}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="help-category" className="text-sm font-medium">Category</label>
                        <select
                          id="help-category"
                          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                          defaultValue="required"
                        >
                          <option value="required">Required Help</option>
                          <option value="offering">Offering Help</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="help-contact" className="text-sm font-medium">Contact Information</label>
                        <Input id="help-contact" placeholder="How should people reach you?" />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Post Request</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
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
        
        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Contact className="text-blue-600" size={22} />
            Contact
          </h2>
          <p className="text-gray-600 mb-4">Connect with your community's key contacts for assistance and information.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="bg-blue-50 pb-2 flex flex-row items-center gap-2">
                <Users className="text-blue-500" size={20} />
                <CardTitle className="text-lg">Management Office</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="text-gray-500" size={16} />
                    <span>Phone:</span>
                    <span className="font-medium">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="text-gray-500" size={16} />
                    <span>Email:</span>
                    <span className="font-medium">office@gatedcomms.com</span>
                  </div>
                  <p className="text-sm mt-2">Office Hours:</p>
                  <p className="text-sm">Mon-Fri: 9 AM - 5 PM, Sat: 10 AM - 2 PM</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-green-50 pb-2 flex flex-row items-center gap-2">
                <Phone className="text-green-600" size={20} />
                <CardTitle className="text-lg">Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="text-gray-500" size={16} />
                    <span>Phone:</span>
                    <span className="font-medium">(555) 123-4569</span>
                  </div>
                  <p className="text-sm mt-2">Emergency Support: 24/7</p>
                  <p className="text-sm">Regular: Mon-Sat, 8 AM - 7 PM</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="bg-orange-50 pb-2 flex flex-row items-center gap-2">
                <Users className="text-orange-500" size={20} />
                <CardTitle className="text-lg">Security</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="text-gray-500" size={16} />
                    <span>Phone:</span>
                    <span className="font-medium">(555) 123-4570</span>
                  </div>
                  <p className="text-sm mt-2">Gate Security: 24/7 Coverage</p>
                  <p className="text-sm">Office at Main Entrance</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
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
