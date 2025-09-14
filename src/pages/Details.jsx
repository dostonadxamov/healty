import { Link, useParams } from "react-router-dom";
import { useFetch } from "./useFetch";
import { motion } from "framer-motion";

export default function Details() {
  const { id } = useParams();
  const { data, pending } = useFetch(
    "https://68c6a369442c663bd0278d64.mockapi.io/recipes"
  );

  return (
    <div className="container">
      {pending && (
        <div className="loader">
          <div className="spinner"></div>
          <p></p>
        </div>
      )}
      <div className="recipe-detail">
        {data?.map((recipe) =>
          recipe.id === id ? (
            <motion.div
              className="more"
              key={recipe.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <picture>
                <source
                  media="(min-width: 500px)"
                  srcSet={recipe.image.large.replace(". /", "/").replace("./", "/")}
                />
                <source
                  media="(max-width: 499px)"
                  srcSet={recipe.image.small.replace(". /", "/").replace("./", "/")}
                />
                <img
                  src={recipe.image.large.replace(". /", "/").replace("./", "/")}
                  alt={recipe.title}
                  className="card__img"
                />
              </picture>

              <motion.div
                className="details-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2>{recipe.title}</h2>
                <p>{recipe.overview}</p>
                <div className="infos">
                  <span className="info">
                    <img src="/images/icon-servings.svg" width={19} height={20} alt="logo" />
                    <p>Serving: {recipe.servings}</p>
                  </span>

                  <span className="info">
                    <img src="/images/icon-prep-time.svg" width={19} height={20} alt="logo" />
                    <p>Prep: {recipe.prepMinutes}</p>
                  </span>

                  <span className="info">
                    <img src="/images/icon-cook-time.svg" width={19} height={20} alt="logo" />
                    <p>Cook: {recipe.cookMinutes}</p>
                  </span>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="ing">Ingredients :</h3>
                  {recipe.ingredients?.map((item, index) => (
                    <div className="gradient" key={index}>
                      <div className="point arrow">
                        <img src="/images/icon-bullet-point.svg" alt="icon" />
                        <p className="point-desc">{item}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="ing">Instructions :</h3>
                  {recipe.instructions?.map((step, i) => (
                    <div className="gradient" key={i}>
                      <div className="point arrow">
                        <img src="/images/icon-bullet-point.svg" alt="icon" />
                        <p className="point-desc">{step}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ) : null
        )}
      </div>

      <hr className="more__hr" />

      <div className="more__wrapper">
        <h2 className="more__recipes">More Recipes</h2>
        <div className="cards">
          {data?.map((e, index) => (
            <motion.div
              className="card"
              key={e.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="card__img">
                <picture>
                  <source
                    media="(min-width: 500px)"
                    srcSet={e.image.large.replace(". /", "/").replace("./", "/")}
                  />
                  <source
                    media="(max-width: 499px)"
                    srcSet={e.image.small.replace(". /", "/").replace("./", "/")}
                  />
                  <img
                    src={e.image.large.replace(". /", "/").replace("./", "/")}
                    alt={e.title}
                    className="card__img"
                  />
                </picture>
              </div>
              <h3>{e.title}</h3>
              <p>{e.overview}</p>

              <div className="infos">
                <div className="info__2">
                  <span className="info">
                    <img src="/images/icon-servings.svg" alt="logo" />
                    <p>Serving: {e.servings}</p>
                  </span>

                  <span className="info">
                    <img src="/images/icon-prep-time.svg" alt="logo" />
                    <p>Prep: {e.prepMinutes}</p>
                  </span>
                </div>

                <span className="info">
                  <img src="/images/icon-cook-time.svg" alt="logo" />
                  <p>Cook: {e.cookMinutes}</p>
                </span>
              </div>

              <Link to={`/recipes/${e.id}`} className="button-style button__card">
                View Recipe
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
