import { useState } from "react";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";

export default function Recipes() {
  const [maxprep, setmaxprep] = useState("");
  const [maxcook, setmaxcook] = useState("");
  const [search, setSearch] = useState("");

  const filter = `?${maxprep ? `prepMinutes=${maxprep}` : ""}${maxprep && maxcook ? "&" : ""
    }${maxcook ? `cookMinutes=${maxcook}` : ""}`;

  const { data, error, pending } = useFetch(
    "https://68c6a369442c663bd0278d64.mockapi.io/recipes" + filter
  );

  const filteredData = data?.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="recipes__hero">
        <h2>Explore our simple, healthy recipes</h2>
        <p>
          Discover eight quick, whole-food dishes that fit real-life schedules
          and taste <br />
          amazing. Use the search bar to find a recipe by name or ingredient, or
          simply scroll <br /> the list and let something delicious catch your
          eye.
        </p>
      </div>

      <div className="recipes__main">
        <div className="filters">
          <div className="selects">
            <select defaultValue="" onChange={(e) => setmaxprep(e.target.value)}>
              <option value="" disabled>
                Max Prep Time
              </option>
              <option value="0">0 minutes</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
            </select>

            <select defaultValue="" onChange={(e) => setmaxcook(e.target.value)}>
              <option value="" disabled>
                Max Cook Time
              </option>
              <option value="0">0 minutes</option>
              <option value="5">5 minutes</option>
              <option value="10">10 minutes</option>
              <option value="15">15 minutes</option>
              <option value="20">20 minutes</option>
            </select>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      <div className="cards">
        {pending && (
          <div className="loader">
            <div className="spinner"></div>
            <p>Loading recipes...</p>
          </div>
        )}


        {filteredData?.map((e) => (
          <div className="card" key={e.id}>
            <div className="card__img">
              <picture>
                <source
                  media="(min-width: 500px)"
                  srcSet={e.image.small.replace("./", "/")}
                />
                <img
                  src={e.image.large.replace("./", "/")}
                  width={360}
                  height={350}
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
          </div>
        ))}
      </div>
    </div>
  );
}
