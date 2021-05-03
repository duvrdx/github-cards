import styles from './footer.module.scss'

export default function Footer(){

    return(
        <div className={styles.containerFooter}>
            <p>Made by <a href="#">@duvrdx</a> with <a href="#">ReactJS</a></p>
            <span>Give a &#11088; on <a href="#">repository</a> </span>
        </div>
    )
}