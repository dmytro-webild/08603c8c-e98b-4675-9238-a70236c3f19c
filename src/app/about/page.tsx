"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Rayo Junk"
        />
        <MediaAbout
          title="Our Story"
          description="Founded on the principles of speed, integrity, and white-glove service, we've dedicated ourselves to helping our community reclaim their spaces one haul at a time."
          tag="About Us"
          tagIcon={ShieldCheck}
          imageSrc="http://img.b2bpic.net/free-photo/medium-shot-delivery-people-working_23-2149103417.jpg"
          useInvertedBackground={false}
        />
        <FooterMedia
          logoText="Rayo Junk Removal"
          columns={[]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}