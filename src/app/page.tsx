"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
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
        { name: "Services", id: "services" },
        { name: "Testimonials", id: "testimonials" },
        { name: "About", id: "/about" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Rayo Junk"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{ variant: "radial-gradient" }}
      title="Luxury-Level Service. Junk Removal Done Right."
      description="Fast. Professional. Fair-Priced. Rayo Junk Removal delivers white-glove junk hauling, demolition, cleanouts, and same-day service with unmatched customer care."
      testimonials={[
        {
          name: "Sarah J.", handle: "@sarahj", testimonial: "The best junk removal experience ever. They were lightning fast and incredibly professional.", rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-delivery-people-working_23-2149103417.jpg?_wi=1", imageAlt: "professional junk removal service cinematic"},
        {
          name: "Michael R.", handle: "@miker", testimonial: "Rayo Junk undercuts every competitor in price while delivering superior luxury-level service.", rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/snarling-angry-man_1154-81.jpg?_wi=1", imageAlt: "professional junk removal service cinematic"},
      ]}
      buttons={[{ text: "Book Now", onClick: () => { window.location.href = "tel:+16614352054"; } }]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-delivery-people-working_23-2149103417.jpg?_wi=2"
      imageAlt="professional junk removal service cinematic"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Trusted Professional"
      title="Why Rayo Junk Removal?"
      description="We are not just a hauling service; we are your local luxury solution for reclaiming your space. From hot tubs to whole house cleanouts, we bring good vibes, speed, and integrity to every project."
      subdescription="Our owner-led approach ensures direct accountability and white-glove care that the big national chains simply cannot match."
      icon={ShieldCheck}
      imageSrc="http://img.b2bpic.net/free-photo/snarling-angry-man_1154-81.jpg?_wi=2"
      mediaAnimation="blur-reveal"
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

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[]}
      title="What Our Clients Say"
      description="Five-star customer satisfaction is the standard at Rayo Junk."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{ variant: "sparkles-gradient" }}
      text="Ready to reclaim your space? Contact us today for a free quote."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/portrait-man-with-scary-clown-make-up-balloons_23-2150915403.jpg"
      logoText="Rayo Junk Removal"
      columns={[]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
