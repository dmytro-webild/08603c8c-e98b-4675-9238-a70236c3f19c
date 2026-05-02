"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function ContactPage() {
  return (
    <ThemeProvider 
      defaultButtonVariant="text-stagger" 
      defaultTextAnimation="entrance-slide" 
      borderRadius="rounded" 
      contentWidth="medium" 
      sizing="medium" 
      background="circleGradient" 
      cardStyle="glass-elevated" 
      primaryButtonStyle="gradient" 
      secondaryButtonStyle="glass" 
      headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "/" },
              { name: "Services", id: "/services" },
              { name: "Reviews", id: "/reviews" },
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Rayo Junk"
          />
        </div>
        <div id="contact" data-section="contact">
          <ContactText
            background={{ variant: "sparkles-gradient" }}
            text="Rayo Junk Removal Contact Information"
            buttons={[
                { text: "Call Now", href: "tel:+16614352054" },
                { text: "Location", href: "https://www.google.com/maps/search/Rayo+Junk+Removal" },
                { text: "TikTok", href: "https://www.tiktok.com/@rayojunkremoval" }
            ]}
            useInvertedBackground={false}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia
            videoSrc="https://assets.mixkit.co/videos/preview/mixkit-junk-removal-service-truck-12345-large.mp4"
            videoAriaLabel="Junk removal service truck"
            logoText="Rayo Junk Removal"
            columns={[
              { title: "Links", items: [{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Reviews", href: "/reviews" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}