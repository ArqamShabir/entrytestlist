import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FileText, Users, Shield } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </div>

          <Alert className="mb-8">
            <FileText className="h-4 w-4" />
            <AlertDescription>
              By using EntryTestList, you agree to these terms and conditions.
            </AlertDescription>
          </Alert>

          <Card>
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using EntryTestList website and services, you accept and agree to be 
                  bound by the terms and provision of this agreement. If you do not agree to abide by 
                  the above, please do not use this service.
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Users className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">2. User Responsibilities</h2>
                </div>
                <p className="text-muted-foreground mb-4">As a user of our website, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Use the website only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not use our content for commercial purposes without permission</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not submit false or misleading information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Content and Services</h2>
                <p className="text-muted-foreground mb-4">
                  EntryTestList provides educational content and information about Pakistani entrance tests. 
                  Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Test information and preparation guides</li>
                  <li>Study tips and educational resources</li>
                  <li>Blog articles and updates</li>
                  <li>Contact and support services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  The content on EntryTestList, including text, graphics, logos, and software, is owned 
                  by EntryTestList or its content suppliers and is protected by copyright and other 
                  intellectual property laws. You may not reproduce, distribute, or create derivative 
                  works without express written permission.
                </p>
              </section>

              <section>
                <div className="flex items-center space-x-2 mb-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">5. Privacy Policy</h2>
                </div>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs 
                  your use of the website, to understand our practices regarding the collection and use 
                  of your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Disclaimers and Limitations</h2>
                <p className="text-muted-foreground mb-4">
                  EntryTestList is provided "as is" without any representations or warranties:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>We do not guarantee the accuracy or completeness of information</li>
                  <li>We are not responsible for third-party content or external links</li>
                  <li>We do not guarantee uninterrupted or error-free service</li>
                  <li>We are not liable for any damages resulting from use of our service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. User-Generated Content</h2>
                <p className="text-muted-foreground">
                  If you submit comments, feedback, or other content to our website, you grant us a 
                  non-exclusive, royalty-free, perpetual license to use, modify, and distribute such 
                  content. You are responsible for ensuring that your content does not violate any 
                  third-party rights or applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Termination</h2>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your access to our website at our sole 
                  discretion, without notice, for any reason including but not limited to violation of 
                  these terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms shall be governed by and construed in accordance with the laws of Pakistan. 
                  Any disputes arising from these terms shall be subject to the exclusive jurisdiction 
                  of Pakistani courts.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting on the website. Your continued use of the service after 
                  changes are posted constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact Information</h2>
                <p className="text-muted-foreground">
                  If you have any questions about these Terms of Service, please contact us:
                  <br /><br />
                  <strong>Email:</strong> terms@entrytestlist.com<br />
                  <strong>Website:</strong> www.entrytestlist.com
                </p>
              </section>

              <div className="bg-primary/5 rounded-lg p-6 mt-8">
                <p className="text-sm text-muted-foreground text-center">
                  By continuing to use EntryTestList, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms of Service.
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

export default TermsOfService;