import { useState, useEffect } from 'react';
import { ProductList } from '../components/ProductList';
import { getAllProducts } from '../api';
import { Preloader } from '../components/Preloader';
import { Categories } from '../components/Categories';
import { Cart } from '../components/Cart';
import { CartList } from '../components/CartList';
import { Alert } from '../components/Alert';

function Home() {
    const [products, setProducts] = useState([]);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')) || []);
    const [isCartDisplayed, setCartDisplay] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    localStorage.setItem('order', JSON.stringify(order))
    
    const handleCardDisplay = () => {
        setCartDisplay(!isCartDisplayed);
    };

    const closeAlert = () => {
        setAlertTitle('');
    };

    const addToCart = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertTitle(item.title);
    };

    
    const removeFromCart = (itemId) => {
        const newOrder = order.filter((el) => el.id !== itemId);
        setOrder(newOrder);
    };
    
    const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuantity = el.quantity - 1;
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    useEffect(() => {
        getAllProducts().then((data) => {
            setProducts(data);
            setCurrentProducts(data);
        });
    }, []);

    function chooseCategory(category) {
        if (category === 'all') {
            setCurrentProducts(products);
            return;
        }
        setCurrentProducts(
            products.filter((data) => data.category === category)
        );
    }

    return (
        <>
            <div>
                <Cart
                    quantity={order.length}
                    handleCardDisplay={handleCardDisplay}
                />
                <Categories chooseCategory={chooseCategory} />
                {products.length ? (
                    <ProductList
                        products={currentProducts}
                        addToCart={addToCart}
                    />
                ) : (
                    <Preloader />
                )}
                {isCartDisplayed && (
                    <CartList
                        order={order}
                        handleCardDisplay={handleCardDisplay}
                        removeFromCart={removeFromCart}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                )}
                {alertTitle && (
                    <Alert title={alertTitle} closeAlert={closeAlert} />
                )}
            </div>
        </>
    );
}

export { Home };
