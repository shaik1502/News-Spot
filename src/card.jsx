import "./card.css";
import RecipeReviewCard from "./cardstyle";

function Cards({articles}) {
  return (
    <div className="cards-container">
      {articles.map((article, index) => (
        <RecipeReviewCard key={index} article={article} />
      ))}
    </div>
  );
}

export default Cards;
