import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MessageSquare, Mail, Phone } from "lucide-react";

interface Ticket {
  id: string;
  channel: 'email' | 'chat' | 'phone';
  customer: string;
  subject: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  score: number;
  timestamp: string;
  preview: string;
}

const mockTickets: Ticket[] = [
  {
    id: 'T-001',
    channel: 'email',
    customer: 'Sarah Chen',
    subject: 'Billing issue - urgent resolution needed',
    sentiment: 'negative',
    score: 15,
    timestamp: '2 min ago',
    preview: 'This is completely unacceptable! I have been charged twice for the same service...'
  },
  {
    id: 'T-002',
    channel: 'chat',
    customer: 'Mike Johnson',
    subject: 'Product question about features',
    sentiment: 'neutral',
    score: 65,
    timestamp: '5 min ago',
    preview: 'I need some clarification about the premium features. Can someone help me understand...'
  },
  {
    id: 'T-003',
    channel: 'email',
    customer: 'Lisa Rodriguez',
    subject: 'Thank you for excellent support!',
    sentiment: 'positive',
    score: 92,
    timestamp: '8 min ago',
    preview: 'I wanted to reach out and thank your team for the outstanding support yesterday...'
  },
  {
    id: 'T-004',
    channel: 'phone',
    customer: 'David Park',
    subject: 'Cannot access account - frustrated',
    sentiment: 'negative',
    score: 28,
    timestamp: '12 min ago',
    preview: 'This is my third call about the same issue. Nothing is working and I am getting very frustrated...'
  }
];

export const RealtimeTickets = () => {
  const getChannelIcon = (channel: Ticket['channel']) => {
    switch (channel) {
      case 'email':
        return <Mail className="h-4 w-4" />;
      case 'chat':
        return <MessageSquare className="h-4 w-4" />;
      case 'phone':
        return <Phone className="h-4 w-4" />;
    }
  };

  const getSentimentColor = (sentiment: Ticket['sentiment']) => {
    switch (sentiment) {
      case 'positive':
        return 'text-sentiment-positive';
      case 'neutral':
        return 'text-sentiment-neutral';
      case 'negative':
        return 'text-sentiment-negative';
    }
  };

  const getSentimentBadge = (sentiment: Ticket['sentiment'], score: number) => {
    const baseClasses = "text-xs font-medium";
    switch (sentiment) {
      case 'positive':
        return `${baseClasses} bg-sentiment-positive-bg text-sentiment-positive border-sentiment-positive/20`;
      case 'neutral':
        return `${baseClasses} bg-sentiment-neutral-bg text-sentiment-neutral border-sentiment-neutral/20`;
      case 'negative':
        return `${baseClasses} bg-sentiment-negative-bg text-sentiment-negative border-sentiment-negative/20`;
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Real-time Ticket Analysis</h3>
        <Badge variant="secondary" className="text-xs animate-pulse">
          Live
        </Badge>
      </div>
      
      <div className="space-y-4">
        {mockTickets.map((ticket) => (
          <div key={ticket.id} className="p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/20 transition-colors">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 text-muted-foreground">
                  {getChannelIcon(ticket.channel)}
                  <span className="text-xs font-medium">{ticket.id}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{ticket.customer}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className={getSentimentBadge(ticket.sentiment, ticket.score)}>
                  {ticket.sentiment} {ticket.score}%
                </Badge>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <h4 className="text-sm font-medium text-foreground mb-2">
              {ticket.subject}
            </h4>
            
            <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
              {ticket.preview}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {ticket.timestamp}
              </span>
              <div className={`w-2 h-2 rounded-full ${
                ticket.sentiment === 'positive' ? 'bg-sentiment-positive' :
                ticket.sentiment === 'neutral' ? 'bg-sentiment-neutral' :
                'bg-sentiment-negative'
              } animate-pulse`} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};