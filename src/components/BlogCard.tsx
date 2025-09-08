import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/types/wordpress';
import { Clock, User, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  blog: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ blog, featured = false }: BlogCardProps) => {
  const { title, excerpt, slug, date, acf } = blog;
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border border-border bg-gradient-to-br from-card to-card/95 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="text-xs">
            Article
          </Badge>
          {acf?.reading_time && (
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="w-3 h-3 mr-1" />
              <span>{acf.reading_time} min read</span>
            </div>
          )}
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title.rendered}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
          {excerpt.rendered.replace(/<[^>]*>/g, '')}
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
            <div className="flex items-center">
              <User className="w-3 h-3 mr-1" />
              <span>Admin</span>
            </div>
            <span>{formatDate(date)}</span>
          </div>

          {acf?.related_tests && acf.related_tests.length > 0 && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {acf.related_tests.slice(0, 3).map((test, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {test}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <Button variant="ghost" size="sm" className="w-full justify-between p-0" asChild>
            <Link to={`/blog/${slug}`} className="flex items-center justify-between w-full px-3 py-2">
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;