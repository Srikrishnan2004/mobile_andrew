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

const TermsConditionsModal = () => {
  const { isTermsModalOpen, closeTermsModal } = useComponentStore();

  const handleClose = () => {
    const joystickZone = document.getElementById("joystickZone");
    if (joystickZone) {
      joystickZone.style.display = "block";
    }
    closeTermsModal();
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
          <h2 style={styles.title}>Terms and Conditions</h2>

          <div style={styles.content}>
            <h3 style={styles.sectionTitle}>1. Introduction</h3>
            <p style={styles.text}>
              Welcome to <strong>Deyga XR</strong> (the "Experience"), created
              and managed by <strong>Strategy Fox</strong>. These Terms and
              Conditions ("Terms") govern your access to and use of the Deyga XR
              Experience, including any content, functionality, and services
              offered within the platform.
            </p>
            <p style={styles.text}>
              By accessing or using Deyga XR, you agree to comply with and be
              bound by these Terms. If you do not agree with these Terms, you
              may not use the Experience.
            </p>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>2. Privacy</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Please review our <strong>privacy-policy</strong> so that you
                may understand our privacy practices.
              </li>
            </ul>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>3. Payment Policy</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Please see our Payment Policy to understand the purchase
                processes of our products.
              </li>
              <li style={styles.listItem}>
                All international shipping orders may attract local duties
                applicable in that country and accordingly the customer will
                have to pay such local duties/taxes.
              </li>
            </ul>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>
              4. Products And Services For Personal Use
            </h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                The products and services described on this website, and any
                samples thereof we may provide to you, are for personal use
                only. You may not sell or resell any of the products or
                services, or samples thereof, you receive from us. We reserve
                the right, with or without notice, to cancel or reduce the
                quantity of any products or services to be provided to you that
                we believe, in our sole discretion, may result in the violation
                of our Terms and Conditions.
              </li>
            </ul>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>5. Accuracy Of Information</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                We attempt to be as accurate as possible when describing our
                products on the website. However, except to the extent implied
                by applicable law, we do not warrant that the product
                descriptions, colours, information or other content available on
                the website are accurate, complete, reliable, current, or
                error-free.
              </li>
            </ul>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>6. Intellectual Property</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                All information and content available on the website and its
                "look and feel", including but not limited to trademarks, logos,
                service marks, text, graphics, logos, button icons, images,
                audio clips, data compilations and software, and the compilation
                and organization thereof (collectively, the "Content") is the
                property of Deyga, our Affiliates, partners or licensors, and is
                protected by laws of India, including laws governing all
                applicable forms of intellectual property.
              </li>
              <li style={styles.listItem}>
                Except as set forth in the limited licenses in Section 6, or as
                required under applicable law, neither the Content nor any
                portion of this website may be used, reproduced, duplicated,
                copied, sold, resold, accessed, modified, or otherwise
                exploited, in whole or in part, for any purpose without our
                express, prior written consent.
              </li>
            </ul>

            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>7. Limited Licenses</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                We grant you a limited, revocable, and non-exclusive license to
                access and make personal use of Deyga Organics website. This
                limited license does not include the right to: (a) frame or
                utilize framing techniques to enclose the website or any portion
                thereof; (b) republish, redistribute, transmit, sell, license or
                download the website or any and/or all Content (except caching
                or as necessary to view the website); (c) make any use of the
                website or any and/or all Content other than personal use; (d)
                modify, reverse engineer or create any derivative works based
                upon either the website or any and/or all Content; (e) collect
                account information for the benefit of yourself or another
                party; (f) use any meta tags or any other "hidden text"
                utilizing any and/or all Content; or (g) use software robots,
                spiders, crawlers, or similar data gathering and extraction
                tools, or take any other action that may impose an unreasonable
                burden or load on our infrastructure. You must retain, without
                modification, all proprietary notices on the website or affixed
                to or contained in the website.
              </li>
              <li style={styles.listItem}>
                We also grant you a limited, revocable, and nonexclusive license
                to create a hyperlink to the home page of the website for
                personal, non-commercial use only. A website that links to the
                website:
              </li>
              <li style={styles.listItem}>
                may link to, but not replicate, any and/or all of our Content
              </li>
              <li style={styles.listItem}>
                may not imply that we are endorsing such website or its services
                or products
              </li>
              <li style={styles.listItem}>
                may not misrepresent its relationship with us
              </li>
              <li style={styles.listItem}>
                may not contain content that could be construed as distasteful,
                obscene, offensive controversial or illegal or inappropriate for
                any ages
              </li>
              <li style={styles.listItem}>
                may not portray us or our products or services, in a false,
                misleading, derogatory, or otherwise offensive or objectionable
                manner, or associate us with undesirable products, services, or
                opinions
              </li>
              <li style={styles.listItem}>
                may not link to any page of the website other than the home
                page. We may, in our sole discretion, request that you remove
                any link to the website, and upon receipt of such request, you
                shall immediately remove such link and cease any linking unless
                separately and expressly authorized in writing by us to resume
                linking.
              </li>
              <li style={styles.listItem}>
                Any unauthorized use by you of the Deyga Organics website or any
                and/or all of our Content automatically terminates the limited
                licenses set forth in this Section without prejudice to any
                other remedy provided by applicable law or these Terms and
                Conditions.
              </li>
            </ul>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>
              8. Your Obligations And Responsibilities
            </h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                In the access or use of the Deyga Organics website, you shall
                comply with these Terms and Conditions and the special warnings
                or instructions for access or use posted on the website. You
                shall act always in accordance with the law, custom and in good
                faith. You may not make any change or alteration to the website
                or any Content or services that may appear on this website and
                may not impair in any way the integrity or operation of the
                website. Without limiting the generality of any other provision
                of these Terms and Conditions, if you default negligently or
                willfully in any of the obligations set forth in these Terms and
                Conditions, you shall be liable for all the losses and damages
                that this may cause to Deyga Organics, our Affiliates, partners
                or licensors.
              </li>
            </ul>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>9. Third Party Links</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                We are not responsible for the content of any off-website pages
                or any other websites linked to or from the Deyga Organics
                website. Links appearing on this website are for convenience
                only and are not an endorsement by us, our affiliates or our
                partners of the referenced content, product, service, or
                supplier. Your linking to or from any off-website pages or other
                websites is at your own risk. We are in no way responsible for
                examining or evaluating, and we do not warrant the offerings of,
                off-website pages or any other websites linked to or from the
                site, nor do we assume any responsibility or liability for the
                actions, content, products, or services of such pages and
                websites, including, without limitation, their privacy policies
                and terms and conditions. You should carefully review the terms
                and conditions and privacy policies of all off-website pages and
                other websites that you visit.
              </li>
            </ul>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>
              10. Special Features, Functionality And Events
            </h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Deyga Organics may offer certain special features and
                functionality or events (such as contests, promotions or other
                offerings) which may (a) be subject to terms of use, rules
                and/or policies in addition to or in lieu of these Terms and
                Conditions; and (b) be offered by us or by third parties. If so,
                we will notify you of this and if you choose to take advantage
                of these offerings, you agree that your use of those offerings
                will be subject to such additional or separate terms of use,
                rules and/or policies.
              </li>
            </ul>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>11. Submissions</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                It is our policy to decline unsolicited suggestions and ideas.
                Notwithstanding our policy with regard to unsolicited
                suggestions and ideas, any inquiries, feedback, suggestions,
                ideas or other information you provide us (collectively,
                "Submissions") will be treated as non-proprietary and
                non-confidential. Subject to the terms of our Privacy Policy, by
                transmitting or posting any Submission, you hereby grant us the
                right to copy, use, reproduce, modify, adapt, translate,
                publish, license, distribute, sell or assign the Submission in
                any way as we see fit, including but not limited to copying in
                whole or in part, creating derivative works from, distributing
                and displaying any Submission in any form, media, or technology,
                whether now known or hereafter developed, alone or as part of
                other works, or using the Submission within or in connection
                with our products or services. You also acknowledge that your
                Submission will not be returned and we may use your Submission,
                and any ideas, concepts or know how contained therein, without
                payment of money or any other form of consideration, for any
                purpose including, without limitation, developing,
                manufacturing, distributing and marketing products.
              </li>
              <li style={styles.listItem}>
                If you make a Submission, you represent and warrant that you own
                or otherwise control the rights to your Submission. You further
                represent and warrant that such Submission does not constitute
                or contain software viruses, commercial solicitation, chain
                letters, mass mailings, or any form of "spam". You may not use a
                false email address, impersonate any person or entity, or
                otherwise mislead us as to the origin of any Submission. You
                agree to indemnify us for all claims arising from or in
                connection with any claims to any rights in any Submission or
                any damages arising from any Submission.
              </li>
            </ul>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>12. User Content</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                When you transmit, upload, post, e-mail or otherwise make
                available data, text, software, music, sound, photographs,
                graphics, images, videos, messages or other materials ("User
                Content") on the website, you are entirely responsible for such
                User Content. Such User Content constitutes a Submission under
                Section 10 above. This means that all third parties, and not we,
                are entirely responsible for all User Content that they post to
                the website. You agree not to engage in or assist or encourage
                others to engage in transmitting, uploading, posting, e-mailing
                or otherwise making available on the website User Content that
                (a) is unlawful, harmful, threatening, abusive, harassing,
                tortious, defamatory, vulgar, obscene, pornographic, libelous,
                invasive of another's privacy, hateful, or racially, ethnically
                or otherwise objectionable; (b) you do not have a right to make
                available under any law or under contractual or fiduciary
                relationships; (c) is known by you to be false, inaccurate or
                misleading; (d) you were compensated for or granted any
                consideration by any third party; or (e) infringes any patent,
                trademark, trade secret, copyright or other proprietary and/or
                intellectual property rights of any party. In addition, you
                agree not to transmit, upload, post, e-mail, or otherwise make
                available any software viruses, unsolicited or unauthorized
                advertising, solicitation or promotional material, including
                chain letters, mass mailings, or any form of "spam". You further
                agree not to (i) impersonate any person or entity, or falsely
                state or otherwise misrepresent your affiliation with any person
                or entity; (ii) "stalk" or otherwise harass including advocating
                harassment of another, entrap or harm any third party including
                harming minors in any way; (iii) forge headers or otherwise
                manipulate identifiers in order to disguise the origin of any
                User Content; (iv) intentionally or unintentionally violate any
                applicable local, state, national or international law; or (v)
                collect or store personally identifiable data about other users.
              </li>
              <li style={styles.listItem}>
                We do not endorse or control the User Content transmitted or
                posted on the Deyga Organics website and therefore, we do not
                guarantee the accuracy, integrity or quality of User Content.
                You understand that by using this website, you may be exposed to
                User Content that is offensive, indecent or objectionable to
                you. Under no circumstances will we be liable in any way for any
                User Content, including, without limitation, for any errors or
                omissions in any User Content, or for any loss or damage of any
                kind incurred by you as a result of the use of any User Content
                transmitted, uploaded, posted, e-mailed or otherwise made
                available via the website.
              </li>
              <li style={styles.listItem}>
                You acknowledge that we have the right (but not the obligation)
                in our sole discretion to refuse to post or remove any User
                Content and we reserve the right to change, condense, or delete
                any User Content. Without limiting the generality of the
                foregoing or any other provision of these Terms and Conditions,
                we have the right to remove any User Content that violates these
                Terms and Conditions or is otherwise objectionable and we
                reserve the right to refuse service without prior notice for any
                users who violate these Terms and Conditions or infringe the
                rights of others.
              </li>
            </ul>
            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>13. Copyright Complaints</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                We respect the intellectual property of others. If you believe
                that copyrighted materials have been copied in a way that
                constitutes copyright infringement, please send an email or
                written notice to us for notices of infringement and provide the
                following: (i) identification of the copyrighted work(s) that
                you claim has been infringed and that you are the copyright
                owner or authorized to act on the copyright owner's behalf; (ii)
                a description of the material that you claim is infringing and
                the location of the material on the website; (iii) your address,
                telephone number and email address to: enquiry@deyga.in
              </li>
            </ul>

            <div style={styles.divider}></div>
            <h3 style={styles.sectionTitle}>
              14. Representations And Warranties And Limitation Of Liability
            </h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Deyga website is presented "As Is". We make no representations
                or warranties of any kind whatsoever, express or implied, in
                connection with these terms and conditions or the site,
                including but not limited to warranties of merchantability,
                non-infringement or fitness for a particular purpose, except to
                the extent such representations and warranties are not legally
                excludable.
              </li>
            </ul>

            <div style={styles.divider}></div>
            <h3 style={styles.sectionTitle}>15. Indemnification</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                You agree to defend, indemnify and hold us harmless for any
                loss, damages or costs, including reasonable attorneys' fees,
                resulting from any third party claim, action, or demand
                resulting from your use of Deyga or breach of these Terms and
                Conditions. You also agree to indemnify us for any loss,
                damages, or costs, including reasonable attorneys' fees,
                resulting from your use of software robots, spiders, crawlers,
                or similar data gathering and extraction tools, or any other
                action you take that imposes an unreasonable burden or load on
                our infrastructure.
              </li>
            </ul>

            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>16. Disputes</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                With respect to any dispute regarding the website, all rights
                and obligations and all actions contemplated by these Terms and
                Conditions shall be governed by the laws of India and the courts
                of Erode, India, as if the Terms and Conditions were a contract
                wholly entered into and wholly performed within Erode, India,
                subject to foreign legal mandatory provisions. To the fullest
                extent permitted by applicable law, any dispute, differences or
                claim arising out of your visit to the Deyga website shall be
                referred to the sole Arbitrator appointed by the Chairman and
                Managing Director of Deyga in accordance with the law. The venue
                of such arbitration shall be at Erode, India and the award of
                the Arbitrator shall be final and binding on all parties and may
                be entered as a judgment in any court of competent jurisdiction.
                To the fullest extent permitted by applicable law, no
                arbitration under these Terms and Conditions shall be joined to
                an arbitration involving any other party subject to this Terms
                and Conditions, whether through class arbitration proceedings or
                otherwise.
              </li>
              <li style={styles.listItem}>
                To the extent arbitration is not permitted by applicable law,
                any dispute relating in any way to your visit to the website
                shall be submitted to an appropriate court or other judicial
                body in Erode, India, as applicable, without prejudice to the
                applicable law and all applicable provisions of this Section,
                and subject to our right to seek injunctive or other appropriate
                relief in any court, if you have in any manner violated or
                threatened to violate our intellectual property rights and you
                consent to exclusive jurisdiction and venue in such courts.
              </li>
            </ul>

            <div style={styles.divider}></div>

            <h3 style={styles.sectionTitle}>17. Disputes</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                You consent to receive any agreements, notices, disclosures and
                other communications (collectively, "Notices") to which these
                Terms and Conditions refer from us electronically including
                without limitation by email or by posting notices on this
                website. You agree that all Notices that we provide to you
                electronically satisfy any legal requirement that such
                communications be in writing in English. To withdraw your
                consent to receive Notices electronically, you must notify us of
                your withdrawal of such consent by emailing us at:
                enquiry@deyga.in and discontinue your use of this website. In
                such event, all rights granted to you pursuant to these Terms
                and Conditions, including but not limited to the limited
                licenses set forth in Section 6 hereof, shall automatically
                terminate. Unfortunately, we cannot provide the benefits of this
                website to any user that cannot consent to receipt of Notices
                electronically.
              </li>
              <li style={styles.listItem}>
                Please note that this consent to receive Notices is entirely
                separate from any election you may make with respect to receipt
                of marketing communications. Your options with respect to
                receipt of marketing communications are set forth in our Privacy
                Policy.
              </li>
            </ul>

            <div style={styles.divider}></div>
            <h3 style={styles.sectionTitle}>General</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                You acknowledge and agree that these Terms and Conditions
                constitute the complete and exclusive agreement between us
                concerning your use of the website, and supersede and govern all
                prior proposals, agreements, or other communications.
              </li>
              <li style={styles.listItem}>
                We reserve the right, in our sole discretion, to change these
                Terms and Conditions at any time by posting the changes on the
                website and providing notice of such change. Any changes are
                effective immediately upon posting to the Site and release of
                notice of such change. Your continued use of the website
                thereafter constitutes your agreement to all such changed Terms
                and Conditions. We may, with or without prior notice, terminate
                any of the rights granted by these Terms and Conditions. You
                shall comply immediately with any termination or other notice,
                including, as applicable, by ceasing all use of the website.
              </li>
              <li style={styles.listItem}>
                Nothing contained in these Terms and Conditions shall be
                construed as creating any agency, partnership, or other form of
                joint enterprise between us. Our failure to require your
                performance of any provision hereof shall not affect our full
                right to require such performance at any time thereafter, nor
                shall our waiver of a breach of any provision hereof be taken or
                held to be a waiver of the provision itself. In the event that
                any provision of these Terms and Conditions shall be
                unenforceable or invalid under any applicable law or be so held
                by any applicable arbitral award or court decision, such
                unenforceability or invalidity shall not render these Terms and
                Conditions unenforceable or invalid as a whole but these Terms
                and Conditions shall be modified, to the extent possible, by the
                adjudicating entity to most fully reflect the original intent of
                the parties as reflected in the original provision.
              </li>
              <li style={styles.listItem}>
                This website is operated by Deyga Organics Throughout the site,
                the terms “we”, “us” and “our” refer to Deyga Organics
                (deyga.in). Indionline Ltd, with its registered address at 29
                Temple Avenue Birmingham West Midlands B28 9LJ is the authorized
                reseller and merchant of the products and services offered
                within this store on the territory of EU and UK. We offer this
                website, including all information, tools and services available
                from this site to you, the user, conditioned upon your
                acceptance of all terms, conditions, policies and notices stated
                here.
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

export default TermsConditionsModal;
