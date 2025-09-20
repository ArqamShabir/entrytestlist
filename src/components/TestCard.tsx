import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TestPost } from '@/types/wordpress';
import { Clock, Calendar, ExternalLink, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestCardProps {
  test: TestPost;
  featured?: boolean;
}

const TestCard = ({ test, featured = false }: TestCardProps) => {
  const { title, excerpt, slug, acf } = test;
  
  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-secondary/20 text-secondary hover:bg-secondary/30';
      case 'Intermediate':
        return 'bg-primary/20 text-primary hover:bg-primary/30';
      case 'Advanced':
        return 'bg-destructive/20 text-destructive hover:bg-destructive/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className={cn(
      "group hover:shadow-lg transition-all duration-300 border border-border bg-gradient-to-br from-card to-card/95",
      featured && "md:col-span-2 lg:col-span-1"
    )}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Badge 
            variant="outline" 
            className={getDifficultyColor(acf?.test_difficulty)}
          >
            {acf?.test_type || 'Test'}
          </Badge>
          {acf?.test_difficulty && (
            <Badge variant="secondary" className="ml-2">
              {acf.test_difficulty}
            </Badge>
          )}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title.rendered}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt.rendered.replace(/<[^>]*>/g, '')}
        </p>

        {/* Test Details */}
        <div className="space-y-2 mb-4">
          {acf?.test_duration && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              <span>Duration: {acf.test_duration}</span>
            </div>
          )}
          {acf?.exam_date && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              <span>Exam: {new Date(acf.exam_date).toLocaleDateString()}</span>
            </div>
          )}
          {acf?.eligibility_criteria && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="w-4 h-4 mr-2 text-primary" />
              <span className="line-clamp-2 whitespace-pre-line">Eligibility: {acf.eligibility_criteria}</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Button variant="default" size="sm" asChild>
            <Link to={`/tests/${slug}`}>
              Learn More
            </Link>
          </Button>
          
          {acf?.official_website && (
            <Button variant="outline" size="sm" asChild>
              <a 
                href={acf.official_website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Official Site</span>
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestCard;
