
import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";

// Initial demo data for requests (would be loaded from a backend in a real app)
const demoRequests = [
  {
    id: 1,
    title: "Install more bike racks",
    subject: "Request for more bike parking spaces near Block B entrance.",
    submittedBy: "Samantha K. (B-202)",
    date: "April 17, 2025",
    votes: 7,
  },
  {
    id: 2,
    title: "Community Library Corner",
    subject: "Proposal to set up a book-sharing corner in the main lobby.",
    submittedBy: "Mark Z. (C-108)",
    date: "April 14, 2025",
    votes: 4,
  },
  {
    id: 3,
    title: "Kids' Playground Fence Maintenance",
    subject: "The fence around the kids' play area needs repair for safety.",
    submittedBy: "Priya S. (A-309)",
    date: "April 13, 2025",
    votes: 9,
  },
];

type Request = typeof demoRequests[0];

const SubmittedRequestsList: React.FC = () => {
  const [requests, setRequests] = useState<Request[]>([...demoRequests]);
  const [userVotes, setUserVotes] = useState<{ [key: number]: 1 | -1 | 0 }>({});

  const handleVote = (id: number, delta: 1 | -1) => {
    setRequests((curr) =>
      curr
        .map((req) => {
          if (req.id === id) {
            // If previously voted, remove previous vote effect
            const prevVote = userVotes[id] ?? 0;
            return {
              ...req,
              votes: req.votes - prevVote + delta,
            };
          }
          return req;
        })
        .sort((a, b) => b.votes - a.votes)
    );
    setUserVotes((curr) => ({ ...curr, [id]: delta }));
  };

  return (
    <div className="mt-12">
      <Card>
        <CardHeader className="bg-blue-50">
          <CardTitle>Submitted Requests (Vote on Community Priorities)</CardTitle>
          <CardDescription>
            Upvote requests that you want addressed sooner. Requests are ranked by popularity.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          {requests.length === 0 ? (
            <p className="text-gray-600 text-sm">No submitted requests to display.</p>
          ) : (
            <div className="space-y-6">
              {requests.map((req) => (
                <div
                  key={req.id}
                  className="border flex items-start rounded-lg px-4 py-3 gap-4 shadow-sm bg-white"
                >
                  <div className="flex flex-col items-center pt-1 pr-2 gap-2">
                    <Button
                      size="icon"
                      variant={userVotes[req.id] === 1 ? "default" : "ghost"}
                      className="mb-1"
                      aria-label="Upvote"
                      onClick={() => handleVote(req.id, 1)}
                      disabled={userVotes[req.id] === 1}
                    >
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <span className="font-bold text-lg">{req.votes}</span>
                    <Button
                      size="icon"
                      variant={userVotes[req.id] === -1 ? "default" : "ghost"}
                      className="mt-1"
                      aria-label="Downvote"
                      onClick={() => handleVote(req.id, -1)}
                      disabled={userVotes[req.id] === -1}
                    >
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-base">{req.title}</span>
                    </div>
                    <p className="text-gray-600 text-[15px] mt-1 mb-2">{req.subject}</p>
                    <div className="text-xs text-gray-500 flex flex-wrap gap-2">
                      <span>{req.submittedBy}</span>
                      <span>•</span>
                      <span>{req.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmittedRequestsList;
