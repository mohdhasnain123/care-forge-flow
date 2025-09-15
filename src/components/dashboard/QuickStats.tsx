import { Calendar, FileText, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const QuickStats = () => {
  const stats = [
    {
      title: "Upcoming Appointments",
      value: "3",
      change: "Next: Tomorrow 2PM",
      icon: Calendar,
      color: "bg-gradient-primary",
    },
    {
      title: "Active Treatments",
      value: "2",
      change: "In progress",
      icon: FileText,
      color: "bg-gradient-secondary",
    },
    {
      title: "Shared Records",
      value: "5",
      change: "Currently active",
      icon: Users,
      color: "bg-gradient-accent",
    },
    {
      title: "Health Score",
      value: "87%",
      change: "+5% this month",
      icon: TrendingUp,
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