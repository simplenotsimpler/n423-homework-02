import FooterStyles from "../styles/Footer.module.css";
import Modal from "./Modal.jsx";

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className="copyright">&copy; The Soap Factory</div>
      <div className="privacyNotice">
        <Modal trigger="Privacy Notice">
          <p>We're tracking you...</p>
          <p>Time to sing... "I always feel like somebody's watching me" by Rockwell (MJ on back up)</p>
        </Modal>
      </div>
      <div className="terms">Terms and Conditions</div>
    </footer>
  );
};

export default Footer;
