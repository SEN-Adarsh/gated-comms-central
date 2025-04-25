
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Define user roles and their credentials
const ROLE_CREDENTIALS = {
  president: {
    email: "president@gmail.com",
    role: "president",
    redirect: "/president-dashboard",
  },
  shopkeeper: {
    email: "shop@gmail.com",
    role: "shopkeeper",
    redirect: "/shop-dashboard",
  },
  resident: {
    role: "resident",
    redirect: "/communications",
  },
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && password) {
      // Check for special roles
      if (email === ROLE_CREDENTIALS.president.email) {
        toast({
          title: "Welcome, Community President",
          description: "Logging you into the president dashboard",
        });
        navigate(ROLE_CREDENTIALS.president.redirect);
      } else if (email === ROLE_CREDENTIALS.shopkeeper.email) {
        toast({
          title: "Welcome, Shop Manager",
          description: "Logging you into the shop dashboard",
        });
        navigate(ROLE_CREDENTIALS.shopkeeper.redirect);
      } else {
        // Regular resident login
        toast({
          title: "Login successful",
          description: "Welcome to GatedComms Central",
        });
        navigate(ROLE_CREDENTIALS.resident.redirect);
      }
    } else {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Login to GatedComms</CardTitle>
          <CardDescription>
            Enter your credentials to access your community portal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Button type="button" variant="link" className="text-xs p-0 h-auto">
                  Forgot password?
                </Button>
              </div>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <Button variant="link" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
