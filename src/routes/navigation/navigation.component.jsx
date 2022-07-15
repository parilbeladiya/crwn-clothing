import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { LogoConatiner, NavigationConatiner, NavLinks, NavLink} from './navigation.style';
 



const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationConatiner>

        <LogoConatiner to='/'>
        <CrwnLogo className='logo' />
        </LogoConatiner>

        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          { currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) :(
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          ) }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationConatiner>
      <Outlet/>
    </Fragment>
  );
};

export default Navigation;