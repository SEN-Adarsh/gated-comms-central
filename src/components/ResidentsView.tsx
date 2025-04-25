
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

// Mock data - in a real app this would come from a database
const residents = [
  { name: "John Doe", block: "A", unit: "101" },
  { name: "Jane Smith", block: "A", unit: "102" },
  { name: "Bob Johnson", block: "B", unit: "201" },
  { name: "Alice Brown", block: "B", unit: "202" },
  { name: "Charlie Wilson", block: "C", unit: "301" },
  { name: "Diana Miller", block: "C", unit: "302" },
  { name: "Edward Davis", block: "D", unit: "401" },
  { name: "Fiona Clark", block: "D", unit: "402" },
].sort((a, b) => {
  // Sort by block first
  if (a.block !== b.block) {
    return a.block.localeCompare(b.block);
  }
  // Then by unit number
  return a.unit.localeCompare(b.unit);
});

const ResidentsView = () => {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Community Residents</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Block</TableHead>
                <TableHead>Unit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {residents.map((resident, index) => (
                <TableRow key={index}>
                  <TableCell>{resident.name}</TableCell>
                  <TableCell>{resident.block}</TableCell>
                  <TableCell>{resident.unit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResidentsView;
