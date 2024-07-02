const Glance = () => {
  return (
    <div className="flex justify-center">
      <div>
        <img alt="pepsi" src="assets/products/pepsi.png" className="w-[12.5rem] md:mt-12 tilt-left fade-move-up" />
      </div>
      <div>
        <img alt="pepsi" src="assets/products/pepsi-zero-sugar.png" className="w-[12.5rem] md:mt-12 tilt-right" />
      </div>
      <div>
        <img alt="pepsi" src="assets/products/pepsi-diet.png" className="w-[12.5rem] md:mt-12 tilt-right" />
      </div>
    </div>
  );
}

export default Glance;
