import styles from './ReviewNavBar.module.css'


const reviewNavBar = () => {
    return (
        <div className={styles.reviewNavContainer}>
            <div className={styles.reviewNavBarElement}>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
                        <path d="M6.7 11.3L6 12l.7.7 4 4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L9.8 13H17c.6 0 1-.4 1-1s-.4-1-1-1H9.8l2.3-2.3c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-.3 0-.5.1-.7.3l-4 4z"></path>
                    </svg>
                </span>
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
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
                        <path d="M17.3 12.7l.7-.7-.7-.7-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h7.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4z"></path>
                    </svg>
                </span>
   
            </div>
        </div>
    )
}

export default reviewNavBar