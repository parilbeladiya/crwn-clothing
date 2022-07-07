import { useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import './shop.style.scss';


const Shop = () => {
    const { CategoriesMap } = useContext(CategoriesContext);
    return (
        <div className='shop-container'>
            { Object.keys(CategoriesMap).map((title) => {
                const products = CategoriesMap[title];
                return  <CategoryPreview key={title} title={title} products={products} />
            })}
        </div>
    );
};

export default Shop;