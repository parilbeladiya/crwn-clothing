import { Fragment} from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';


const CategoriesPreview = () => {
    const CategoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <Fragment>
            { isLoading ? ( 
            <Spinner/> 
            ) : (
                Object.keys(CategoriesMap).map((title) => {
                    const products = CategoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    );
                })
            )}
        </Fragment>
    );
};

export default CategoriesPreview;