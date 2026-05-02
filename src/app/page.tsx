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
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
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
        {
          name: "Services",          id: "services"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Pricing",          id: "pricing"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Rayo Junk"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "radial-gradient"}}
      title="Luxury-Level Service. Junk Removal Done Right."
      description="Fast. Professional. Fair-Priced. Rayo Junk Removal delivers white-glove junk hauling, demolition, cleanouts, and same-day service with unmatched customer care."
      testimonials={[
        {
          name: "Sarah J.",          handle: "@sarahj",          testimonial: "The best junk removal experience ever. They were lightning fast and incredibly professional.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-delivery-people-working_23-2149103417.jpg?_wi=1",          imageAlt: "professional junk removal service cinematic"},
        {
          name: "Michael R.",          handle: "@miker",          testimonial: "Rayo Junk undercuts every competitor in price while delivering superior luxury-level service.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/snarling-angry-man_1154-81.jpg?_wi=1",          imageAlt: "professional junk removal service cinematic"},
        {
          name: "James L.",          handle: "@jamesl",          testimonial: "Incredible communication and truly white-glove service. My garage has never looked better.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-working-service_23-2150171264.jpg?_wi=1",          imageAlt: "professional junk removal service cinematic"},
        {
          name: "Linda M.",          handle: "@lindam",          testimonial: "They arrived early, worked efficiently, and left the space spotless. Highly recommended.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cute-cat-sitting-rubbish-bin-outdoors_23-2148666769.jpg?_wi=1",          imageAlt: "professional junk removal service cinematic"},
        {
          name: "Robert T.",          handle: "@robertt",          testimonial: "Efficient, fair pricing, and very friendly. The easiest junk removal service I've booked.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crop-woman-packing-boxes_23-2147758886.jpg?_wi=1",          imageAlt: "professional junk removal service cinematic"},
      ]}
      buttons={[
        {
          text: "Get Free Quote",          href: "#contact"},
        {
          text: "Book Same-Day Service",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-delivery-people-working_23-2149103417.jpg?_wi=2"
      imageAlt="professional junk removal service cinematic"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/garbage-truck-collecting-garbage-cans_1398-4391.jpg",          alt: "Garbage truck collecting garbage cans"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-delivery-man-holding-box_23-2149103440.jpg",          alt: "Medium shot delivery man holding box"},
        {
          src: "http://img.b2bpic.net/free-photo/young-delivery-man-closing-delivery-truck-doors_23-2148944604.jpg",          alt: "Young delivery man closing delivery truck doors"},
        {
          src: "http://img.b2bpic.net/free-photo/full-shot-delivery-man-holding-box_23-2149103413.jpg",          alt: "Full shot delivery man holding box"},
        {
          src: "http://img.b2bpic.net/free-photo/person-their-job-position_23-2150163577.jpg",          alt: "Person next to their job position"},
      ]}
      avatarText="Trusted by over 2,500 happy clients"
      marqueeItems={[
        {
          type: "text",          text: "Same-Day Service"},
        {
          type: "text",          text: "Fully Insured"},
        {
          type: "text",          text: "Transparent Pricing"},
        {
          type: "text",          text: "White-Glove Care"},
        {
          type: "text",          text: "Eco-Friendly Disposal"},
      ]}
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
        {
          title: "Whole House Cleanouts",          description: "Complete removal of unwanted items for estate sales or moves.",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-working-service_23-2150171264.jpg?_wi=2"},
        {
          title: "Hot Tub & Spa Removal",          description: "Specialized equipment for safe, efficient removal of large spas.",          imageSrc: "http://img.b2bpic.net/free-photo/cute-cat-sitting-rubbish-bin-outdoors_23-2148666769.jpg?_wi=2"},
        {
          title: "Furniture & Appliance",          description: "White-glove removal of heavy electronics, couches, and appliances.",          imageSrc: "http://img.b2bpic.net/free-photo/crop-woman-packing-boxes_23-2147758886.jpg?_wi=2"},
      ]}
      title="Our Premium Services"
      description="We handle the heavy lifting so you don't have to. Experience elite, stress-free junk removal with industry-leading efficiency."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "James K.",          date: "Jan 2025",          title: "Lifesaver!",          quote: "The service was absolutely lifesaver. Professional, polite, and incredibly fast.",          tag: "Highly Recommended",          avatarSrc: "http://img.b2bpic.net/free-photo/very-good-smiling-brunette-woman-shows-ok-okay-hand-sign-looking-satisfied-recommend-great-deal-pleased-with-quality-standing-white-background_176420-46695.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-delivery-people-working_23-2149103417.jpg?_wi=3",          imageAlt: "happy client portrait professional headshot"},
        {
          id: "2",          name: "Elena V.",          date: "Dec 2024",          title: "Luxury Service",          quote: "They showed up within minutes and worked with my budget perfectly. Highly recommend.",          tag: "Top Tier",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-business-woman_23-2148603029.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/snarling-angry-man_1154-81.jpg?_wi=3",          imageAlt: "happy client portrait professional headshot"},
        {
          id: "3",          name: "Marcus D.",          date: "Nov 2024",          title: "Better Pricing",          quote: "Undercut every competitor in town and delivered the best service I've ever had.",          tag: "Best Value",          avatarSrc: "http://img.b2bpic.net/free-photo/person-presenting-their-job-resignation_23-2149445179.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-working-service_23-2150171264.jpg?_wi=3",          imageAlt: "happy client portrait professional headshot"},
        {
          id: "4",          name: "Susan P.",          date: "Oct 2024",          title: "Good Vibes",          quote: "Good vibes and great service. The team made a difficult job look simple and easy.",          tag: "Excellent",          avatarSrc: "http://img.b2bpic.net/man-winking-thumb-up_1187-3210.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/cute-cat-sitting-rubbish-bin-outdoors_23-2148666769.jpg?_wi=3",          imageAlt: "happy client portrait professional headshot"},
        {
          id: "5",          name: "David W.",          date: "Sep 2024",          title: "Reliable",          quote: "Consistent communication and fast service. Will definitely be using them again.",          tag: "Very Reliable",          avatarSrc: "http://img.b2bpic.net/free-photo/closeup-shot-handsome-male-smiling_181624-41237.jpg",          imageSrc: "http://img.b2bpic.net/free-photo/crop-woman-packing-boxes_23-2147758886.jpg?_wi=3",          imageAlt: "happy client portrait professional headshot"},
      ]}
      title="What Our Clients Say"
      description="Five-star customer satisfaction is the standard at Rayo Junk. See why our clients call us lifesavers."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        {
          id: "base",          badge: "Essential",          price: "$199+",          subtitle: "Perfect for single items or small loads.",          features: [
            "Same-Day Service",            "Fully Insured",            "Transparent Pricing"],
          buttons: [
            {
              text: "Book Now",              href: "#contact"},
          ],
        },
        {
          id: "pro",          badge: "Most Popular",          price: "$399+",          subtitle: "Great for garage or room cleanouts.",          features: [
            "Same-Day Service",            "Priority Scheduling",            "Heavy Lifting",            "Disposal Fees Included"],
          buttons: [
            {
              text: "Book Now",              href: "#contact"},
          ],
        },
        {
          id: "max",          badge: "Ultimate",          price: "$799+",          subtitle: "For entire property cleanouts.",          features: [
            "Complete House Cleanout",            "Zero Hassle",            "Same-Day Delivery"],
          buttons: [
            {
              text: "Book Now",              href: "#contact"},
          ],
        },
      ]}
      title="Transparent, Fair Pricing"
      description="We offer clear, competitive rates with no hidden fees. Luxury service doesn't have to mean luxury costs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "2,500+",          description: "Jobs Completed"},
        {
          id: "m2",          value: "1,200+",          description: "5-Star Reviews"},
        {
          id: "m3",          value: "30min",          description: "Avg Response Time"},
        {
          id: "m4",          value: "100%",          description: "Satisfaction Guarantee"},
      ]}
      title="By The Numbers"
      description="Proven results for thousands of satisfied customers across our service area."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Do you offer same-day service?",          content: "Yes, we prioritize same-day availability for urgent needs."},
        {
          id: "f2",          title: "How is pricing determined?",          content: "Pricing is based on volume, weight, and ease of access to your items."},
        {
          id: "f3",          title: "Are you fully insured?",          content: "Yes, our operations and your property are fully protected with comprehensive liability insurance."},
        {
          id: "f4",          title: "Do you take hazardous materials?",          content: "We handle general junk removal; please check our list of prohibited items for specifics."},
      ]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know about our premium service process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      text="Ready to reclaim your space? Contact us today for a free no-obligation quote and the fastest, most reliable junk removal service in town. Follow us on TikTok for our latest jobs: https://www.tiktok.com/@rayojunkremoval"
      buttons={[
        {
          text: "Call Now",          href: "tel:5550123456"},
        {
          text: "Book via SMS",          href: "sms:5550123456"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/portrait-man-with-scary-clown-make-up-balloons_23-2150915403.jpg"
      logoText="Rayo Junk Removal"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Junk Removal",              href: "#"},
            {
              label: "Hot Tub Removal",              href: "#"},
            {
              label: "Garage Cleanout",              href: "#"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Testimonials",              href: "#testimonials"},
            {
              label: "Pricing",              href: "#pricing"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}