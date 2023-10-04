function Cart(props) {
    const { quantity = 0, handleCardDisplay = Function.prototype } = props;

    return (
        <li className="cart_icon black-text right light-blue darken-2" onClick={handleCardDisplay}>
            {quantity ? (
                <span className="cart__counter">{quantity}</span>
            ) : null}
            <a className="material-icons shopping_cart">shopping_cart</a>
        </li>
    );
}

export { Cart };
