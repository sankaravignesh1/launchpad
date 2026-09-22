import tanozenLogo from "@/assets/tanozen-logo.png";
const Index = () => {
  return <div className="min-h-screen bg-background font-inter">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 border-solid border-accent-foreground border-0 bg-popover">
          <img alt="Tanozen - Bus Booking, Made Zen" className="h-10 md:h-12" src="/lovable-uploads/647d4cd6-9b54-4192-b0e3-f613c35fff56.png" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-[#f5f1e6]">
        <div className="container mx-auto max-w-5xl text-center border-popover bg-[#f5f1e6]">
          <div className="mb-8 inline-block px-6 py-2 border rounded-full border-popover-foreground bg-popover-foreground">
            <p className="text-sm font-medium tracking-wide text-popover">​Launching this Pongal!</p>
          </div>
          
          <h1 className="md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight font-serif text-6xl text-black">Tanozen</h1>
          
          <p className="font-playfair lg:text-4xl text-foreground/70 mb-12 italic text-xl bg-popover md:text-xl">
            Bus Booking, Made Zen
          </p>

          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-black">
        <div className="container mx-auto max-w-3xl text-popover">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center text-popover">
            About Us
          </h2>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-justify text-popover">
            <p>
              Tanozen is built to hold many businesses, not one. Bus ticket booking is where we start because we can run it more efficiently, at a lower cost, using technology and practices most of the industry hasn't caught up to yet. We're not chasing hype. We're building what should already exist.
            </p>
            <p>
              This is proof of what can come out of Tamil Nadu. We intend to bring more businesses back here and we're only getting started. We're a small group of young builders with no fixed roles and no patience for slow. Everyone in the team does whatever the problem needs. "That's just how it's done" isn't an answer we accept. Nothing here is impossible, it just hasn't been solved yet.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-[#f5f1e6]">
        <div className="container mx-auto max-w-3xl">
          
          
          <div className="grid gap-12 md:grid-cols-2 md:gap-8">
            <div className="flex items-start gap-4 justify-center">
              
              <div className="text-center">
                <h3 className="text-foreground mb-2 font-extrabold text-center text-2xl">Our Location</h3>
                <p className="text-foreground/70 leading-relaxed text-center text-lg">
                  6/369, Sivanantham Nagar<br />
                  Sivakasi, Tamil Nadu<br />
                  India - 626123
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 justify-center">
              
              <div className="text-center">
                <h3 className="text-foreground mb-2 font-extrabold text-center text-2xl">Contact Details</h3>
                <p className="text-foreground/70 leading-relaxed text-center text-lg">
                  support@tanozen.com<br />
                  +91 9894399116
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