import { Link } from 'react-router-dom';

function Product(props) {
    const { id, title, price, image, addToCart = Function.prototype } = props;
    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={image} alt={title} />
                
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <span className="price right">${price}</span>
            </div>
            <Link to={`product/${id}`} className="btn see light-blue darken-2">
            <i className="material-icons">search</i> See <i className="material-icons">search</i>
                </Link> 
            <button
                    className="btn buy light-blue darken-2"
                    onClick={() => addToCart({ id, title, price })}
                >
                    <i className="material-icons">add_shopping_cart</i> buy <i className="material-icons">add_shopping_cart</i>
                </button>
        </div>
    );
}

export { Product };
