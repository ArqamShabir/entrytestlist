import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestCard from '@/components/TestCard';
import BlogCard from '@/components/BlogCard';
import AdSpace from '@/components/AdSpace';
import { dummyTests, dummyBlogs, adSpaces } from '@/data/dummy-data';
import { Search, TrendingUp, BookOpen, Users } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

const Home = () => {
  const featuredTests = dummyTests.slice(0, 3);
  const recentBlogs = dummyBlogs.slice(0, 2);
  const sidebarAd = adSpaces.find(ad => ad.position === 'sidebar');

  const stats = [
    { label: 'Active Tests', value: '25+', icon: BookOpen },
    { label: 'Success Stories', value: '1000+', icon: TrendingUp },
    { label: 'Students Helped', value: '50K+', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Master Your
                  </span>
                  <br />
                  <span className="text-foreground">Entry Tests in Pakistan</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Complete preparation guide for MDCAT, NAT, GAT, and other Pakistani entrance tests. 
                  Get expert tips, latest updates, and proven strategies to secure your admission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8" asChild>
                    <Link to="/tests">Explore Tests</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                    <Link to="/blog">Read Blog</Link>
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-2">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
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

        {/* Ad Space */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {sidebarAd && <AdSpace adSpace={{...sidebarAd, size: '970x250'}} />}
          </div>
        </section>

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
              </section>

              {/* Search Section */}
              <section className="bg-muted/30 rounded-2xl p-8">
                <div className="text-center max-w-2xl mx-auto">
                  <Search className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Find Your Perfect Test
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Looking for a specific test or preparation guide? Browse our comprehensive collection 
                    of Pakistani entrance tests and find exactly what you need.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/tests">Browse All Tests</Link>
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
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {sidebarAd && <AdSpace adSpace={sidebarAd} />}
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                    <div className="space-y-3">
                      <Link 
                        to="/tests/mdcat-medical-college-admission-test" 
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        MDCAT Preparation Guide
                      </Link>
                      <Link 
                        to="/tests/nat-national-aptitude-test" 
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        NAT Test Pattern
                      </Link>
                      <Link 
                        to="/tests/gat-graduate-assessment-test" 
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        GAT Syllabus
                      </Link>
                      <Link 
                        to="/blog" 
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Preparation Tips
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