 import styles from './header.module.scss'

 export default function Header(){

    return(
        <div className={styles.headerContainer}>
            <h1> Github Cards </h1>
            <p> A page to test React JS and API's</p>
        </div>
    )
 }