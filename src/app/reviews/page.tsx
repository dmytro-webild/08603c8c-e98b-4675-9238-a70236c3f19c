"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function ReviewsPage() {
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
        <div id="reviews" data-section="reviews">
          <TestimonialCardFive
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[]}
            title="What Our Clients Say"
            description="Five-star customer satisfaction is the standard at Rayo Junk."
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia
            videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?_wi=2"
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