import { useEffect } from 'react';

function Alert(props) {
    const { title = '', closeAlert = Function.prototype } = props;
    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerId);
        };
        // eslint-disable-next-line
    }, [title]);
    return (
        <div id="toast-container">
            <div className="toast">{title} добавлен в корзину</div>
        </div>
    );
}

export { Alert };
