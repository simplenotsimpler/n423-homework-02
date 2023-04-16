import Card from "@/components/Card.jsx";
import styles from "../styles/About.module.css";
import owners from "@/data/owners.js";
import CardList from "@/components/CardList.jsx";

const About = () => {
  return (
    <>
      <section className={styles.about}>
        <CardList data={owners} />
      </section>
    </>
  );
};

export default About;
