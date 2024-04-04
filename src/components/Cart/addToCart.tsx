// Simon

const AddToCartComponent = () => {
    const addToCart = () => {
        console.log('Recipe added to cart!');
        //liten placeholder för att se till att knappen funkar i console
    };
  
    return (
      <button onClick={addToCart} className="bg-green-500 hover:bg-green-700 py-2 px-4 rounded">
        Add to Cart
      </button>
    );
};

export default AddToCartComponent;