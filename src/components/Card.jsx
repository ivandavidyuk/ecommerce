import { useParams, useNavigate } from 'react-router-dom';

function Card(props) {
    const { card } = props;
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="cardItem" id={id}>
            <div className="cardItem-image">
                <img src={card.image} alt={card.title} />
            </div>
            <div className="cardItem-content">
                <span className="cardItem-title">{card.title}</span>
                <span className="price right">${card.price}</span>
                <span className="description right">{card.description.slice(0, 120)}...</span>
            </div>
            <button className="btn light-blue darken-2" onClick={() => navigate('/')}>
                    Go back
                </button>
        </div>
    );
}

export { Card };
