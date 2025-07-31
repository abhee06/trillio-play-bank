import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Shield, 
  DollarSign, 
  TrendingUp, 
  Bell, 
  Settings,
  Eye,
  CreditCard,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

export const ParentDashboard = () => {
  const childActivities = [
    { id: 1, type: "spend", amount: 150, merchant: "Starbucks", time: "2 hours ago", status: "approved" },
    { id: 2, type: "save", amount: 500, description: "Weekly allowance saved", time: "1 day ago", status: "completed" },
    { id: 3, type: "request", amount: 300, description: "Movie tickets with friends", time: "3 hours ago", status: "pending" },
    { id: 4, type: "spend", amount: 75, merchant: "Local Bookstore", time: "Yesterday", status: "approved" }
  ];

  const savingsProgress = [
    { goal: "Gaming Console", progress: 57, amount: 8500, target: 15000 },
    { goal: "School Trip", progress: 64, amount: 3200, target: 5000 },
    { goal: "Art Supplies", progress: 90, amount: 1800, target: 2000 }
  ];

  return (
    <div className="space-y-6 p-4 max-w-md mx-auto bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Parent Control</h1>
          <p className="text-muted-foreground">Managing Aarav's account</p>
        </div>
        <Button variant="parent" size="icon">
          <Settings className="w-4 h-4" />
        </Button>
      </div>

      {/* Child Overview */}
      <Card className="p-6 bg-gradient-lavender shadow-card">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl text-primary-foreground">
            🧑‍💻
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">Aarav Kumar</h3>
            <p className="text-muted-foreground">Age 14 • Active User</p>
            <Badge className="mt-1 bg-accent text-accent-foreground">Level 5 Saver</Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">₹12,470</div>
            <p className="text-sm text-muted-foreground">Current Balance</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">₹13,500</div>
            <p className="text-sm text-muted-foreground">Total Saved</p>
          </div>
        </div>
      </Card>

      {/* Quick Controls */}
      <Card className="p-4 shadow-card">
        <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          Quick Controls
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Card Active</span>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Real-time Alerts</span>
            </div>
            <Switch defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Spending Approval</span>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border">
          <Button variant="parent" size="sm" className="w-full">
            <DollarSign className="w-4 h-4" />
            Send Money
          </Button>
        </div>
      </Card>

      {/* Savings Goals Progress */}
      <Card className="p-4 shadow-card">
        <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-accent" />
          Savings Goals Progress
        </h3>
        
        <div className="space-y-3">
          {savingsProgress.map((item, index) => (
            <div key={index} className="p-3 rounded-lg bg-secondary/30">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-sm text-foreground">{item.goal}</span>
                <span className="text-sm text-muted-foreground">{item.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-success h-2 rounded-full transition-all duration-300"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-muted-foreground">
                ₹{item.amount.toLocaleString()} of ₹{item.target.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-4 shadow-card">
        <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          Recent Activity
        </h3>
        
        <div className="space-y-3">
          {childActivities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                activity.type === 'spend' ? 'bg-red-100 text-red-600' :
                activity.type === 'save' ? 'bg-green-100 text-green-600' :
                'bg-yellow-100 text-yellow-600'
              }`}>
                {activity.type === 'spend' ? '💳' :
                 activity.type === 'save' ? '💰' : '❓'}
              </div>
              
              <div className="flex-1">
                <p className="font-medium text-sm text-foreground">
                  {activity.type === 'spend' ? `Spent ₹${activity.amount}` :
                   activity.type === 'save' ? `Saved ₹${activity.amount}` :
                   `Requesting ₹${activity.amount}`}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.merchant || activity.description} • {activity.time}
                </p>
              </div>
              
              <div className="flex items-center gap-1">
                {activity.status === 'approved' && <CheckCircle className="w-4 h-4 text-green-500" />}
                {activity.status === 'pending' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                {activity.status === 'completed' && <CheckCircle className="w-4 h-4 text-green-500" />}
              </div>
            </div>
          ))}
        </div>
        
        <Button variant="parent" size="sm" className="w-full mt-4">
          View All Activity
        </Button>
      </Card>
    </div>
  );
};