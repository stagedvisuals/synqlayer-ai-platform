import HeroSection from "@/components/hero-section";
import SkillsShowcase from "@/components/skills-showcase";
import BusinessValue from "@/components/business-value";
import LiveDemos from "@/components/live-demos";
import ComplianceSection from "@/components/compliance-section";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <HeroSection />
      
      {/* 15 Skills Showcase */}
      <section id="skills" className="scroll-mt-20">
        <SkillsShowcase />
      </section>
      
      {/* Business Value Calculator */}
      <section id="value" className="scroll-mt-20">
        <BusinessValue />
      </section>
      
      {/* Live Demos */}
      <section id="demos" className="scroll-mt-20">
        <LiveDemos />
      </section>
      
      {/* Compliance & Security */}
      <section id="compliance" className="scroll-mt-20">
        <ComplianceSection />
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}