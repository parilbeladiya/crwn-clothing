import { Fragment} from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';


const CategoriesPreview = () => {
    const CategoriesMap = useSelector(selectCategoriesMap);

    return (
        <Fragment>
            { Object.keys(CategoriesMap).map((title) => {
                const products = CategoriesMap[title];
                return (
                     <CategoryPreview key={title} title={title} products={products} />
                );
            })}
        </Fragment>
    );
};

export default CategoriesPreview;