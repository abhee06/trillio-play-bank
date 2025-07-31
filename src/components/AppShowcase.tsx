import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Shield, 
  Target, 
  Users, 
  Star,
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";

export const AppShowcase = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Secure",
      description: "Bank-grade security with parental controls"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Based Saving", 
      description: "Gamified savings to achieve dreams"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family-Friendly",
      description: "Parent oversight with teen independence"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Transfers",
      description: "UPI-powered instant transactions"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Families" },
    { number: "₹2Cr+", label: "Saved by Teens" },
    { number: "4.9★", label: "App Store Rating" },
    { number: "100%", label: "Security Score" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-md mx-auto p-4 space-y-8">
        {/* Hero Section */}
        <div className="text-center pt-12 pb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm font-medium">India's #1 Teen Bank</span>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            Banking for<br />
            <span className="text-accent">Gen Alpha</span>
          </h1>
          
          <p className="text-white/80 text-lg mb-8">
            Empowering India's teens with smart, safe digital banking. Save, spend, and learn with Trillio.
          </p>
          
          <div className="space-y-4">
            <Button variant="hero" size="xl" className="w-full bg-white text-primary hover:bg-white/90">
              <Smartphone className="w-5 h-5" />
              Download Trillio
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Free to use
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                RBI Approved
              </div>
            </div>
          </div>
        </div>

        {/* Mock Phone Display */}
        <div className="relative">
          <div className="mx-auto w-64 h-96 bg-white rounded-3xl shadow-2xl p-6 border-8 border-gray-800">
            <div className="w-full h-full bg-gradient-lavender rounded-2xl p-4 relative overflow-hidden">
              {/* Mock App Interface */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full mx-auto mb-2 flex items-center justify-center text-white text-xl">
                  💰
                </div>
                <h3 className="font-bold text-foreground">₹12,470</h3>
                <p className="text-sm text-muted-foreground">Your Balance</p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white/80 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span>🎮</span>
                    <span className="font-medium text-sm">Gaming Console</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-success h-2 rounded-full w-3/5"></div>
                  </div>
                </div>
                
                <div className="bg-white/80 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span>🏔️</span>
                    <span className="font-medium text-sm">School Trip</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-gradient-success h-2 rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-accent/20 rounded-lg p-2 text-center">
                  <span className="text-xs text-foreground">🏆 7-day saving streak!</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 bg-accent rounded-full p-3 animate-float shadow-mint">
            <Star className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary rounded-full p-3 animate-float shadow-purple" style={{ animationDelay: '1s' }}>
            <Shield className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-4 bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <div className="text-accent mb-2 flex justify-center">{feature.icon}</div>
              <h3 className="font-semibold text-white text-sm mb-1">{feature.title}</h3>
              <p className="text-white/70 text-xs">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* App Mode Selector */}
        <Card className="p-4 bg-white/10 backdrop-blur-sm border-white/20">
          <h3 className="font-semibold text-white text-center mb-4">Experience Both Apps</h3>
          <div className="space-y-3">
            <Button variant="child" size="lg" className="w-full bg-gradient-primary text-white">
              👦 View Child App
            </Button>
            <Button variant="parent" size="lg" className="w-full bg-white/20 text-white border-white/30">
              👨‍👩‍👧‍👦 View Parent App  
            </Button>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center text-white/60 text-sm pb-8">
          <p>Made with ❤️ for India's future financers</p>
          <p className="mt-2">RBI Licensed • ISO 27001 Certified</p>
        </div>
      </div>
    </div>
  );
};