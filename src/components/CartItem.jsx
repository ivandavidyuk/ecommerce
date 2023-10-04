function CartItem(props) {
    const {
        id,
        title,
        price,
        quantity,
        removeFromCart = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    const totalSum = price * quantity
    return (
        <li className="collection-item">
            {title}{' '}
            <i
                className="material-icons cart-quantity"
                onClick={() => decQuantity(id)}
            >
                remove
            </i>
            x{quantity}
            <i
                className="material-icons cart-quantity"
                onClick={() => incQuantity(id)}
            >
                add
            </i>{' '}
            = ${totalSum.toFixed(2)}{' '}
            <span className="secondary-content">
                <i
                    className="material-icons delete-item"
                    onClick={() => removeFromCart(id)}
                >
                    close
                </i>
            </span>
        </li>
    );
}
export { CartItem };
