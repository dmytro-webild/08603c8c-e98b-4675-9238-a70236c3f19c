"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { ShieldCheck } from "lucide-react";

export default function AboutPage() {
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
              { name: "Services", id: "/services" },
              { name: "Reviews", id: "/reviews" },
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Rayo Junk"
          />
        </div>
        <div id="about" data-section="about">
          <InlineImageSplitTextAbout
            heading={[
              { type: 'text', content: "Our Story" },
              { type: 'image', src: "https://img.b2bpic.net/free-photo/medium-shot-delivery-people-working_23-2149103417.jpg?_wi=2", alt: "Our team at work" }
            ]}
            useInvertedBackground={false}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia
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