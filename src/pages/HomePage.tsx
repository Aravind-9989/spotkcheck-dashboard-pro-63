import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Mail, Phone, Users, FileText, Eye } from "lucide-react";

const HomePage = () => {
  const summaryData = {
    gp: { active: 20, progress: 0 },
    dermoscopy: { active: 20, progress: 0 },
    both: { active: 1, progress: 0 },
  };

  const gpPatients = [
    { id: "GP001", name: "John Smith", status: "Active", clinic: "City Medical Center" },
    { id: "GP002", name: "Sarah Johnson", status: "In Progress", clinic: "Metro Clinic" },
    { id: "GP003", name: "Mike Wilson", status: "Completed", clinic: "Health Plus" },
  ];

  const dermatologyPatients = [
    { id: "DM001", name: "Emma Davis", status: "Active", clinic: "Skin Care Clinic" },
    { id: "DM002", name: "James Brown", status: "In Progress", clinic: "Derma Solutions" },
    { id: "DM003", name: "Lisa Taylor", status: "Active", clinic: "Elite Dermatology" },
  ];

  const bothServicePatients = [
    { id: "BS001", name: "Robert Miller", status: "Active", clinic: "Comprehensive Care" },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-success text-success-foreground";
      case "in progress":
        return "bg-warning text-warning-foreground";
      case "completed":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Summary Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                Total Number of Cases
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">GP Cases:</span>
                  <div className="flex gap-2">
                    <Badge variant="secondary">
                      {summaryData.gp.active} Active
                    </Badge>
                    <Badge variant="outline">
                      {summaryData.gp.progress} In Progress
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Dermoscopy:</span>
                  <div className="flex gap-2">
                    <Badge variant="secondary">
                      {summaryData.dermoscopy.active} Active
                    </Badge>
                    <Badge variant="outline">
                      {summaryData.dermoscopy.progress} In Progress
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Both GP & Dermoscopic:</span>
                  <div className="flex gap-2">
                    <Badge variant="secondary">
                      {summaryData.both.active} Active
                    </Badge>
                    <Badge variant="outline">
                      {summaryData.both.progress} In Progress
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Help
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Talk To Experts</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Book a session and get a demo on how to use the application with full potential.
              </p>
              <div className="space-y-2">
                <Button className="w-full" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
                <Button variant="outline" className="w-full" size="sm">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Write us at drk@aesthetk.com or 📞 01277 282 789
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Patient Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* GP Patients */}
        <Card>
          <CardHeader>
            <CardTitle>GP Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient ID</TableHead>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Clinic Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gpPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-mono text-sm">{patient.id}</TableCell>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(patient.status)}>
                        {patient.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{patient.clinic}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Dermatology Patients */}
        <Card>
          <CardHeader>
            <CardTitle>Dermatology Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient ID</TableHead>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Clinic Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dermatologyPatients.map((patient) => (
                  <TableRow key={patient.id}>
                    <TableCell className="font-mono text-sm">{patient.id}</TableCell>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(patient.status)}>
                        {patient.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">{patient.clinic}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Both Service Patients */}
      <Card>
        <CardHeader>
          <CardTitle>Both Service Patients</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient ID</TableHead>
                <TableHead>Patient Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Clinic Name</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bothServicePatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell className="font-mono text-sm">{patient.id}</TableCell>
                  <TableCell className="font-medium">{patient.name}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(patient.status)}>
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{patient.clinic}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;