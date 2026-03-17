import CTA from "@/components/CTA";
import styles from "./services.module.css";
import Link from "next/link";

export const metadata = {
  title: "Premium IT Services | Sahajanand Digital",
  description: "Explore our premium IT services including custom ERP/CRM development, full-stack web applications, and native mobile app development.",
};

const servicePlans = [
  {
    name: "Custom ERP & CRM Solutions",
    info: "Streamline your business operations with highly scalable, tailor-made enterprise software.",
    services: ["ERP Architecture & Setup", "Workflow Automation", "Legacy System Migration", "Cloud-Based CRM"],
  },
  {
    name: "Full-Stack Web Development",
    info: "High-performance, SEO-optimized web applications built with modern frameworks.",
    services: ["Bespoke UI/UX Design", "Next.js & React Apps", "E-Commerce Platforms", "Custom API Integrations"],
    featured: true,
  },
  {
    name: "Native & Cross-Platform Mobile Apps",
    info: "Engaging, user-centric mobile experiences engineered for iOS and Android.",
    services: ["React Native & Flutter", "Performance Optimization", "Secure Authentication", "App Store Deployment"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="section bg-gradient">
        <div className="container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1>Our Expertise</h1>
            <p className="text-lg">We deliver tailored IT solutions designed to accelerate your business growth and digital transformation.</p>
          </div>
          <div className={styles.grid}>
            {servicePlans.map((plan) => (
              <div key={plan.name} className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
                <h3 className={styles.name}>{plan.name}</h3>
                <p className={styles.info}>{plan.info}</p>
                <ul className={styles.list}>
                  {plan.services.map((service) => (
                    <li key={service}>
                      <i className="fas fa-check-circle"></i> {service}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} ${styles.cardBtn}`}>
                  Get Free Consultation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </>
  );
}
