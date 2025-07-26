import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DollarSign, TrendingUp, Calendar, CreditCard } from "lucide-react";

const Revenue = () => {
  const revenueData = [
    {
      id: "REV001",
      date: "2024-01-25",
      patientId: "PT001",
      patientName: "John Smith",
      clinic: "City Medical Center",
      service: "GP Consultation",
      amount: "£75.00",
      status: "Paid",
      paymentMethod: "Card",
    },
    {
      id: "REV002",
      date: "2024-01-25",
      patientId: "PT002",
      patientName: "Sarah Johnson",
      clinic: "Skin Care Clinic",
      service: "Dermoscopy",
      amount: "£120.00",
      status: "Paid",
      paymentMethod: "Bank Transfer",
    },
    {
      id: "REV003",
      date: "2024-01-24",
      patientId: "PT003",
      patientName: "Mike Wilson",
      clinic: "Health Plus",
      service: "Both Services",
      amount: "£180.00",
      status: "Pending",
      paymentMethod: "Card",
    },
    {
      id: "REV004",
      date: "2024-01-24",
      patientId: "PT004",
      patientName: "Emma Davis",
      clinic: "Metro Clinic",
      service: "GP Consultation",
      amount: "£75.00",
      status: "Paid",
      paymentMethod: "PayPal",
    },
    {
      id: "REV005",
      date: "2024-01-23",
      patientId: "PT005",
      patientName: "Robert Miller",
      clinic: "Elite Dermatology",
      service: "Dermoscopy",
      amount: "£120.00",
      status: "Paid",
      paymentMethod: "Card",
    },
  ];

  const getStatusBadge = (status: string) => {
    return status === "Paid"
      ? <Badge className="bg-success text-success-foreground">Paid</Badge>
      : <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
  };

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case "Card":
        return <CreditCard className="w-4 h-4" />;
      default:
        return <DollarSign className="w-4 h-4" />;
    }
  };

  // Calculate totals
  const totalRevenue = revenueData
    .filter(item => item.status === "Paid")
    .reduce((sum, item) => sum + parseFloat(item.amount.replace("£", "")), 0);
  
  const pendingRevenue = revenueData
    .filter(item => item.status === "Pending")
    .reduce((sum, item) => sum + parseFloat(item.amount.replace("£", "")), 0);

  return (
    <div className="p-6 space-y-6">
      {/* Revenue Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold text-primary">£{totalRevenue.toFixed(2)}</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Revenue</p>
                <p className="text-2xl font-bold text-warning">£{pendingRevenue.toFixed(2)}</p>
              </div>
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Transactions</p>
                <p className="text-2xl font-bold text-foreground">{revenueData.length}</p>
              </div>
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Growth Rate</p>
                <p className="text-2xl font-bold text-success">+12.5%</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Revenue Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Patient ID</TableHead>
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Clinic</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Payment Method</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {revenueData.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-mono text-sm">{transaction.id}</TableCell>
                    <TableCell className="text-sm">{transaction.date}</TableCell>
                    <TableCell className="font-mono text-sm">{transaction.patientId}</TableCell>
                    <TableCell className="font-medium">{transaction.patientName}</TableCell>
                    <TableCell className="text-sm">{transaction.clinic}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{transaction.service}</Badge>
                    </TableCell>
                    <TableCell className="font-semibold text-primary">
                      {transaction.amount}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getPaymentMethodIcon(transaction.paymentMethod)}
                        <span className="text-sm">{transaction.paymentMethod}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Summary Section */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary">GP Consultations</div>
                  <div className="text-2xl font-bold">£150.00</div>
                  <div className="text-sm text-muted-foreground">2 transactions</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary">Dermoscopy</div>
                  <div className="text-2xl font-bold">£240.00</div>
                  <div className="text-sm text-muted-foreground">2 transactions</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-primary">Both Services</div>
                  <div className="text-2xl font-bold">£180.00</div>
                  <div className="text-sm text-muted-foreground">1 transaction</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Revenue;