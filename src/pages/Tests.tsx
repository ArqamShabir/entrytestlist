import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestCard from '@/components/TestCard';
import AdSpace from '@/components/AdSpace';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { dummyTests, adSpaces } from '@/data/dummy-data';
import { Search, Filter } from 'lucide-react';

const Tests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const testTypes = ['all', 'MDCAT', 'NAT', 'GAT', 'ECAT'];
  const difficulties = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredTests = dummyTests.filter(test => {
    const matchesSearch = test.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.excerpt.rendered.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || test.acf?.test_type === selectedType;
    const matchesDifficulty = selectedDifficulty === 'all' || test.acf?.test_difficulty === selectedDifficulty;
    
    return matchesSearch && matchesType && matchesDifficulty;
  });

  const topAd = adSpaces.find(ad => ad.position === 'article-top');
  const sidebarAd = adSpaces.find(ad => ad.position === 'sidebar');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pakistani <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Entry Tests</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive guides for all major Pakistani entrance examinations. Find detailed information, 
            preparation strategies, and important dates for your target test.
          </p>
          
          {topAd && (
            <div className="mb-8">
              <AdSpace adSpace={topAd} />
            </div>
          )}
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Filters and Search */}
            <div className="bg-card rounded-lg border border-border p-6 mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">Filter Tests</h2>
              </div>
              
              <div className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search tests..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Type Filter */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Test Type</label>
                  <div className="flex flex-wrap gap-2">
                    {testTypes.map((type) => (
                      <Badge
                        key={type}
                        variant={selectedType === type ? 'default' : 'outline'}
                        className="cursor-pointer hover:bg-primary/20 transition-colors"
                        onClick={() => setSelectedType(type)}
                      >
                        {type === 'all' ? 'All Tests' : type}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Difficulty Level</label>
                  <div className="flex flex-wrap gap-2">
                    {difficulties.map((difficulty) => (
                      <Badge
                        key={difficulty}
                        variant={selectedDifficulty === difficulty ? 'default' : 'outline'}
                        className="cursor-pointer hover:bg-primary/20 transition-colors"
                        onClick={() => setSelectedDifficulty(difficulty)}
                      >
                        {difficulty === 'all' ? 'All Levels' : difficulty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredTests.length} test{filteredTests.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Tests Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {filteredTests.map((test) => (
                <TestCard key={test.id} test={test} />
              ))}
            </div>

            {filteredTests.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No tests found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or browse all available tests.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedType('all');
                    setSelectedDifficulty('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {sidebarAd && <AdSpace adSpace={sidebarAd} />}
              
              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">Test Categories</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Medical Tests</span>
                    <Badge variant="secondary">1</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Aptitude Tests</span>
                    <Badge variant="secondary">2</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Graduate Tests</span>
                    <Badge variant="secondary">1</Badge>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">Popular This Month</h3>
                <div className="space-y-3">
                  {dummyTests.slice(0, 3).map((test) => (
                    <div key={test.id} className="text-sm">
                      <a 
                        href={`/tests/${test.slug}`}
                        className="text-foreground hover:text-primary transition-colors line-clamp-2"
                      >
                        {test.title.rendered}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tests;