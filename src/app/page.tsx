import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home() {
  const filePath = path.join(process.cwd(), "content/english/_index.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  const { banner, feature, service, screenshot, call_to_action } = data;

  return (
    <>
      <Hero 
        title={banner.title} 
        content={banner.content} 
        image={banner.image} 
        button={banner.button} 
      />
      
      {feature.enable && (
        <Features 
          title={feature.title} 
          features={feature.feature_item} 
        />
      )}

      {service.enable && service.service_item.map((item: any, index: number) => (
        <section key={index} className="section bg-light">
          <div className="container">
            <div className={styles.serviceSection}>
              <div className={styles.serviceImage}>
                 <Image 
                  src={`/${item.images[0]}`} 
                  alt={item.title} 
                  width={600} 
                  height={500} 
                  className="img-fluid"
                />
              </div>
              <div className={styles.serviceContent}>
                <h2 className="mb-6">{item.title}</h2>
                <p className="mb-10 text-lg text-gray-600">{item.content}</p>
                {item.button.enable && (
                  <Link href={`/${item.button.link}`} className="btn btn-primary">
                    {item.button.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {screenshot.enable && (
        <section className="section">
          <div className="container text-center">
            <div className="mb-12 max-w-3xl mx-auto">
              <h2 className="mb-6" dangerouslySetInnerHTML={{ __html: screenshot.title }}></h2>
            </div>
            <Image 
              src={`/${screenshot.image}`} 
              alt="Workflow Dashboard" 
              width={1000} 
              height={600} 
              className="img-fluid mx-auto"
            />
          </div>
        </section>
      )}

      {call_to_action.enable && (
        <CTA 
          title={call_to_action.title} 
          content={call_to_action.content} 
          button={call_to_action.button} 
          image={call_to_action.image}
        />
      )}
    </>
  );
}
