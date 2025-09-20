import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question about test preparation or need assistance? We're here to help you succeed 
              in your educational journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-sm text-muted-foreground">info@entrytestlist.com</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Send us an email and we'll respond within 24 hours.
                    </p>
                  </CardContent>
                </Card>


                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Address</h3>
                        <p className="text-sm text-muted-foreground">Karachi, Pakistan</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Serving students across Pakistan with quality test preparation resources.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2">Quick Help</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Looking for specific test information? Check our FAQ section or browse our test guides.
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                        <a href="/tests">Browse Tests</a>
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                        <a href="/blog">Read Articles</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-4">
                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="flex items-center space-x-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        * Required fields
                      </p>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> We typically respond to inquiries within 24 hours during business days. 
                      For urgent matters, please reach out via email and include "URGENT" in the subject.
                    </div>
                  </form>
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

export default Contact;
