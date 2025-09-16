import { Calendar, FileText, Users, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const QuickStats = () => {
  const stats = [
    {
      title: "Upcoming Appointments",
      value: "24",
      change: "Next: 9:00 AM",
      icon: Calendar,
      color: "bg-gradient-primary",
    },
    {
      title: "Active Treatments",
      value: "18",
      change: "3 critical, 15 stable",
      icon: FileText,
      color: "bg-gradient-secondary",
    },
    {
      title: "Critical Alerts",
      value: "3",
      change: "Requires immediate attention",
      icon: AlertTriangle,
      color: "bg-destructive",
      isClickable: true
    },
    {
      title: "Bed Utilization",
      value: "89%",
      change: "234/263 beds occupied",
      icon: Users,
      color: "bg-gradient-accent",
    },
  ];

  const handleCardClick = (stat: any) => {
    if (stat.isClickable) {
      // This will trigger showing the critical patients list
      const event = new CustomEvent('showCriticalPatients');
      window.dispatchEvent(event);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card 
            key={index} 
            className={`bg-gradient-card border-border shadow-md hover:shadow-lg transition-shadow ${stat.isClickable ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
            onClick={() => handleCardClick(stat)}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {stat.change}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg text-white shadow-sm`}>
                  <IconComponent className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default QuickStats;