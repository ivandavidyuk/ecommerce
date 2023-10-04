import { getProductById } from '../api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card } from "../components/Card";
import { Preloader } from '../components/Preloader';

function ProductCard() {
    const [card, setCard] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getProductById(id).then((data) => setCard(data));
    }, [id]);


    return card.id ? (<Card card={card}/>) : <Preloader/>;
}

export { ProductCard };
