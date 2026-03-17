import Link from 'next/link';
import Image from 'next/image';
import styles from './CTA.module.css';

interface CTAProps {
  title: string;
  content: string;
  image: string;
  button: {
    enable: boolean;
    label: string;
    link: string;
  };
}

const CTA = ({ title, content, image, button }: CTAProps) => {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.cta}>
          <div className={styles.grid}>
            <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.text}>{content}</p>
              {button.enable && (
                <Link href={`/${button.link}`} className="btn btn-primary">
                  {button.label}
                </Link>
              )}
            </div>
            <div className={styles.imageWrapper}>
              <Image 
                src={`/${image}`} 
                alt={title} 
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
