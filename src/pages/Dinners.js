import React from "react";
import recipeList from "../recipeList";
import { Link } from "react-router-dom";

const Dinners = () => {
  const recipeCategory = recipeList.filter(
    (eachRecipe) => eachRecipe.category === "Dinners"
  );

  const recipes = recipeCategory.map((eachRecipe) => {
    return (
      <Link
        to={`/recipe/${eachRecipe.id}`}
        key={eachRecipe.name}
        className="flex flex-row w-[30%] h-[150px] hover:transition-transform hover:scale-110 hover:z-[1] cursor-pointer bg-peach-crayola my-3 mx-3 overflow-hidden rounded-xl"
      >
        <div className="w-[60%] relative">
          <h2 className="font-shrikhand tracking-wider text-2xl text-center mt-5 px-3">
            {eachRecipe.name}
          </h2>
          <p className="absolute bottom-5 left-5 font-playfair text-md">
            {eachRecipe.category}
          </p>
        </div>
        <div className="w-[40%]">
          <img
            className="w-full h-full"
            src={eachRecipe.image}
            alt="Recipe Item"
          />
        </div>
      </Link>
    );
  });

  return (
    <div className="bg-seashell h-screen">
      <div className="flex flex-row flex-wrap justify-center items-center pt-20">
        {recipes}
      </div>
    </div>
  );
};

export default Dinners;
