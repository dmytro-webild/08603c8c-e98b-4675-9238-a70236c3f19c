"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function ContactPage() {
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
          <ContactSplitForm
            title="Get In Touch"
            description="Reach out for junk removal, estate cleanouts, or any inquiries."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name" },
              { name: "email", type: "email", placeholder: "Email Address" }
            ]}
            buttonText="Send Message"
            imageSrc="http://img.b2bpic.net/free-photo/medium-shot-delivery-people-working_23-2149103417.jpg?_wi=1"
            useInvertedBackground={false}
          />
          <div className="flex flex-wrap justify-center gap-4 py-8">
            <a href="tel:+16614352054" className="px-6 py-3 bg-primary text-white rounded-full">Call Us: +16614352054</a>
            <a href="https://www.google.com/maps/search/Rayo+Junk+Removal" target="_blank" className="px-6 py-3 border rounded-full">View Location</a>
            <a href="https://www.tiktok.com/@rayojunkremoval" target="_blank" className="px-6 py-3 border rounded-full">TikTok Profile</a>
          </div>
        </div>
        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="http://img.b2bpic.net/free-photo/portrait-man-with-scary-clown-make-up-balloons_23-2150915403.jpg?_wi=2"
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