import PropTypes from "prop-types";
function Category({ category }) {
  return (
    <div className="relative">
      <div className="h-80 shadow-sm border flex justify-center items-center hover:brightness-90 rounded-lg hover:text-white  max-w-lg mx-auto overflow-hidden bg-cover bg-no-repeat flex-col">
        <img
          src={category?.style?.backgroundImage}
          alt={category?.text}
          // loading="lazy"
          className="lg:object-cover w-full h-full brightness-50"
        />
      </div>
      <h2 className="text-xl text-[#efe6e6] font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-white transition duration-300 ease-in-out hover:scale-110 text-center w-full">
        {category.text}
      </h2>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
