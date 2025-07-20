import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, CheckCircle, X } from "lucide-react";

interface Alert {
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  timestamp: string;
  channel: string;
}

const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'critical',
    title: 'Negative Sentiment Spike',
    description: 'Email support sentiment dropped 25% in the last hour',
    timestamp: '2 min ago',
    channel: 'Email Support'
  },
  {
    id: '2',
    type: 'warning',
    title: 'Frustration Trend Rising',
    description: 'Chat support showing increased confusion keywords',
    timestamp: '15 min ago',
    channel: 'Live Chat'
  },
  {
    id: '3',
    type: 'info',
    title: 'Positive Feedback Increase',
    description: 'Support tickets mentioning "helpful" up 12%',
    timestamp: '1 hour ago',
    channel: 'Support Tickets'
  }
];

export const AlertsPanel = () => {
  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle className="h-4 w-4 text-sentiment-negative" />;
      case 'warning':
        return <Clock className="h-4 w-4 text-sentiment-neutral" />;
      case 'info':
        return <CheckCircle className="h-4 w-4 text-sentiment-positive" />;
    }
  };

  const getAlertBadgeVariant = (type: Alert['type']) => {
    switch (type) {
      case 'critical':
        return 'destructive';
      case 'warning':
        return 'secondary';
      case 'info':
        return 'default';
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Recent Alerts</h3>
        <Badge variant="secondary" className="text-xs">
          {mockAlerts.length} Active
        </Badge>
      </div>
      
      <div className="space-y-4">
        {mockAlerts.map((alert) => (
          <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 border border-border/50">
            <div className="flex-shrink-0 mt-1">
              {getAlertIcon(alert.type)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium text-foreground truncate">
                  {alert.title}
                </h4>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0 hover:bg-destructive/20">
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                {alert.description}
              </p>
              <div className="flex items-center justify-between">
                <Badge variant={getAlertBadgeVariant(alert.type)} className="text-xs">
                  {alert.channel}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {alert.timestamp}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};