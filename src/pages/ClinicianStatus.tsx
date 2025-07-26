import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserCheck, Plus } from "lucide-react";

const ClinicianStatus = () => {
  const [sortBy, setSortBy] = useState("none");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const clinicians = [
    {
      id: "DOC001",
      firstName: "Dr. Sarah",
      lastName: "Johnson",
      email: "sarah.johnson@citymedical.com",
      gmcNumber: "GMC123456",
      specialty: "GP",
      clinic: "City Medical Center",
      status: "Active",
    },
    {
      id: "DOC002",
      firstName: "Dr. Mike",
      lastName: "Wilson",
      email: "mike.wilson@metroclinic.com",
      gmcNumber: "GMC789012",
      specialty: "Dermatologist",
      clinic: "Metro Clinic",
      status: "Active",
    },
    {
      id: "DOC003",
      firstName: "Dr. Emma",
      lastName: "Davis",
      email: "emma.davis@healthplus.com",
      gmcNumber: "GMC345678",
      specialty: "GPWR/GPSI",
      clinic: "Health Plus",
      status: "Pending",
    },
  ];

  const getStatusBadge = (status: string) => {
    return status === "Active"
      ? <Badge className="bg-success text-success-foreground">Active</Badge>
      : <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
  };

  const handleCreateClinician = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreateOpen(false);
    // Handle form submission here
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-primary" />
              Clinician Status Management
            </CardTitle>
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Clinician
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Doctor Information</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCreateClinician} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter last name" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email ID</Label>
                      <Input id="email" type="email" placeholder="Enter email address" />
                    </div>
                    <div>
                      <Label htmlFor="gmcNumber">GMC Number</Label>
                      <Input id="gmcNumber" placeholder="Enter GMC number" />
                    </div>
                    <div>
                      <Label htmlFor="specialty">Specialty</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select specialty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gp">GP</SelectItem>
                          <SelectItem value="gpwr">GPWR/GPSI</SelectItem>
                          <SelectItem value="dermatologist">Dermatologist</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="clinic">Clinic Details</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select clinic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="city-medical">City Medical Center</SelectItem>
                          <SelectItem value="metro-clinic">Metro Clinic</SelectItem>
                          <SelectItem value="health-plus">Health Plus</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="pt-6">
                      <Button type="submit" className="w-full">
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {/* Sort Filter */}
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
          </div>

          {/* Clinician Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Doctor ID</TableHead>
                  <TableHead>First Name</TableHead>
                  <TableHead>Last Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>GMC Number</TableHead>
                  <TableHead>Specialty</TableHead>
                  <TableHead>Clinic</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clinicians.map((clinician) => (
                  <TableRow key={clinician.id}>
                    <TableCell className="font-mono text-sm">{clinician.id}</TableCell>
                    <TableCell className="font-medium">{clinician.firstName}</TableCell>
                    <TableCell className="font-medium">{clinician.lastName}</TableCell>
                    <TableCell className="text-sm">{clinician.email}</TableCell>
                    <TableCell className="font-mono text-sm">{clinician.gmcNumber}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{clinician.specialty}</Badge>
                    </TableCell>
                    <TableCell className="text-sm">{clinician.clinic}</TableCell>
                    <TableCell>{getStatusBadge(clinician.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClinicianStatus;