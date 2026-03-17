import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Us | Sahajanand Digital",
  description: "Contact Sahajanand Digital for all your IT requirements including Web Design, IT Consultancy, Digital Marketing, and Mobile App Development.",
};

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h1>Contact Us</h1>
          <p>Your one stop to all your IT requirements.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className="mb-6">Why you should contact us!</h3>
            <p className="mb-8">
              Your one stop to all your IT requirements whether it’s a Web Design or IT Consultancy, Digital Marketing or Mobile App Development. Contact Us Now!.
            </p>
            <ul className={styles.list}>
              <li><strong>Phone:</strong> +91 99786 73330</li>
              <li><strong>Mail:</strong> hello@sahajananddigital.in</li>
              <li><strong>Address:</strong> 505, Blueberry Complex, Opp. Ganesh Rivera, Nr.Gurukul Circle, Nikol, Ahmedabad, Gujarat, India - 382350</li>
            </ul>
          </div>
          <div className={styles.formWrapper}>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdDe71TIdlE_xyn2MsgdcRVHPuIbhCus98BguE-tNP9uvpi2w/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              title="Contact Form"
              className={styles.iframe}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
