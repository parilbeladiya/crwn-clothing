import { useContext, Fragment } from 'react';

import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './shop.style.scss';


const Shop = () => {
    const { CategoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            { Object.keys(CategoriesMap).map((title) => (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className='products-container'>
                            {CategoriesMap[title].map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))};
                        </div>
                    </Fragment>
            ))};
        </Fragment>
    );
};

export default Shop;