import owners from "@/data/owners.js";
import CardList from "@/components/CardList.jsx";

const About = () => {
  return (
    <>
      <section className="sectionContent">
        <CardList data={owners} />
      </section>
    </>
  );
};

export default About;
