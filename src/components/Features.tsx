import styles from './Features.module.css';

interface FeatureItem {
  name: string;
  icon: string;
  content: string;
}

interface FeaturesProps {
  title: string;
  features: FeatureItem[];
}

const Features = ({ title, features }: FeaturesProps) => {
  return (
    <section className="section bg-gradient">
      <div className="container">
        <div className="text-center mb-12">
          <h2>{title}</h2>
        </div>
        <div className={styles.grid}>
          {features.map((feature) => (
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
