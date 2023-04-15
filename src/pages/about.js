import Card from "@/components/Card.jsx";
import styles from "../styles/About.module.css";
import owners from "@/data/owners.js";

const About = () => {
  let profileCards = owners.map((el) => {
    return (
      <Card key={el.id} title={el.title} text={el.bio} imgName={el.imgName} />
    );
  });
  return <section className={styles.about}>{profileCards}</section>;
};

export default About;
