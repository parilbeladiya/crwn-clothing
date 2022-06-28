import './authentication.style.scss';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {

    return (
        <div className='authentication-conatainer'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
};

export default Authentication;