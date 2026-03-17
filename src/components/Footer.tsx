import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const footerMenuLeft = [
  { name: 'Quick Start', url: '/contact' },
];

const footerMenuMiddle = [
  { name: 'Services', url: '/services' },
];

const footerMenuRight = [
  { name: 'Privacy Policy', url: '/privacy-policy' },
  { name: 'Terms & Conditions', url: '/terms-conditions' },
  { name: 'Case Study', url: '/case-study' },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.title}>Company</h3>
            <ul className={styles.list}>
              {footerMenuLeft.map((item) => (
                <li key={item.name}>
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Services</h3>
            <ul className={styles.list}>
              {footerMenuMiddle.map((item) => (
                <li key={item.name}>
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Support</h3>
            <ul className={styles.list}>
              {footerMenuRight.map((item) => (
                <li key={item.name}>
                  <Link href={item.url}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
             <Link href="/" className={styles.brand}>
                <Image 
                  src="/images/logo.png" 
                  alt="Sahajanand Digital" 
                  width={200} 
                  height={50} 
                  className="img-fluid"
                />
            </Link>
            <p className={styles.description}>
              Sahajanad Digital is one the responsible IT company in the india
            </p>
            <ul className={styles.social}>
                <li><a href="https://twitter.com/SahajanandDgtal" title="twitter"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/company/sahajanand-digital" title="linkedin"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <small>&copy; {new Date().getFullYear()} Sahajanand Digital. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
