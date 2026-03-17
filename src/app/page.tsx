import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <section className="section bg-light">
        <div className="container">
          <div className={styles.serviceSection}>
            <div className={styles.serviceImage}>
               <Image 
                src="/images/service-1.png" 
                alt="Digital Transformation Services" 
                width={600} 
                height={500} 
                className="img-fluid"
              />
            </div>
            <div className={styles.serviceContent}>
              <h2 className="mb-6">Delivering Excellence Across Every Digital Touchpoint.</h2>
              <p className="mb-10 text-lg text-gray-600">Explore our portfolio of award-winning case studies and see how we transform complex business challenges into elegant, high-performing digital solutions.</p>
              <Link href="/case-study" className="btn btn-primary">Explore Case Studies</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container text-center">
          <div className="mb-12 max-w-3xl mx-auto">
            <h2 className="mb-6">Engineered for Scale & Performance</h2>
            <p className="text-lg text-gray-600">Experience a seamless development workflow driven by modern agile practices, ensuring your project is delivered on time and architecture to scale.</p>
          </div>
          <Image 
            src="/images/screenshot.svg" 
            alt="Development Workflow Dashboard" 
            width={1000} 
            height={600} 
            className="img-fluid mx-auto"
          />
        </div>
      </section>

      <CTA />
    </>
  );
}
