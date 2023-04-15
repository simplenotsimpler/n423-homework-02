import FooterStyles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className="copyright">&copy; The Soap Factory</div>
      <div className="terms">Terms and Conditions</div>
    </footer>
  );
};

export default Footer;
