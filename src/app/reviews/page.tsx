"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

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
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CdXNcTLm7FO6l8ghB2tiBsptcc/uploaded-1777767116495-2pg8w6ua.png"
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
          <TestimonialCardOne
            textboxLayout="default"
            useInvertedBackground={false}
            title="What Our Clients Say"
            description="Five-star customer satisfaction is the standard at Rayo Junk."
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            testimonials={[
              { id: "1", name: "Sarah J.", role: "Homeowner", company: "Local Customer", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-delivery-people-working_23-2149103417.jpg?_wi=1" },
              { id: "2", name: "Michael R.", role: "Business Owner", company: "Local Business", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/snarling-angry-man_1154-81.jpg?_wi=1" },
              { id: "3", name: "Jessica L.", role: "Estate Manager", company: "Local Community", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-scary-clown-make-up-balloons_23-2150915403.jpg?_wi=1" }
            ]}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            logoText="Rayo Junk Removal"
            columns={[
              { items: [{ label: "Services", href: "/services" }, { label: "Reviews", href: "/reviews" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] }
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}