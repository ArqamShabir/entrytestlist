import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, Shield, ExternalLink } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Disclaimer</h1>
            <p className="text-muted-foreground">
              Important information about EntryTestList services and content
            </p>
          </div>

          <Alert className="mb-8">
            <Info className="h-4 w-4" />
            <AlertDescription>
              Please read this disclaimer carefully before using our website and services.
            </AlertDescription>
          </Alert>

          <Card>
            <CardContent className="p-8 space-y-6">
              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">General Information</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  EntryTestList is an independent educational resource platform that provides information 
                  about Pakistani entrance tests. We are not affiliated with, endorsed by, or connected 
                  to any official testing organizations, universities, or government institutions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Content Accuracy</h2>
                <p className="text-muted-foreground mb-4">
                  While we strive to provide accurate and up-to-date information about entrance tests, 
                  preparation guidelines, and educational content:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Information may become outdated due to changes in test patterns or policies</li>
                  <li>We recommend verifying all critical information with official sources</li>
                  <li>Test dates, fees, and requirements should be confirmed on official websites</li>
                  <li>We are not responsible for any errors or omissions in the content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Educational Purpose Only</h2>
                <p className="text-muted-foreground">
                  All content on EntryTestList is provided for educational and informational purposes only. 
                  Our preparation tips, study guides, and strategies are general recommendations and may not 
                  be suitable for every individual's learning style or circumstances.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">No Guarantee of Results</h2>
                <p className="text-muted-foreground mb-4">
                  EntryTestList does not guarantee:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Success in any entrance examination</li>
                  <li>Admission to any educational institution</li>
                  <li>Specific score improvements or achievements</li>
                  <li>Employment or career advancement opportunities</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Third-Party Links</h2>
                </div>
                <p className="text-muted-foreground">
                  Our website contains links to external websites and resources. We do not control or 
                  endorse the content of these external sites and are not responsible for their accuracy, 
                  policies, or practices. Visit external links at your own discretion.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  All test names, logos, and trademarks mentioned on this website belong to their 
                  respective owners. We use these names for informational purposes only and do not 
                  claim ownership or affiliation with these organizations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  EntryTestList and its operators shall not be liable for any direct, indirect, incidental, 
                  consequential, or punitive damages arising from the use of this website or reliance on 
                  any information provided herein.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Updates and Changes</h2>
                <p className="text-muted-foreground">
                  We reserve the right to update, modify, or remove any content without prior notice. 
                  Users are encouraged to check for updates regularly and verify information with 
                  official sources before making important decisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact for Corrections</h2>
                <p className="text-muted-foreground">
                  If you notice any inaccurate information or have concerns about our content, 
                  please contact us at info@entrytestlist.com. We appreciate feedback and strive 
                  to maintain the highest standards of accuracy.
                </p>
              </section>

              <div className="bg-primary/5 rounded-lg p-6 mt-8">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Remember:</strong> Always verify important information with official sources 
                  before making decisions about your education or career.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;