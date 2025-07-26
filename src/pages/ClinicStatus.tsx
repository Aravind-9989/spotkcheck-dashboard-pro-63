import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, Building2 } from "lucide-react";

const ClinicStatus = () => {
  const [sortBy, setSortBy] = useState("none");
  const [statusFilter, setStatusFilter] = useState("all");

  const clinics = [
    {
      id: "CLN001",
      name: "City Medical Center",
      email: "admin@citymedical.com",
      leadName: "Dr. Sarah Johnson",
      leadContact: "+44 20 7123 4567",
      status: "Onboarded",
      paymentStatus: "Paid",
    },
    {
      id: "CLN002",
      name: "Metro Clinic",
      email: "info@metroclinic.com",
      leadName: "Dr. Mike Wilson",
      leadContact: "+44 20 7123 4568",
      status: "Not Onboarded",
      paymentStatus: "Pending",
    },
    {
      id: "CLN003",
      name: "Health Plus",
      email: "contact@healthplus.com",
      leadName: "Dr. Emma Davis",
      leadContact: "+44 20 7123 4569",
      status: "Onboarded",
      paymentStatus: "Paid",
    },
  ];

  const getStatusBadge = (status: string) => {
    return status === "Onboarded" 
      ? <Badge className="bg-success text-success-foreground">Onboarded</Badge>
      : <Badge variant="outline">Not Onboarded</Badge>;
  };

  const getPaymentBadge = (status: string) => {
    return status === "Paid"
      ? <Badge className="bg-success text-success-foreground">Paid</Badge>
      : <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            Clinic Status Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Sort by:</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="clinicId">Clinic ID</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Status:</label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="onboarded">Onboarded</SelectItem>
                  <SelectItem value="notOnboarded">Not Onboarded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Clinic Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Clinic ID</TableHead>
                  <TableHead>Clinic Details</TableHead>
                  <TableHead>Clinic Email</TableHead>
                  <TableHead>Lead Name</TableHead>
                  <TableHead>Lead Contact</TableHead>
                  <TableHead>Clinic Status</TableHead>
                  <TableHead>Payment Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clinics.map((clinic) => (
                  <TableRow key={clinic.id}>
                    <TableCell className="font-mono text-sm">{clinic.id}</TableCell>
                    <TableCell className="font-medium">{clinic.name}</TableCell>
                    <TableCell className="text-sm">{clinic.email}</TableCell>
                    <TableCell className="text-sm">{clinic.leadName}</TableCell>
                    <TableCell className="text-sm">{clinic.leadContact}</TableCell>
                    <TableCell>{getStatusBadge(clinic.status)}</TableCell>
                    <TableCell>{getPaymentBadge(clinic.paymentStatus)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Showing 1 to 3 of 3 entries
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClinicStatus;