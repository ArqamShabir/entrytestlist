import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, User, ArrowLeft, Share2, 
  Calendar, Tag, BookOpen
} from 'lucide-react';
import { WordPressService } from '@/services/wordpress';
import { BlogPost as BlogPostType } from '@/types/wordpress';
import { SEO } from '@/components/SEO';
import AdSpace from '@/components/AdSpace';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogPostType | null>(null);
  const [related, setRelated] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const post = await WordPressService.getPostBySlug(slug || '');
        if (mounted) setBlog(post as BlogPostType | null);
        const recent = await WordPressService.getBlogPosts({ per_page: 3 });
        if (mounted) setRelated(recent.filter(p => p.slug !== slug));
      } catch (e: any) {
        if (mounted) setError(e?.message || 'Failed to load article');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center text-muted-foreground">
          Loading article...
        </div>
        <Footer />
      </div>
    );
  }

  if (!loading && !blog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const { title, content, date, acf } = blog!;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${title.rendered} | Entry Test List`}
        description={acf?.meta_description || excerpt.rendered.replace(/<[^>]*>/g, '')}
        canonical={`https://entrytestlist.com/blog/${slug}`}
      />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <span>/</span>
          <span className="text-foreground">Article</span>
        </nav>

        {/* Back Button */}
        <Button variant="outline" size="sm" className="mb-6" asChild>
          <Link to="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <AdSpace adSpace={{ id: 'header-leaderboard', position: 'header', size: '728x90', isActive: true }} className="mb-8" />

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="space-y-6">
              {/* Header */}
              <header className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="default">Article</Badge>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {title.rendered}
                </h1>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="w-4 h-4 mr-2 text-primary" />
                    <span>Admin</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span>{new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  {acf?.reading_time && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span>{acf.reading_time} min read</span>
                    </div>
                  )}
                </div>

                {/* Featured Snippet */}
                {acf?.featured_snippet && (
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border-l-4 border-primary">
                    <p className="text-lg text-foreground font-medium leading-relaxed">
                      {acf.featured_snippet}
                    </p>
                  </div>
                )}
              </header>

              {/* Featured Image Placeholder */}
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BookOpen className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Featured Image</p>
                </div>
              </div>

              {/* Article Content */}
              <div className="space-y-6">
                <AdSpace adSpace={{ id: 'in-article', position: 'article-top', size: 'responsive', isActive: true }} className="my-6" />
                <div 
                  className="wp-content text-muted-foreground leading-relaxed prose prose-lg dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: content.rendered }}
                />
                <AdSpace adSpace={{ id: 'in-article', position: 'article-bottom', size: 'responsive', isActive: true }} className="my-6" />
              </div>

              {/* Related Tests */}
              {acf?.related_tests && acf.related_tests.length > 0 && (
                <div className="bg-muted/30 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-primary" />
                    Related Tests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {acf.related_tests.map((test, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary/10">
                        {test}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <AdSpace adSpace={{ id: 'sidebar-rectangle', position: 'sidebar', size: '300x250', isActive: true }} className="mb-6" />
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((relatedBlog) => (
                      <div key={relatedBlog.id}>
                        <Link
                          to={`/blog/${relatedBlog.slug}`}
                          className="text-sm text-foreground hover:text-primary transition-colors line-clamp-2 block mb-2"
                        >
                          {relatedBlog.title.rendered}
                        </Link>
                        <p className="text-xs text-muted-foreground">
                          {new Date(relatedBlog.date).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get weekly test preparation tips and updates.
                  </p>
                  <Button size="sm" className="w-full">Subscribe</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
