import { useContext, useState, useEffect, Fragment } from 'react';

import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './category.style.scss';

const Category = () => {
    const { category } = useParams();
    const { CategoriesMap } = useContext(CategoriesContext);
    const[ products, setProducts ] = useState(CategoriesMap[category]);

    useEffect(() => {
        setProducts(CategoriesMap[category]);

    }, [category, CategoriesMap]);

    return (
        <Fragment>
         <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
            {products && products.map((product) => (
                <ProductCard key={product.id} product={product} />                
            ))}
        </div>
        </Fragment>
    );

};

export default Category;