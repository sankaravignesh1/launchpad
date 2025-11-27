import tanozenLogo from "@/assets/tanozen-logo.png";
const Index = () => {
  return <div className="min-h-screen bg-background font-inter">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 border-solid border-2 border-accent-foreground bg-popover">
          <img alt="Tanozen - Bus Booking, Made Zen" className="h-10 md:h-12" src="/lovable-uploads/647d4cd6-9b54-4192-b0e3-f613c35fff56.png" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#f5f1e6]">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-block px-6 py-2 border rounded-full border-popover-foreground bg-popover-foreground">
            <p className="text-sm font-medium tracking-wide text-popover">​Launching Soon! </p>
          </div>
          
          <h1 className="md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight font-serif text-6xl text-black">Tanozen</h1>
          
          <p className="font-playfair md:text-3xl lg:text-4xl text-foreground/70 mb-12 italic text-xl">
            Bus Booking, Made Zen
          </p>

          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-3xl text-popover">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center text-[#f5f1e6]">
            About Us
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-center text-[#f5f1e6]">
            At Tanozen, we're reshaping bus booking with technology designed to make every journey clear, comfortable, and truly trustworthy.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-[#f5f1e6]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center text-black">
            Get in Touch
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4 justify-center">
              
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
      <footer className="py-8 px-6 border-t border-border bg-[sidebar-accent-foreground] bg-black">
        <div className="container mx-auto text-center">
          <p className="text-sm text-[#f5f1e6]">
            © 2025 Tanozen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;