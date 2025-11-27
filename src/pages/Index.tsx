import { MapPin, Mail } from "lucide-react";
import tanozenLogo from "@/assets/tanozen-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <img 
            src={tanozenLogo} 
            alt="Tanozen - Bus Booking, Made Zen" 
            className="h-10 md:h-12"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-block px-6 py-2 bg-primary/5 border border-primary/10 rounded-full">
            <p className="text-sm font-medium text-foreground tracking-wide">COMING SOON</p>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
            Launching Soon
          </h1>
          
          <p className="font-playfair text-2xl md:text-3xl lg:text-4xl text-foreground/70 mb-12 italic">
            Bus Booking, Made Zen
          </p>

          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
            At Tanozen, we're reshaping bus booking with technology designed to make every journey clear, comfortable, and truly trustworthy.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Get in Touch
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4 justify-center">
              <MapPin className="w-6 h-6 text-foreground mt-1 flex-shrink-0" />
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Our Location</h3>
                <p className="text-foreground/70 leading-relaxed">
                  6/369, Sivanantham Nagar<br />
                  Sivakasi, Tamil Nadu<br />
                  India - 626123
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center">
              <Mail className="w-6 h-6 text-foreground mt-1 flex-shrink-0" />
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
                <p className="text-foreground/70">
                  Be the first to know when we launch
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Tanozen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
