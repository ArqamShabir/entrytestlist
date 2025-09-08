import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Card>
            <CardContent className="p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  EntryTestList collects information to provide better services to our users. We collect information in the following ways:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Information you give us (contact forms, newsletter subscriptions)</li>
                  <li>Information we get from your use of our services (analytics, cookies)</li>
                  <li>Device information and log data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide and improve our services</li>
                  <li>Send you updates about test information and preparation tips</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Protect against fraud and abuse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze site traffic and usage patterns</li>
                  <li>Deliver targeted advertisements through Google AdSense</li>
                  <li>Provide social media features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground mb-4">
                  We work with third-party services that may collect information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Google AdSense:</strong> For displaying relevant advertisements</li>
                  <li><strong>WordPress:</strong> For content management (if applicable)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Disable cookies in your browser settings</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br /><br />
                  <strong>Email:</strong> privacy@entrytestlist.com<br />
                  <strong>Address:</strong> EntryTestList Privacy Team, Pakistan
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;