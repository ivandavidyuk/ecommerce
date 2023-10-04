const API_URL = 'https://fakestoreapi.com/products/';

const getAllProducts = async () => {
    const response = await fetch(API_URL);
    return await response.json();
};

const getProductById = async (productId) => {
    const response = await fetch(API_URL + productId);
    return await response.json();
};

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories');
    return await response.json();
};

export { getAllProducts, getProductById, getAllCategories };
