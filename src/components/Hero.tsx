import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  content: string;
  image: string;
  button: {
    enable: boolean;
    label: string;
    link: string;
  };
}

const Hero = ({ title, content, image, button }: HeroProps) => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              {title}
            </h1>
            <p className={styles.text} dangerouslySetInnerHTML={{ __html: content }}></p>
            {button.enable && (
              <div className={styles.actions}>
                <Link href={`/${button.link}`} className="btn btn-primary">
                  {button.label}
                </Link>
                <Link href="/case-study" className="btn btn-outline">
                  View Our Work
                </Link>
              </div>
            )}
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src={`/${image}`} 
              alt={title} 
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
