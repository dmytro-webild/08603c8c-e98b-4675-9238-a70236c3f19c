"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Services", id: "/services" },
              { name: "Reviews", id: "/reviews" },
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Rayo Junk"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitTestimonial
            title="Reclaim Your Space Today with Professional Junk Removal"
            description="Fast. Professional. Fair-Priced. Rayo Junk Removal delivers white-glove junk hauling, demolition, cleanouts, and same-day service with unmatched customer care."
            background={{ variant: "plain" }}
            testimonials={[
              {
                name: "Sarah J.", handle: "@sarahj", testimonial: "The best junk removal experience ever. They were lightning fast and incredibly professional.", rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CdXNcTLm7FO6l8ghB2tiBsptcc/uploaded-1777835411136-3sx8ir2j.png?_wi=1"},
              {
                name: "Michael R.", handle: "@miker", testimonial: "Rayo Junk undercuts every competitor in price while delivering superior luxury-level service.", rating: 5,
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CdXNcTLm7FO6l8ghB2tiBsptcc/uploaded-1777835411136-3sx8ir2j.png?_wi=2"},
            ]}
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CdXNcTLm7FO6l8ghB2tiBsptcc/uploaded-1777835411136-3sx8ir2j.png?_wi=3"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentyEight
            title="Why Choose Us"
            description="We bring expertise and reliability to every job site."
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
                { id: "1", title: "Expert Staff", subtitle: "Trained professionals for efficient removal", category: "Staff", value: "100%" },
                { id: "2", title: "Same Day Service", subtitle: "We arrive when you need us most", category: "Timing", value: "Fast" },
                { id: "3", title: "Eco-Friendly", subtitle: "Responsible disposal and recycling", category: "Green", value: "Top Tier" }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CdXNcTLm7FO6l8ghB2tiBsptcc/uploaded-1777835411136-3sx8ir2j.png?_wi=4"
            logoText="Rayo Junk Removal"
            columns={[
              { title: "Links", items: [{ label: "Services", href: "/services" }, { label: "Reviews", href: "/reviews" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}