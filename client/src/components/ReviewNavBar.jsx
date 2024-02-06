import styles from './ReviewNavBar.module.css'


const reviewNavBar = () => {
    return (
        <div className={styles.reviewNavContainer}>
            <div className={styles.reviewNavBarElement}>
                <span>&lt;-</span>
            </div>
            <div className={styles.reviewNavBarElement}>
                <span>1</span>
            </div>
            <div className={styles.reviewNavBarElement}>
                <span>2</span>
            </div>
            <div className={styles.tripleDotElement}>
                <p>...</p>
            </div>
            <div className={styles.reviewNavBarElement}>
                <span>39</span>
            </div>
            <div className={styles.reviewNavBarElement}>
                <span>-&gt;</span>
            </div>
        </div>
    )
}

export default reviewNavBar