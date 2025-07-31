import { useState } from "react";
import { AppShowcase } from "@/components/AppShowcase";
import { ChildDashboard } from "@/components/ChildDashboard";
import { ParentDashboard } from "@/components/ParentDashboard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Smartphone, Users } from "lucide-react";

const Index = () => {
  const [currentView, setCurrentView] = useState<'showcase' | 'child' | 'parent'>('showcase');

  if (currentView === 'child') {
    return (
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentView('showcase')}
            className="bg-white/80 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
        <ChildDashboard />
      </div>
    );
  }

  if (currentView === 'parent') {
    return (
      <div className="relative">
        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentView('showcase')}
            className="bg-white/80 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
        <ParentDashboard />
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Navigation overlay for app selection */}
      <div className="absolute top-4 left-4 right-4 z-10 flex gap-2">
        <Card className="flex-1 p-3 bg-white/90 backdrop-blur-sm">
          <Button
            variant="child"
            size="sm"
            onClick={() => setCurrentView('child')}
            className="w-full"
          >
            <Smartphone className="w-4 h-4" />
            Child App
          </Button>
        </Card>
        <Card className="flex-1 p-3 bg-white/90 backdrop-blur-sm">
          <Button
            variant="parent"
            size="sm"
            onClick={() => setCurrentView('parent')}
            className="w-full"
          >
            <Users className="w-4 h-4" />
            Parent App
          </Button>
        </Card>
      </div>
      
      <AppShowcase />
    </div>
  );
};

export default Index;
