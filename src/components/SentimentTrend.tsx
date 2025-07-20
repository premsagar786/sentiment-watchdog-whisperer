import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const trendData = [
  { time: '00:00', positive: 45, neutral: 35, negative: 20 },
  { time: '04:00', positive: 48, neutral: 32, negative: 20 },
  { time: '08:00', positive: 42, neutral: 38, negative: 20 },
  { time: '12:00', positive: 38, neutral: 35, negative: 27 },
  { time: '16:00', positive: 35, neutral: 40, negative: 25 },
  { time: '20:00', positive: 41, neutral: 34, negative: 25 },
  { time: '24:00', positive: 44, neutral: 36, negative: 20 },
];

export const SentimentTrend = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">24-Hour Sentiment Trends</h3>
        <div className="flex space-x-2">
          <Badge className="bg-sentiment-positive-bg text-sentiment-positive border-sentiment-positive/20">
            Positive
          </Badge>
          <Badge className="bg-sentiment-neutral-bg text-sentiment-neutral border-sentiment-neutral/20">
            Neutral
          </Badge>
          <Badge className="bg-sentiment-negative-bg text-sentiment-negative border-sentiment-negative/20">
            Negative
          </Badge>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="time" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Line 
              type="monotone" 
              dataKey="positive" 
              stroke="hsl(var(--sentiment-positive))"
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--sentiment-positive))', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="neutral" 
              stroke="hsl(var(--sentiment-neutral))"
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--sentiment-neutral))', strokeWidth: 2, r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="negative" 
              stroke="hsl(var(--sentiment-negative))"
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--sentiment-negative))', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};