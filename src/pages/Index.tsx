import { SentimentCard } from "@/components/SentimentCard";
import { AlertsPanel } from "@/components/AlertsPanel";
import { SentimentTrend } from "@/components/SentimentTrend";
import { RealtimeTickets } from "@/components/RealtimeTickets";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Settings, RefreshCw, AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold text-foreground">Sentiment Watchdog</h1>
              </div>
              <Badge className="bg-sentiment-positive-bg text-sentiment-positive border-sentiment-positive/20">
                Live Monitoring
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Sentiment Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SentimentCard
            title="Overall Sentiment"
            value={42}
            trend={-8}
            sentiment="negative"
            subtitle="Last 24 hours"
          />
          <SentimentCard
            title="Positive Interactions"
            value={35}
            trend={12}
            sentiment="positive"
            subtitle="↑ from yesterday"
          />
          <SentimentCard
            title="Critical Issues"
            value={23}
            trend={15}
            sentiment="negative"
            subtitle="Needs attention"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Trend Chart - Takes 2 columns */}
          <div className="lg:col-span-2">
            <SentimentTrend />
          </div>
          
          {/* Alerts Panel - Takes 1 column */}
          <div className="lg:col-span-1">
            <AlertsPanel />
          </div>
        </div>

        {/* Real-time Tickets */}
        <div className="grid grid-cols-1 gap-6">
          <RealtimeTickets />
        </div>

        {/* Quick Stats Footer */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-sentiment-positive">1,247</div>
            <div className="text-xs text-muted-foreground">Messages Analyzed</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-primary">98.5%</div>
            <div className="text-xs text-muted-foreground">Accuracy Rate</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-sentiment-neutral">156</div>
            <div className="text-xs text-muted-foreground">Active Agents</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-sentiment-negative">3</div>
            <div className="text-xs text-muted-foreground">Critical Alerts</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
