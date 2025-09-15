import { Users, Calendar, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const QuickStats = () => {
  const stats = [
    {
      title: "Active Patients",
      value: "24",
      change: "+3 today",
      icon: Users,
      color: "bg-gradient-primary",
    },
    {
      title: "Pending Consultations",
      value: "7",
      change: "2 urgent",
      icon: Calendar,
      color: "bg-gradient-secondary",
    },
    {
      title: "Treatment Success Rate",
      value: "94.2%",
      change: "+2.1% this month",
      icon: TrendingUp,
      color: "bg-gradient-accent",
    },
    {
      title: "Average Response Time",
      value: "12min",
      change: "Below target",
      icon: Clock,
      color: "bg-secondary",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index} className="bg-gradient-card border-border shadow-md hover:shadow-lg transition-shadow">
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