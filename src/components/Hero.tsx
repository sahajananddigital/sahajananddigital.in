import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Crafting <span className="text-gradient">Digital Experiences</span> That Drive Growth
            </h1>
            <p className={styles.text}>
              We build scalable web and mobile solutions tailored for visionary brands. Elevate your digital presence with cutting-edge technology and pixel-perfect design.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link href="/case-study" className="btn btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/banner-art.svg" 
              alt="Digital Agency Services Hero" 
              width={600} 
              height={500} 
              className="img-fluid"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
