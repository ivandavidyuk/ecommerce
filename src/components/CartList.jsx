import { CartItem } from '../components/CartItem';

function CartList(props) {
    const {
        order = [],
        handleCardDisplay = Function.prototype,
        removeFromCart = Function.prototype,
        incQuantity,
        decQuantity,
    } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);
    return (
        <ul className="collection cart">
            <li className="collection-item active light-blue darken-2">
                Корзина
                <i
                    className="material-icons right close light-blue darken-2"
                    onClick={handleCardDisplay}
                >
                    close
                </i>
            </li>
            {order.length ? (
                order.map((item) => (
                    <CartItem
                        key={item.id}
                        {...item}
                        removeFromCart={removeFromCart}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                ))
            ) : (
                <li className="collection-item">Корзина пуста</li>
            )}
            <li className="collection-item active light-blue darken-2 total-price">
                Общая стоимость ${totalPrice.toFixed(2)}
                <button className="secondary-content btn-small light-blue darken-2">
                    Оформить заказ
                </button>
            </li>
        </ul>
    );
}
export { CartList };
