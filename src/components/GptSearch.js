import { BG_URL } from "../utils/constant";
import GptMovieSuggestions from "./GptMoviesSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BG_URL})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100vw",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div style={backgroundStyle} className="overflow-x-hidden">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
export default GPTSearch;
