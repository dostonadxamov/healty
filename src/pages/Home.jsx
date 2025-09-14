import { motion } from "framer-motion";
import hero__content2 from "../../public/images/image-home-hero-small.webp"
import hero__content from "../../public/images/image-home-hero-large.webp"
import carrots from "../../public/images/icon-whole-food-recipes.svg"
import fuss from "../../public/images/icon-minimum-fuss.svg"
import search from "../../public/images/icon-search-in-seconds.svg"
import built from "../../public/images/image-home-real-life-large.webp"

export default function Home() {
  return (
    <div>
      {/* hero */}
      <motion.div
        className="hero__wrapper"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="back-img">
          <div className="content container">
            <motion.h1
              className="hero__title"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="span">Healthy meals, zero fuss</span>
            </motion.h1>

            <motion.p
              className="hero__Desc"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover eight quick, whole-food recipes that you can cook tonight <br />
              —no processed junk, no guesswork.
            </motion.p>

            <motion.button
              className="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Start exploring
            </motion.button>
          </div>

          <motion.div
            className="img"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <picture>
              <source media="(max-width: 500px)" srcSet={hero__content2} />
              <img
                className="images__hero"
                src={hero__content}
                alt="picture"
                width={1192}
                height={530}
              />
            </picture>
          </motion.div>
        </div>
      </motion.div>

      {/* details */}
      <motion.div
        className="details conatiner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        <h2 className="details__title">What you’ll get</h2>
        <div className="cards__wrapper">
          {[carrots, fuss, search].map((icon, i) => (
            <motion.section
              key={i}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="feature__icon">
                <img src={icon} alt="picture" />
              </div>
              <h2 className="feature__title">Whole-food recipes</h2>
              <p className="feature__text">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </motion.section>
          ))}
        </div>
      </motion.div>

      {/* built section */}
      <motion.section
        className="built-section container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="left">
          <h2>Built for real life</h2>
          <p>
            Cooking shouldn’t be complicated. These recipes come in under
            <span className="highlight">30 minutes</span> of active time, fit busy schedules,
            and taste good enough to repeat.
          </p>
          <p>
            Whether you’re new to the kitchen or just need fresh ideas,
            we’ve got you covered.
          </p>
        </div>

        <motion.div
          className="right"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="card">
            <picture>
              <source media="" srcSet="" />
              <img src={built} alt="picture" />
            </picture>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
