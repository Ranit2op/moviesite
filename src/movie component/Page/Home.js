
import { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../Movielist/MovieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d2621180bbac26a38ca303d84e05a694&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results))
      .catch((error) => console.error("Error fetching popular movies:", error));
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=d2621180bbac26a38ca303d84e05a694&query=${searchQuery}&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.results || []);
      })
      .catch((error) => console.error("Error searching movies:", error));
  }, [searchQuery]);

  return (
    <>
      <div className="poster">
        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Carousel
          showThumbs={false}
          autoPlay={!isSearching}
          transitionTime={2}
          infiniteLoop={true}
          showStatus={false}
        >
          {(isSearching ? searchResults : popularMovies).map((movie) => (
            <Link
              key={movie.id}
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt={movie.original_title}
                />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage__runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage__rating">
                    {movie ? movie.vote_average : ""}
                  </span>
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;