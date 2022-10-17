import { getStoredCart } from "../utilities/fakedb";

export const loader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const savedCart = getStoredCart();
    const storedCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            storedCart.push(addedProduct);
        }
    }
    return { products, storedCart };

}