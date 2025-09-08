import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">
              How we use cookies to enhance your experience on EntryTestList
            </p>
          </div>

          <Alert className="mb-8">
            <Cookie className="h-4 w-4" />
            <AlertDescription>
              We use cookies to improve functionality and provide you with a better browsing experience.
            </AlertDescription>
          </Alert>

          <Card>
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">What Are Cookies?</h2>
                <p className="text-muted-foreground">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Settings className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Types of Cookies We Use</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      These cookies are necessary for the website to function properly. They enable basic 
                      functions like page navigation and access to secure areas.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Analytics Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      We use Google Analytics to understand how visitors interact with our website. 
                      This helps us improve our content and user experience.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Advertising Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      These cookies are used to display relevant advertisements through Google AdSense 
                      and measure the effectiveness of our advertising campaigns.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Functional Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      These cookies remember your preferences (like language settings) and provide 
                      enhanced, personalized features.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Eye className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Third-Party Cookies</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  We work with trusted third-party services that may set their own cookies:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Google Analytics:</strong> For website performance analysis</li>
                  <li><strong>Google AdSense:</strong> For displaying relevant advertisements</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing functionality</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Managing Your Cookie Preferences</h2>
                <p className="text-muted-foreground mb-4">
                  You have several options to manage cookies:
                </p>
                
                <div className="space-y-3">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Browser Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Most browsers allow you to control cookies through their settings. You can usually 
                      find these in the 'options' or 'preferences' menu of your browser.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Google Analytics Opt-out</h3>
                    <p className="text-sm text-muted-foreground">
                      You can opt out of Google Analytics by installing the 
                      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> Google Analytics Opt-out Browser Add-on</a>.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">AdSense Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      You can manage your ad preferences through 
                      <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"> Google's Ad Settings</a>.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Impact of Disabling Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  While you can disable cookies, please note that this may affect your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Some website features may not work properly</li>
                  <li>Your preferences won't be remembered between visits</li>
                  <li>You may see less relevant advertisements</li>
                  <li>We won't be able to improve our service based on usage analytics</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Cookie Security</h2>
                </div>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your information. Cookies used 
                  on our site do not contain personally identifiable information and are encrypted 
                  where necessary to ensure your privacy and security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Updates to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We encourage you to review 
                  this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <p className="text-muted-foreground">
                  <strong>Email:</strong> cookies@entrytestlist.com<br />
                  <strong>Subject:</strong> Cookie Policy Inquiry
                </p>
              </section>

              <div className="bg-primary/5 rounded-lg p-6 mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  By continuing to use our website, you consent to the use of cookies as described in this policy.
                </p>
                <Button size="sm">
                  I Accept Cookies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;