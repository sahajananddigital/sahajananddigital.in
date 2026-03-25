import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Us | Sahajanand Digital",
  description: "Contact Sahajanand Digital for all your IT requirements including Web Design, IT Consultancy, Digital Marketing, and Mobile App Development.",
};

export default function ContactPage() {
  return (
    <>
      <div className="section pb-0">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-lg max-w-3xl mx-auto mb-10">
              Have a project in mind? We'd love to hear from you. Fill out the form below and our team will get back to you within 24 hours.
            </p>
            
            <div className={styles.infoSummary}>
              <div className={styles.infoItem}>
                <strong>Chat</strong>
                <span><a href="https://tawk.to/sahajananddigital" target="_blank" rel="noopener noreferrer">Click Here for Chat Support</a></span>
              </div>
              <div className={styles.infoItem}>
                <strong>Mail</strong>
                <span>hello@sahajananddigital.in</span>
              </div>
              <div className={styles.infoItem}>
                <strong>Support Email</strong>
                <span>tickets@sahajanand-digital-main.p.tawk.email</span>
              </div>
              <div className={styles.infoItem}>
                <strong>Location</strong>
                <span> 505, Blueberry Complex, Opp. Ganesh Rivera, Nr.Gurukul Circle, Nikol, Ahmedabad, Gujarat, India - 382350</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fullWidthForm}>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSdDe71TIdlE_xyn2MsgdcRVHPuIbhCus98BguE-tNP9uvpi2w/viewform?embedded=true" 
          width="100%" 
          height="1000" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          title="Contact Form"
          className={styles.iframe}
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}
