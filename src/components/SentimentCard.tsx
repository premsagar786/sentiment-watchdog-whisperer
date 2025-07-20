import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface SentimentCardProps {
  title: string;
  value: number;
  trend: number;
  sentiment: 'positive' | 'neutral' | 'negative';
  subtitle?: string;
}

export const SentimentCard = ({ title, value, trend, sentiment, subtitle }: SentimentCardProps) => {
  const getTrendIcon = () => {
    if (trend > 0) return <TrendingUp className="h-4 w-4" />;
    if (trend < 0) return <TrendingDown className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  const getTrendColor = () => {
    if (sentiment === 'positive' && trend > 0) return 'text-sentiment-positive';
    if (sentiment === 'negative' && trend > 0) return 'text-sentiment-negative';
    if (trend > 0) return 'text-sentiment-positive';
    if (trend < 0) return 'text-sentiment-negative';
    return 'text-muted-foreground';
  };

  const getSentimentGradient = () => {
    switch (sentiment) {
      case 'positive':
        return 'bg-gradient-to-br from-sentiment-positive-bg to-sentiment-positive-bg/50';
      case 'neutral':
        return 'bg-gradient-to-br from-sentiment-neutral-bg to-sentiment-neutral-bg/50';
      case 'negative':
        return 'bg-gradient-to-br from-sentiment-negative-bg to-sentiment-negative-bg/50';
      default:
        return '';
    }
  };

  const getBorderColor = () => {
    switch (sentiment) {
      case 'positive':
        return 'border-sentiment-positive/20';
      case 'neutral':
        return 'border-sentiment-neutral/20';
      case 'negative':
        return 'border-sentiment-negative/20';
      default:
        return 'border-border';
    }
  };

  return (
    <Card className={`p-6 transition-all duration-300 hover:scale-105 ${getSentimentGradient()} ${getBorderColor()}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline space-x-2">
            <h3 className="text-2xl font-bold text-foreground">{value}%</h3>
            <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
              {getTrendIcon()}
              <span className="text-sm font-medium">{Math.abs(trend)}%</span>
            </div>
          </div>
          {subtitle && (
            <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
          )}
        </div>
      </div>
    </Card>
  );
};