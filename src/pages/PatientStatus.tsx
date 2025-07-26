import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users, Eye, FileText, Upload } from "lucide-react";

const PatientStatus = () => {
  const [sortBy, setSortBy] = useState("none");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const patients = [
    {
      id: "PT001",
      type: "GP",
      firstName: "John",
      lastName: "Smith",
      gender: "Male",
      dob: "1985-06-15",
      email: "john.smith@email.com",
      phone: "+44 7123 456789",
      clinic: "City Medical Center",
      status: "In Progress",
      paymentStatus: "Paid",
    },
    {
      id: "PT002",
      type: "Dermoscopy",
      firstName: "Sarah",
      lastName: "Johnson",
      gender: "Female",
      dob: "1992-03-22",
      email: "sarah.johnson@email.com",
      phone: "+44 7123 456790",
      clinic: "Skin Care Clinic",
      status: "Submitted",
      paymentStatus: "Pending",
    },
    {
      id: "PT003",
      type: "Both",
      firstName: "Mike",
      lastName: "Wilson",
      gender: "Male",
      dob: "1978-11-08",
      email: "mike.wilson@email.com",
      phone: "+44 7123 456791",
      clinic: "Health Plus",
      status: "Completed",
      paymentStatus: "Paid",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return <Badge className="bg-warning text-warning-foreground">In Progress</Badge>;
      case "submitted":
        return <Badge className="bg-primary text-primary-foreground">Submitted</Badge>;
      case "completed":
        return <Badge className="bg-success text-success-foreground">Completed</Badge>;
      case "rejected":
        return <Badge className="bg-destructive text-destructive-foreground">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getPaymentBadge = (status: string) => {
    return status === "Paid"
      ? <Badge className="bg-success text-success-foreground">Paid</Badge>
      : <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
  };

  const handlePatientClick = (patient: any) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Patient Status Management
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
                  <SelectItem value="patientId">Patient ID</SelectItem>
                  <SelectItem value="firstName">First Name</SelectItem>
                  <SelectItem value="lastName">Last Name</SelectItem>
                  <SelectItem value="dob">DOB</SelectItem>
                  <SelectItem value="phone">Phone Number</SelectItem>
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
                  <SelectItem value="inProgress">In Progress</SelectItem>
                  <SelectItem value="submitted">Submitted</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Patient Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient Type</TableHead>
                  <TableHead>Patient ID</TableHead>
                  <TableHead>Patient Details</TableHead>
                  <TableHead>Clinic Details</TableHead>
                  <TableHead>Documents</TableHead>
                  <TableHead>Report</TableHead>
                  <TableHead>Payment Status</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell>
                      <Badge variant="outline">{patient.type}</Badge>
                    </TableCell>
                    <TableCell className="font-mono text-sm">
                      <Button
                        variant="link"
                        className="p-0 h-auto text-primary"
                        onClick={() => handlePatientClick(patient)}
                      >
                        {patient.id}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="font-medium">{patient.firstName} {patient.lastName}</div>
                        <div className="text-muted-foreground">{patient.email}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{patient.clinic}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileText className="w-4 h-4" />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                    <TableCell>{getPaymentBadge(patient.paymentStatus)}</TableCell>
                    <TableCell>{getStatusBadge(patient.status)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" onClick={() => handlePatientClick(patient)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Patient Details Modal */}
      <Dialog open={!!selectedPatient} onOpenChange={() => setSelectedPatient(null)}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Patient Details - {selectedPatient?.id}</DialogTitle>
          </DialogHeader>
          {selectedPatient && (
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="details">Patient Details</TabsTrigger>
                <TabsTrigger value="medical">Medical History</TabsTrigger>
                <TabsTrigger value="drugs">Drug History</TabsTrigger>
                <TabsTrigger value="documents">Upload Docs</TabsTrigger>
                <TabsTrigger value="disclaimer">Disclaimer</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>First Name</Label>
                    <Input value={selectedPatient.firstName} readOnly />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input value={selectedPatient.lastName} readOnly />
                  </div>
                  <div>
                    <Label>Gender</Label>
                    <Input value={selectedPatient.gender} readOnly />
                  </div>
                  <div>
                    <Label>Date of Birth</Label>
                    <Input value={selectedPatient.dob} readOnly />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input value={selectedPatient.email} readOnly />
                  </div>
                  <div>
                    <Label>Mobile Number</Label>
                    <Input value={selectedPatient.phone} readOnly />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="medical" className="space-y-4">
                <div>
                  <Label>Medical History Questions</Label>
                  <Textarea 
                    placeholder="Medical history and questionnaire responses will be displayed here..."
                    className="min-h-32"
                    readOnly
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="drugs" className="space-y-4">
                <div>
                  <Label>Drug History</Label>
                  <Textarea 
                    placeholder="Current medications and drug history will be displayed here..."
                    className="min-h-32"
                    readOnly
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="documents" className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Patient documents and images will be displayed here
                  </p>
                  <Button variant="outline" className="mt-4">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload New Document
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="disclaimer" className="space-y-4">
                <div>
                  <Label>Disclaimer and Consent</Label>
                  <Textarea 
                    placeholder="Patient disclaimer and consent information will be displayed here..."
                    className="min-h-32"
                    readOnly
                  />
                </div>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PatientStatus;