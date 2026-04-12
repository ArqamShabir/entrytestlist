import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestCard from '@/components/TestCard';
import BlogCard from '@/components/BlogCard';
import { WordPressService } from '@/services/wordpress';
import { TestPost as TestPostType, BlogPost as BlogPostType } from '@/types/wordpress';
import { Search, TrendingUp, BookOpen, Users } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

import { SEO } from '@/components/SEO';

const Home = () => {
  const [featuredTests, setFeaturedTests] = useState<TestPostType[]>([]);
  const [recentBlogs, setRecentBlogs] = useState<BlogPostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const [tests, blogs] = await Promise.all([
          WordPressService.getTests({ per_page: 3 }),
          WordPressService.getBlogPosts({ per_page: 2 })
        ]);
        if (mounted) {
          setFeaturedTests(tests);
          setRecentBlogs(blogs);
        }
      } catch (e: any) {
        if (mounted) setError(e?.message || 'Failed to load content');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const stats = [
    { label: 'Active Tests', value: '25+', icon: BookOpen },
    { label: 'Success Stories', value: '1000+', icon: TrendingUp },
    { label: 'Students Helped', value: '50K+', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Entry Test List | MDCAT, ECAT, NTS, GAT Preparation"
        description="Comprehensive preparation guide for MDCAT, NAT, ECAT, GAT, and other Pakistani entrance tests. Find past papers, test syllabus, and expert tips to secure your admission."
        canonical="https://entrytestlist.com"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight font-heading">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Master Your Entry Tests
                  </span>
                  <br />
                  <span className="text-foreground">in Pakistan</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Complete preparation guide for MDCAT, NAT, GAT, and other Pakistani entrance tests. 
                  Expert tips and proven strategies for your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8" asChild>
                    <Link to="/tests">Explore Tests</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                    <Link to="/blog">Read Blog</Link>
                  </Button>
                </div>
                
                {/* Stats - Simplified */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="text-xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Students preparing for Pakistani entrance tests"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Ads removed: using live WordPress data only */}

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-16">
              
              {/* Featured Tests */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-foreground">Popular Tests</h2>
                  <Button variant="outline" asChild>
                    <Link to="/tests">View All Tests</Link>
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredTests.map((test) => (
                    <TestCard key={test.id} test={test} />
                  ))}
                </div>
                {loading && (
                  <div className="text-center py-6 text-muted-foreground">Loading tests...</div>
                )}
              </section>

              {/* Search Section - Cleaner Design */}
              <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                <div className="text-center max-w-xl mx-auto">
                  <Search className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h2 className="text-xl font-bold text-foreground mb-3">Find Your Test</h2>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Browse our comprehensive collection of Pakistani entrance tests.
                  </p>
                  <Button asChild>
                    <Link to="/tests">Browse Tests</Link>
                  </Button>
                </div>
              </section>

              {/* Recent Blog Posts */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-foreground">Latest Articles</h2>
                  <Button variant="outline" asChild>
                    <Link to="/blog">View All Posts</Link>
                  </Button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {recentBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
                {loading && (
                  <div className="text-center py-6 text-muted-foreground">Loading articles...</div>
                )}
              </section>
            </div>

            {/* Sidebar */}
              <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Ads removed */}
                
                <Card className="border-primary/20">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-3">Quick Links</h3>
                    <div className="space-y-2">
                      <Link 
                        to="/tests/mdcat-medical-college-admission-test" 
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        MDCAT Guide
                      </Link>
                      <Link 
                        to="/tests/nat-national-aptitude-test" 
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        NAT Pattern
                      </Link>
                      <Link 
                        to="/tests/gat-graduate-assessment-test" 
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        GAT Syllabus
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
