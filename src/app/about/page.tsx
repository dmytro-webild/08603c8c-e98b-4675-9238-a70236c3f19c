"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
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
              { name: "Home", id: "/" },
              { name: "About", id: "/about" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Rayo Junk"
          />
        </div>
        <div id="about" data-section="about">
          <TestimonialAboutCard
            tag="About Us"
            tagIcon={ShieldCheck}
            title="Our Story"
            description="Founded on the principles of speed, integrity, and white-glove service."
            subdescription="We've dedicated ourselves to helping our community reclaim their spaces one haul at a time."
            icon={ShieldCheck}
            imageSrc="http://img.b2bpic.net/free-photo/medium-shot-delivery-people-working_23-2149103417.jpg?_wi=1"
            useInvertedBackground={false}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia
            logoText="Rayo Junk Removal"
            imageSrc="http://img.b2bpic.net/free-photo/medium-shot-delivery-people-working_23-2149103417.jpg?_wi=2"
            columns={[
              {
                title: "Company",                items: [
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" }
                ]
              }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}