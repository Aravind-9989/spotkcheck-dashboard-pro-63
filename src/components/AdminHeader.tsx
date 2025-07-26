import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";

export function AdminHeader() {
  return (
    <header className="h-16 flex items-center justify-between px-4 bg-card border-b border-border backdrop-blur-md bg-card/95">
      <div className="flex items-center gap-4">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Admin Dashboard
          </h2>
          <p className="text-sm text-muted-foreground">
            Medical Case Management Portal
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}