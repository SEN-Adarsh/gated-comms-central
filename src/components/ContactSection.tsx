
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, Phone, Mail, Contact } from "lucide-react";

const ContactSection = () => (
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
);

export default ContactSection;
