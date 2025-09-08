import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSpace from '@/components/AdSpace';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { dummyTests, adSpaces } from '@/data/dummy-data';
import { 
  Clock, Calendar, Users, ExternalLink, 
  DollarSign, Award, BookOpen, CheckCircle,
  ArrowLeft, Share2
} from 'lucide-react';

const TestDetail = () => {
  const { slug } = useParams();
  const test = dummyTests.find(t => t.slug === slug);

  if (!test) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Test Not Found</h1>
          <Button asChild>
            <Link to="/tests">Back to Tests</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const { title, content, acf } = test;
  const topAd = adSpaces.find(ad => ad.position === 'article-top');
  const sidebarAd = adSpaces.find(ad => ad.position === 'sidebar');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/tests" className="hover:text-primary">Tests</Link>
          <span>/</span>
          <span className="text-foreground">{acf?.test_type}</span>
        </nav>

        {/* Back Button */}
        <Button variant="outline" size="sm" className="mb-6" asChild>
          <Link to="/tests">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tests
          </Link>
        </Button>

        {topAd && (
          <div className="mb-8">
            <AdSpace adSpace={topAd} />
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Badge variant="default" className="text-sm">
                    {acf?.test_type}
                  </Badge>
                  {acf?.test_difficulty && (
                    <Badge variant="outline">
                      {acf.test_difficulty}
                    </Badge>
                  )}
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {title.rendered}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                {acf?.test_duration && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>Duration: {acf.test_duration}</span>
                  </div>
                )}
                {acf?.exam_date && (
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span>Exam: {new Date(acf.exam_date).toLocaleDateString()}</span>
                  </div>
                )}
                {acf?.fee_structure && (
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-primary" />
                    <span>Fee: {acf.fee_structure}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">Eligibility</h3>
                  <p className="text-sm text-muted-foreground">{acf?.eligibility_criteria}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">Passing Criteria</h3>
                  <p className="text-sm text-muted-foreground">{acf?.passing_criteria}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-foreground mb-1">Application Deadline</h3>
                  <p className="text-sm text-muted-foreground">
                    {acf?.application_deadline ? new Date(acf.application_deadline).toLocaleDateString() : 'Check official site'}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <div 
                  className="prose prose-gray max-w-none text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: content.rendered }}
                />
              </section>

              {/* Syllabus */}
              {acf?.syllabus_outline && (
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-primary" />
                    Syllabus Outline
                  </h2>
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground">{acf.syllabus_outline}</p>
                    </CardContent>
                  </Card>
                </section>
              )}

              {/* Preparation Tips */}
              {acf?.preparation_tips && (
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2 text-primary" />
                    Preparation Tips
                  </h2>
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground">{acf.preparation_tips}</p>
                    </CardContent>
                  </Card>
                </section>
              )}

              {/* Important Dates */}
              {acf?.important_dates && (
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Important Dates</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {acf.important_dates.map((dateItem, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                            <span className="font-medium text-foreground">{dateItem.event}</span>
                            <span className="text-muted-foreground">{dateItem.date}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </section>
              )}

              {/* Official Website CTA */}
              {acf?.official_website && (
                <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">Ready to Apply?</h3>
                  <p className="text-muted-foreground mb-4">
                    Visit the official website for registration and detailed information.
                  </p>
                  <Button size="lg" asChild>
                    <a 
                      href={acf.official_website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Official Website</span>
                    </a>
                  </Button>
                </section>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {sidebarAd && <AdSpace adSpace={sidebarAd} />}
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Related Tests</h3>
                  <div className="space-y-3">
                    {dummyTests
                      .filter(t => t.id !== test.id)
                      .slice(0, 3)
                      .map((relatedTest) => (
                        <Link
                          key={relatedTest.id}
                          to={`/tests/${relatedTest.slug}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {relatedTest.title.rendered}
                        </Link>
                      ))}
                  </div>
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

export default TestDetail;