import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, TrendingUp, Clock } from 'lucide-react';
import { WordPressService } from '@/services/wordpress';
import { BlogPost as BlogPostType } from '@/types/wordpress';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [blogs, setBlogs] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const posts = await WordPressService.getBlogPosts({ per_page: 20 });
        if (mounted) setBlogs(posts);
      } catch (e: any) {
        if (mounted) setError(e?.message || 'Failed to load blog posts');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const filteredBlogs = blogs.filter(blog => 
    blog.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.rendered.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ['Preparation Tips', 'Test Updates', 'Success Stories', 'Study Guides'];
  const recentPosts = blogs.slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Blog</span> & Articles
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Expert insights, preparation tips, and the latest updates on Pakistani entrance tests. 
            Stay informed with our comprehensive guides and success stories.
          </p>
          
          {/* Ads removed: using live WordPress data only */}
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Featured Article */}
            {filteredBlogs.length > 0 && !loading && (
              <div className="mb-12">
                <div className="flex items-center space-x-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">Featured Article</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 bg-card rounded-lg border border-border p-6">
                  <div className="space-y-4">
                    <Badge variant="default">Featured</Badge>
                    <h3 className="text-2xl font-bold text-foreground leading-tight">
                      {filteredBlogs[0].title.rendered}
                    </h3>
                    <p className="text-muted-foreground">
                      {filteredBlogs[0].excerpt.rendered.replace(/<[^>]*>/g, '')}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{filteredBlogs[0].acf?.reading_time || 5} min read</span>
                      </div>
                      <span>{new Date(filteredBlogs[0].date).toLocaleDateString()}</span>
                    </div>
                    <Button asChild>
                      <a href={`/blog/${filteredBlogs[0].slug}`}>Read Full Article</a>
                    </Button>
                  </div>
                  <div className="bg-muted rounded-lg flex items-center justify-center h-64">
                    <span className="text-muted-foreground">Featured Image</span>
                  </div>
                </div>
              </div>
            )}

            {/* Results */}
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {filteredBlogs.slice(1).map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {loading && (
              <div className="text-center py-12 text-muted-foreground">Loading articles...</div>
            )}

            {error && (
              <div className="text-center py-6 text-destructive">{error}</div>
            )}

            {filteredBlogs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-4">
                  Try searching with different keywords or browse our latest articles.
                </p>
                <Button onClick={() => setSearchTerm('')}>
                  Show All Articles
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Categories */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="block w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">Recent Articles</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id}>
                      <a 
                        href={`/blog/${post.slug}`}
                        className="text-sm text-foreground hover:text-primary transition-colors line-clamp-2 block mb-1"
                      >
                        {post.title.rendered}
                      </a>
                      <p className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest test updates and preparation tips delivered to your inbox.
                </p>
                <Input placeholder="Enter your email" className="mb-3" />
                <Button size="sm" className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
