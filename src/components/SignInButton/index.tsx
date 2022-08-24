import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton(){
    const isUserLogged = true;

    return isUserLogged ? (
        <button type='button' className={styles.signInButton}>
            <FaGithub color='#04d361' />
           G-bolsoni
           <FiX color='#737380' className={styles.closeIcon}/>
        </button>
    ) : (
        <button type='button' className={styles.signInButton}>
            <FaGithub color='#eba417' />
            Sign in with Github
        </button>
    )
}