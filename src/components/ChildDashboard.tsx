import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Wallet, 
  Target, 
  Trophy, 
  Star, 
  Gift, 
  Zap,
  CreditCard,
  BookOpen
} from "lucide-react";

export const ChildDashboard = () => {
  const savingsGoals = [
    { id: 1, name: "New Gaming Console", target: 15000, current: 8500, emoji: "🎮" },
    { id: 2, name: "School Trip", target: 5000, current: 3200, emoji: "🏔️" },
    { id: 3, name: "Art Supplies", target: 2000, current: 1800, emoji: "🎨" }
  ];

  const recentAchievements = [
    { id: 1, title: "Savings Streak", description: "Saved for 7 days straight!", icon: "🔥" },
    { id: 2, title: "Quiz Master", description: "Completed Money Basics quiz", icon: "🧠" },
    { id: 3, title: "Task Champion", description: "Finished all weekly chores", icon: "✨" }
  ];

  return (
    <div className="space-y-6 p-4 max-w-md mx-auto bg-background min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Hey Aarav! 👋</h1>
          <p className="text-muted-foreground">Let's grow your money!</p>
        </div>
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl animate-pulse-glow">
            🧑‍💻
          </div>
          <Badge className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs px-1">
            Lv.5
          </Badge>
        </div>
      </div>

      {/* Balance Card */}
      <Card className="p-6 bg-gradient-hero text-white shadow-purple">
        <div className="flex items-center gap-2 mb-2">
          <Wallet className="w-5 h-5" />
          <span className="text-sm opacity-90">Your Balance</span>
        </div>
        <div className="text-3xl font-bold mb-4">₹12,470</div>
        <div className="flex gap-3">
          <Button variant="child" size="sm" className="bg-white/20 hover:bg-white/30 border-white/30">
            <CreditCard className="w-4 h-4" />
            Spend
          </Button>
          <Button variant="child" size="sm" className="bg-white/20 hover:bg-white/30 border-white/30">
            <Target className="w-4 h-4" />
            Save More
          </Button>
        </div>
      </Card>

      {/* Savings Goals */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Your Goals
          </h2>
          <Button variant="ghost" size="sm">
            See All
          </Button>
        </div>
        
        <div className="space-y-4">
          {savingsGoals.map((goal) => {
            const progress = (goal.current / goal.target) * 100;
            return (
              <Card key={goal.id} className="p-4 shadow-card hover:shadow-purple transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{goal.emoji}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{goal.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ₹{goal.current.toLocaleString()} of ₹{goal.target.toLocaleString()}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {Math.round(progress)}%
                  </Badge>
                </div>
                <Progress value={progress} className="h-2 mb-2" />
                {progress >= 90 && (
                  <div className="flex items-center gap-1 text-accent text-sm font-medium">
                    <Star className="w-3 h-3" />
                    Almost there! 🎉
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="p-4 shadow-card">
        <h3 className="font-semibold mb-3 text-foreground flex items-center gap-2">
          <Zap className="w-4 h-4 text-accent" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="child" size="sm" className="h-auto p-3 flex-col gap-2">
            <Gift className="w-5 h-5" />
            <span className="text-xs">Earn Rewards</span>
          </Button>
          <Button variant="child" size="sm" className="h-auto p-3 flex-col gap-2">
            <BookOpen className="w-5 h-5" />
            <span className="text-xs">Learn & Quiz</span>
          </Button>
        </div>
      </Card>

      {/* Recent Achievements */}
      <Card className="p-4 shadow-card">
        <h3 className="font-semibold mb-3 text-foreground flex items-center gap-2">
          <Trophy className="w-4 h-4 text-accent" />
          Latest Achievements
        </h3>
        <div className="space-y-2">
          {recentAchievements.map((achievement) => (
            <div key={achievement.id} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
              <span className="text-lg">{achievement.icon}</span>
              <div className="flex-1">
                <p className="font-medium text-sm text-foreground">{achievement.title}</p>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};