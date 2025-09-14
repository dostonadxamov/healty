import hero from "../../public/images/image-about-our-mission-large.webp";
import herosmall from "../../public/images/image-about-our-mission-small.webp";
import Family from "../../public/images/image-about-beyond-the-plate-large.webp";
import Familysmall from "../../public/images/image-about-beyond-the-plate-small.webp";
import arrow from "../../public/images/icon-bullet-point.svg";
import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const listContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container">
      {/* MISSION */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="text">
          <span className="badge">Our mission</span>
          <h1 className="title">
            Help more people cook nourishing meals, more often.
          </h1>
          <p className="desc">
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p className="desc">
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </div>
        <motion.div className="image" variants={zoomIn}>
          <picture>
            <source media="(max-width: 500px)" srcSet={herosmall} />
            <img src={hero} alt="picture" />
          </picture>
        </motion.div>
      </motion.section>

      {/* WHY WE EXIST */}
      <motion.div
        className="exist-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="main-heading">Why we exist</h2>

        <motion.div className="points-list" variants={listContainer}>
          {[
            {
              title: "Cut through the noise.",
              text: "The internet is bursting with recipes...",
            },
            {
              title: "Empower home kitchens.",
              text: "When you control what goes into your meals...",
            },
            {
              title: "Make healthy look good.",
              text: "High-resolution imagery shows you exactly what success looks like...",
            },
          ].map((point, i) => (
            <motion.div className="point" key={i} variants={listItem}>
              <div className="point-header">
                <div className="green-arrow">
                  <img src={arrow} alt="icon" />
                </div>
                <h3>{point.title}</h3>
              </div>
              <p className="point-desc">{point.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* OUR FOOD PHILOSOPHY */}
      <motion.div
        className="exist-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="main-heading">
          Our food <br /> philosophy
        </h2>

        <motion.div className="points-list" variants={listContainer}>
          {[
            {
              title: "Whole ingredients first.",
              text: "Fresh produce, grains, legumes, herbs...",
            },
            {
              title: "Flavor without compromise.",
              text: "Spices, citrus, and natural sweetness replace...",
            },
            {
              title: "Respect for time.",
              text: "Weeknight meals should slot into real schedules...",
            },
            {
              title: "Sustainable choices.",
              text: "Short ingredient lists cut down on food waste...",
            },
          ].map((point, i) => (
            <motion.div className="point" key={i} variants={listItem}>
              <div className="point-header">
                <div className="green-arrow">
                  <img src={arrow} alt="icon" />
                </div>
                <h3>{point.title}</h3>
              </div>
              <p className="point-desc">{point.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* BEYOND THE PLATE */}
      <motion.section
        className="recipe-community"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="story-block">
          <h2 className="hero-heading">Beyond the plate</h2>
          <p className="mission-paragraph">
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>

          <motion.ul className="goals-list" variants={listContainer}>
            {[
              "Encourage family dinners and social cooking.",
              "Reduce reliance on single-use packaging and delivery waste.",
              "Spark curiosity about seasonal produce and local agriculture.",
            ].map((goal, i) => (
              <motion.li className="goal-item" key={i} variants={listItem}>
                <span className="green-circle"></span>
                {goal}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div className="photo-wrapper" variants={zoomIn}>
          <picture>
            <source media="(max-width: 500px)" srcSet={Familysmall} />
            <img
              className="family"
              src={Family}
              alt="family picture"
              width={744}
              height={400}
            />
          </picture>
        </motion.div>
      </motion.section>
    </div>
  );
}
