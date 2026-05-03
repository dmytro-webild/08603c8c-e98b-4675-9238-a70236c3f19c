"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function ServicesPage() {
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
        <div id="services" data-section="services">
          <FeatureCardEight
            textboxLayout="split"
            useInvertedBackground={true}
            features={[
              { title: "Whole House Cleanouts", description: "Complete removal of unwanted items for estate sales or moves.", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-working-service_23-2150171264.jpg?_wi=2" },
              { title: "Hot Tub & Spa Removal", description: "Specialized equipment for safe, efficient removal of large spas.", imageSrc: "http://img.b2bpic.net/free-photo/cute-cat-sitting-rubbish-bin-outdoors_23-2148666769.jpg?_wi=2" },
            ]}
            title="Our Premium Services"
            description="We handle the heavy lifting so you don't have to."
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia
            videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?_wi=1"
            videoAriaLabel="Promotional video for Rayo Junk Removal"
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