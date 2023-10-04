import { useEffect, useState } from 'react';
import { getAllCategories } from '../api';

function Categories(props) {
    const { chooseCategory } = props;
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            data.unshift('all');
            setCategoryList(data);
        });
    }, []);

    const categories = categoryList.map((category) => (
        <li key={category}>
            <a onClick={() => chooseCategory(category)}>
                {category}
            </a>
        </li>
    ));

    return (
        <ul className="center hide-on-med-and-down categories">
            <>{categories}</>
        </ul>
    );
}

export { Categories };
