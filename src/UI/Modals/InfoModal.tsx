import { X } from "lucide-react";
import { useComponentStore } from "../../stores/ZustandStores";

const styles = {
  backdrop: {
    position: "fixed" as "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(8px)",
    zIndex: 1050,
    overflowY: "hidden" as "hidden",
    touchAction: "none",
    pointerEvents: "auto",
  },
  modalContainer: {
    position: "relative" as "relative",
    backgroundColor: "#1f1f1f",
    borderRadius: "1rem",
    width: "80vw",
    height: "80vh",
    maxWidth: "36rem",
    maxHeight: "90vh",
    margin: "auto",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1100,
    border: "1px solid #333",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column" as "column",
    overflowY: "auto" as "auto",
    WebkitOverflowScrolling: "touch",
  },
  closeButton: {
    position: "absolute" as "absolute",
    top: "0.5rem",
    right: "0.5rem",
    padding: "0.5rem",
    borderRadius: "50%",
    background: "transparent",
    transition: "background-color 0.2s",
    zIndex: 1150,
    border: "none",
    cursor: "pointer",
  },
  closeIcon: {
    width: "1.25rem",
    height: "1.25rem",
    color: "#ccc",
  },
  title: {
    color: "white",
    fontSize: "1rem",
    fontWeight: 700,
    textAlign: "center" as "center",
    margin: "1rem 0",
    padding: "0 2rem",
  },
  content: {
    flex: 1,
    overflowY: "auto" as "auto",
    padding: "1rem",
    WebkitOverflowScrolling: "touch",
  },
  sectionTitle: {
    color: "white",
    fontSize: "1.125rem",
    fontWeight: 600,
    marginTop: "1rem",
    marginBottom: "0.75rem",
  },
  text: {
    color: "#ccc",
    fontSize: "0.9rem",
    lineHeight: 1.6,
    marginBottom: "0.75rem",
  },
  list: {
    paddingLeft: "1rem",
    marginBottom: "1rem",
  },
  listItem: {
    marginBottom: "0.65rem",
    color: "white",
    fontSize: "0.9rem",
  },
  divider: {
    height: "1px",
    backgroundColor: "#333",
    margin: "1rem 0",
  },
  button: {
    marginTop: "1rem",
    backgroundColor: "#4b4b4b",
    color: "white",
    padding: "0.6rem 1.2rem",
    borderRadius: "0.375rem",
    fontWeight: 500,
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.9rem",
    cursor: "pointer",
    textAlign: "center" as "center",
    transition: "background-color 0.2s",
    border: "none",
    width: "100%",
  },
  buttonHover: {
    backgroundColor: "#3a3a3a",
  },
  responsive: `
    @media (max-width: 768px) {
      .modalContainer {
        width: 90vw;
        height: 85vh;
        maxWidth: 32rem;
      }
    }
    @media (max-width: 480px) {
      .modalContainer {
        width: 95vw;
        height: 90vh;
        maxWidth: none;
        maxHeight: none;
        padding: 0.5rem;
      }
    }
  `,
};

const InfoModal = () => {
  const { isInfoModalOpen, closeInfoModal } = useComponentStore();

  const handleClose = () => {
    const joystickZone = document.getElementById("joystickZone");
    if (joystickZone) {
      joystickZone.style.display = "block";
    }
    closeInfoModal();
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
          ${styles.responsive}
          .modalContainer::-webkit-scrollbar {
            width: 8px;
          }
          .modalContainer::-webkit-scrollbar-track {
            background: #1f1f1f;
          }
          .modalContainer::-webkit-scrollbar-thumb {
            background: #4b4b4b;
            border-radius: 4px;
          }
          .modal-open {
            overflow: hidden !important;
            touch-action: none !important;
          }
        `}
      </style>
      <div style={styles.backdrop} onClick={handleClose}>
        <div className="modalContainer" style={styles.modalContainer}>
          <button
            onClick={handleClose}
            style={styles.closeButton}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#333")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <X style={styles.closeIcon} />
          </button>
          <h2 style={styles.title}>About Us & Privacy Policy</h2>

          <div style={styles.content}>
            <h3 style={styles.sectionTitle}>About Us</h3>
            <p style={styles.text}>
              At Strategy Fox, we are pioneers in crafting immersive and
              innovative digital experiences that redefine the way businesses
              interact with their customers. Our expertise lies in creating
              cutting-edge XR solutions, web-based 3D experiences, and
              interactive commerce platforms tailored to meet the unique needs
              of our clients.
            </p>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>Privacy Policy</h3>
            <p style={styles.text}>
              <strong>Effective Date:</strong> January 2, 2025
            </p>
            <p style={styles.text}>
              Strategy Fox ("we," "our," "us") values your privacy and is
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, and safeguard your
              information when you interact with our services, websites, and
              applications.
            </p>
            <p style={styles.text}>
              <strong>
                Collection of Personally Identifiable Information (PII) And
                Other Information
              </strong>
            </p>
            <p style={styles.text}>
              Deyga limits itself to collect information in order to ensure
              accurate service. Most of the information we collect is very basic
              and is needed to complete a purchase or provide a refund. Examples
              of customer information that may be collected by us include your
              name, address, telephone number, date of birth, email address,
              descriptions of the items requested or purchased, language
              preference, the IP address and operating system of your computer,
              and the browser type and version being used by you. We will not
              sell, distribute or lease your personal information to third
              parties. We may automatically track certain information about you
              based upon your behaviour on our site. We use this information to
              do internal research on our users' demographics, interests, and
              behaviour to better understand, protect and serve our users. This
              information is compiled and analysed on an aggregated basis. This
              information may include the URL that you just came from (whether
              this URL is on our site or not), which URL you next go to (whether
              this URL is on our site or not), your computer browser
              information, and your IP address. Credit Card, Debit Card and
              Banking Information Deyga Organics does not collect or store
              Credit Card or Debit Card or any of your banking information as it
              is directly transmitted through the payment gateway provider to
              the payment network or bank.
            </p>

            <p style={styles.text}>
              <strong>Registration</strong>
            </p>
            <p style={styles.text}>
              In order to take advantage of some features of the site, you must
              register and create a member account which is free of any cost. An
              online registration form may require you to provide information
              such as your name, email address, and a password. Your password is
              a component of our security system. As such, it is your
              responsibility to protect it. Do not share your password with any
              third parties. If your password has been compromised for any
              reason, you should change it immediately.
            </p>
            <p style={styles.text}>
              <strong>
                Technologies That Allow Us To Customise Your Experience On Deyga
              </strong>
            </p>
            <p style={styles.text}>
              We use various technologies to collect information relating to
              your visit to our website, such as the Uniform Resource Locater
              (URL) that referred you to our website, Internet Protocol address,
              browser type, browser language, the date and time of your request,
              etc. This enables us to enhance and customise your experience on
              our website. For example, we may collect the Internet Protocol
              (IP) address identifying your computer or device and indicating
              your geographic region for statistical purposes. In some
              instances, we may use these technologies in combination with the
              personally identifiable information you provide on the website.
              These technologies may provide a variety of information such as
              whether you have visited Deyga before. They also may enable you to
              save your preferences. Each technology is explained below.
            </p>
            <p style={styles.text}>
              <strong>
                Use Of Your Personal Information, Demographic And Profile Data
              </strong>
            </p>
            <p style={styles.text}>
              We use personal information to provide the services you request.
              To the extent we use your personal information to market to you,
              we will provide you the ability to opt-out of such uses. We use
              your personal information to resolve disputes; troubleshoot
              problems; help promote a safe service; collect money; measure
              consumer interest in our products and services, inform you about
              online and offline offers, products, services, and updates;
              customize your experience; detect and protect us against error,
              fraud and other criminal activity; enforce our terms and
              conditions; and as otherwise described to you at the time of
              collection. In our efforts to continually improve our product and
              service offerings, we collect and analyze demographic and profile
              data about our users' activity on our website. We identify and use
              your IP address to help diagnose problems with our server, and to
              administer our website. Your IP address is also used to help
              identify you and to gather broad demographic information. We will
              occasionally ask you to complete optional online surveys. These
              surveys may ask you for contact information and demographic
              information (like zip code, age, or income level). We use this
              data to tailor your experience at our site, providing you with
              content that we think you might be interested in and to display
              content according to your preferences.
            </p>
            <p style={styles.text}>
              <strong>
                How Do We Mutually Benefit From The Personal Information?
              </strong>
            </p>
            <p style={styles.text}>
              In case you choose to leave your email address with us we would
              deliver to you information through emails such as our newsletters,
              surveys or other email messages containing product and event
              information, cosmetics tips or promotions. If at any time you
              decide that you would not like to receive these emails, you may
              select the 'Unsubscribe' link on the email or edit your
              information and consent to receive email and other communication
              in the 'Profile' section for registered users.
            </p>
            <p style={styles.text}>
              <strong>Advertisements On Deyga</strong>
            </p>
            <p style={styles.text}>
              We use third-party advertising companies to serve ads when you
              visit our website. These companies may use information (not
              including your name, address, email address, or telephone number)
              about your visits to this and other websites in order to provide
              advertisements about goods and services of interest to you. We do
              not take any responsibility with respect to your visits to such
              other websites and providing any information/s therein.
            </p>
            <p style={styles.text}>
              <strong>Links To Other Sites</strong>
            </p>
            <p style={styles.text}>
              Occasionally, we may make available a link to a third party web
              site. These links will let you leave the portal. The linked sites
              are not under our control and we are not responsible for the
              privacy practices or the contents of any linked site or any link
              contained in a linked site, or any changes or updates to such
              sites. We are not responsible for webcasting or any other form of
              transmission received from any linked site. We provide the links
              to you only as a convenience. We do not endorse the site or its
              use or contents.
            </p>
            <p style={styles.text}>
              <strong>Sharing Of Personal Information</strong>
            </p>
            <p style={styles.text}>
              We may share personal information with our other corporate
              entities and affiliates who may use the said information in
              accordance with this policy to: help detect and prevent identity
              theft, fraud and other potentially illegal acts; correlate related
              or multiple accounts to prevent abuse of our services; and to
              facilitate joint or co-branded services that you request where
              such services are provided by more than one corporate entity. If
              you have any objection to such sharing than we request you should
              not provide us with any information. We may retain other companies
              and individuals to perform functions on our behalf consistent with
              this Privacy Policy. Examples include webstore management
              companies, order processing companies, courier companies, data
              analysis firms, customer support specialists, email vendors,
              web-hosting companies and fulfillment companies (e.g., companies
              that coordinate mailings). Such third parties may be provided with
              access to personal information needed to perform their functions
              but may not use such information other than on our behalf and in
              accordance with this Privacy Policy. In addition, in some
              instances, you may be offered the opportunity to consent to the
              sharing of your information with a third party such as an event or
              promotion co-sponsor. If you consent, we will share your
              information with such third party and the information you provide
              may be used by such third party for their own purposes and in
              accordance with their own policies. We may disclose personal
              information if required to do so by law or in the good faith
              belief that such disclosure is reasonably necessary to respond to
              any court orders, or other legal process. We may disclose personal
              information to law enforcement offices, third party rights owners,
              or others in the good faith belief that such disclosure is
              reasonably necessary to: enforce our Terms or Privacy Policy;
              respond to claims that an advertisement, posting or other content
              violates the rights of a third party; or protect the rights,
              property or personal safety of our users or the general public.
            </p>
            <p style={styles.text}>
              <strong>Business Transfer</strong>
            </p>
            <p style={styles.text}>
              We and our affiliates will share / sell some or all of your
              personal information with another business entity should we (or
              our assets) plan to merge with, or be acquired by that business
              entity. Should such a transaction occur that other business entity
              (or the new combined entity) will be required to follow this
              privacy policy with respect to your personal information.
            </p>
            <p style={styles.text}>
              <strong>SECURITY PRECAUTIONS</strong>
            </p>
            <p style={styles.text}>
              We have put in place reasonable measures to protect the personal
              information contained in our databases. Measures are in place to
              prevent unauthorized access and maintain appropriate use and
              accuracy. Furthermore, data that is transmitted in association
              with our online store is encrypted and is secured by SSL as per
              international standard IS/ISO/IEC 27001. Does your retention
              agency have IS/ISO/IEC 27001 certificate?
            </p>
            <p style={styles.text}>
              <strong>Transfer Of Data To Other Countries</strong>
            </p>
            <p style={styles.text}>
              Deyga, our Affiliates and third parties who may receive your
              personal information in accordance with this Privacy Policy and
              the databases in which your personal information is stored shall
              be located in India and are required to honour the privacy
              representations made in this Privacy Policy under applicable laws
              of this country. In case of transfer of data to any other country,
              legal protections applicable to personal information in the
              concerned country will apply.
            </p>
            <p style={styles.text}>
              <strong>Choice/Opt-Out</strong>
            </p>
            <p style={styles.text}>
              We provide all users with the opportunity to opt-out of receiving
              non-essential (promotional, marketing-related) communications from
              us on behalf of our partners, and from us in general, after
              setting up an account. If you want to remove your contact
              information from all Deyga lists and newsletters, please
              visit:http://www.deyga.in/unsubscribe.php
            </p>
            <p style={styles.text}>
              <strong>Your Comments</strong>
            </p>
            <p style={styles.text}>
              We welcome your feedback. If you have questions or comments about
              our privacy policies, feel free to drop us a message by writing to
              us at enquiry@deyga.in.
            </p>
            <p style={styles.text}>
              <strong>OUR RIGHTS</strong>
            </p>
            <p style={styles.text}>
              We may elect to electronically monitor areas of the portal and may
              disclose any Content, records, or electronic communication of any
              kind (i) to satisfy any law, regulation, or government request;
              (ii) if such disclosure is necessary or appropriate to operate the
              portal; or (iii) to protect our rights or property or the rights
              of the users, Sponsors, Providers, Licensors, or Merchants. We are
              not responsible for screening, policing, editing, or monitoring
              such Content. If notified of allegedly infringing, defamatory,
              damaging, illegal, or offensive Content, we may investigate the
              allegation and determine in our sole discretion whether to remove
              or request the removal of such Content from the portal. We may
              terminate your access, or suspend your access to all or part of
              the Site, without notice, for any conduct that we, in our sole
              discretion, believe is in violation of any applicable law or is
              harmful to the interests of another user, a third-party Provider,
              Merchant, Sponsor, Licensor, service provider, or us. Because
              customer service is paramount to our business, we reserve the
              right to refuse to sell products to you if it reasonably appears
              to us that you intend to resell the products. In addition, we
              reserve the right to limit quantities of items purchased by each
              customer.
            </p>
            <p style={styles.text}>
              <strong>Children</strong>
            </p>
            <p style={styles.text}>
              The Deyga website is not designed for persons under the age of 18
              and we do not knowingly collect personally identifiable
              information from anyone under the age of 18. If you are under 18
              years of age, you may browse Deyga, but please do not provide your
              personal information to us. For example, you cannot register. If
              we become aware that we have inadvertently received personal
              information from a visitor under the age of 18 on the website, we
              will delete the information from our records.
            </p>
            <p style={styles.text}>
              <strong>Your Consent</strong>
            </p>
            <p style={styles.text}>
              By using the Website and/ or by providing your information, you
              consent to the collection and use of the information you disclose
              on the website in accordance with this Privacy Policy, including
              but not limited to Your consent for sharing your information as
              per this privacy policy. If you believe that any information we
              are holding on you is incorrect or incomplete, please write to or
              email us as soon as possible, at the above address. We will
              promptly correct any information found to be incorrect.
            </p>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>Information We Collect</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>Personal Information:</strong> Name, email address,
                phone number, billing and shipping address, payment details
                (processed securely by third-party payment processors).
              </li>
              <li style={styles.listItem}>
                <strong>Non-Personal Information:</strong> Browser type, device
                type, operating system, IP address, geographic location, usage
                data (e.g., pages visited, time spent on the site).
              </li>
              <li style={styles.listItem}>
                <strong>Cookies:</strong> We use cookies to enhance user
                experience, track website traffic, and personalize content.
              </li>
            </ul>
          </div>

          <button
            style={styles.button}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor =
                styles.button.backgroundColor)
            }
            onClick={handleClose}
          >
            Accept & Close
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoModal;
