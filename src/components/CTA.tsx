import Link from 'next/link';
import Image from 'next/image';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.cta}>
          <div className={styles.grid}>
            <div className={styles.content}>
              <h2 className={styles.title}>Ready to Elevate Your Brand?</h2>
              <p className={styles.text}>
                Let&apos;s collaborate to build a digital presence that outpaces the competition and accelerates your business growth.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Contact Us Today
              </Link>
            </div>
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/cta.svg" 
                alt="Digital Agency Call to Action" 
                width={400} 
                height={300} 
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
