import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ticket, Plus, Trash2 } from "lucide-react";

const CouponCodes = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState("");

  const existingCoupons = [
    {
      id: 1,
      code: "WELCOME20",
      discount: "20%",
      status: "Active",
      created: "2024-01-15",
      used: 45,
    },
    {
      id: 2,
      code: "NEWPATIENT",
      discount: "15%",
      status: "Active",
      created: "2024-01-10",
      used: 23,
    },
    {
      id: 3,
      code: "CHECKUP50",
      discount: "50%",
      status: "Expired",
      created: "2023-12-01",
      used: 89,
    },
  ];

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode && discount) {
      // Handle coupon creation here
      console.log("Creating coupon:", { code: couponCode, discount });
      setCouponCode("");
      setDiscount("");
      setIsCreateOpen(false);
    }
  };

  const getStatusBadge = (status: string) => {
    return status === "Active"
      ? <Badge className="bg-success text-success-foreground">Active</Badge>
      : <Badge variant="outline">Expired</Badge>;
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Ticket className="w-5 h-5 text-primary" />
              Coupon Codes Management
            </CardTitle>
            <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Coupon Code
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Coupon Code</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCreateCoupon} className="space-y-4">
                  <div>
                    <Label htmlFor="couponCode">Coupon Code</Label>
                    <Input
                      id="couponCode"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code (e.g., SAVE20)"
                      className="uppercase"
                    />
                  </div>
                  <div>
                    <Label htmlFor="discount">Discount</Label>
                    <Input
                      id="discount"
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      placeholder="Enter discount (e.g., 20% or £10)"
                    />
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button type="submit" className="flex-1">
                      Create Coupon
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsCreateOpen(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          {/* Existing Coupons Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Coupon Code</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created Date</TableHead>
                  <TableHead>Times Used</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {existingCoupons.map((coupon) => (
                  <TableRow key={coupon.id}>
                    <TableCell className="font-mono font-medium">
                      {coupon.code}
                    </TableCell>
                    <TableCell className="font-semibold text-primary">
                      {coupon.discount}
                    </TableCell>
                    <TableCell>{getStatusBadge(coupon.status)}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {coupon.created}
                    </TableCell>
                    <TableCell className="text-sm">
                      <Badge variant="outline">{coupon.used} uses</Badge>
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Total Coupons</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">2</div>
                  <div className="text-sm text-muted-foreground">Active Coupons</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">157</div>
                  <div className="text-sm text-muted-foreground">Total Uses</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CouponCodes;
