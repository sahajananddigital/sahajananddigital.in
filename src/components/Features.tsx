import styles from './Features.module.css';

const featureItems = [
  { name: 'Enterprise-Grade Architecture', icon: 'fas fa-layer-group', content: 'Scalable and robust system designs tailored for high-performance applications.' },
  { name: 'Bespoke Digital Solutions', icon: 'fas fa-laptop-code', content: 'Custom-built web and mobile experiences designed to solve your unique business challenges.' },
  { name: '24/7 Dedicated Support', icon: 'fas fa-headset', content: 'Continuous monitoring and agile maintenance to ensure your operations never skip a beat.' },
  { name: 'Transparent Pricing Models', icon: 'fas fa-handshake', content: 'No hidden fees. We provide clear, milestone-based estimates aligned with your budget.' },
  { name: 'Agile & Timely Delivery', icon: 'fas fa-rocket', content: 'Iterative development sprints guarantee rapid time-to-market without compromising quality.' },
  { name: 'Cloud-Native Infrastructure', icon: 'fas fa-cloud-upload-alt', content: 'Seamless deployment and scaling utilizing the latest cloud technologies.' },
];

const Features = () => {
  return (
    <section className="section bg-gradient">
      <div className="container">
        <div className="text-center mb-12">
          <h2>Why Partner With Us</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            We bring a decade of expertise to every project, combining technical excellence with strategic business insight.
          </p>
        </div>
        <div className={styles.grid}>
          {featureItems.map((feature) => (
            <div key={feature.name} className={styles.feature}>
              <div className={styles.iconWrapper}>
                <i className={feature.icon}></i>
              </div>
              <h3 className={styles.name}>{feature.name}</h3>
              <p className={styles.content}>{feature.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
