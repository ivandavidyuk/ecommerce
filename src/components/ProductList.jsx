import { Product } from './Product';

function ProductList({ products, addToCart = Function.prototype }) {

    return (
        <div className="list">
            {products.map((product) => (
                <Product key={product.id} {...product} addToCart={addToCart} />
            ))}
        </div>
    );
}

export { ProductList };
