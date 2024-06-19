import PropTypes from "prop-types";

const Product = ({ imgSrc1, imgSrc2="", imgSrc3="", name1, name2="", name3="" }) => {
  return (
    <div className="section-padding sm:min-h-screen w-full">
      <div className="flex max-sm:flex-col max-sm:gap-10 justify-between items-center">
        <div className="flex-1 flex justify-center">
          <img alt={name1} src={imgSrc1} className="" />
        </div>
        {imgSrc2!=="" && name2!=="" && (
          <div className="flex-1 flex justify-center">
          <img alt={name2} src={imgSrc2} className="" />
        </div>
        ) }
        {imgSrc3!=="" && name3!=="" && (
          <div className="flex-1 flex justify-center">
          <img alt={name3} src={imgSrc3} className="" />
        </div>
        ) }
        
      </div>
    </div>
  );
};

Product.propTypes = {
  imgSrc1: PropTypes.string,
  imgSrc2: PropTypes.string,
  imgSrc3: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  name3: PropTypes.string,
}; // these are all optional props

export default Product;
