import styles from './Reviews.module.css'
import Star from './Star.jsx'
import Dropdown from './Dropdown.jsx'
import ReviewEntry from './ReviewEntry.jsx'
import ReviewNavBar from './ReviewNavBar.jsx'

const Reviews = () => {
    return (
        <div className={styles.reviewContainer}>
            <div className={styles.reviewHeaderContainer}>
                <h2>7,137 reviews</h2>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>

                <div className={styles.dataButtons}>
                    <button>Reviews for this item
                        <span className={styles.tabCounter}>154</span>
                    </button>
                    <button>Reviews for this shop
                        <span className={styles.tabCounter}>7,137</span>
                    </button>
                </div>

                <div className={styles.sortBy}>
                    <button className={styles.sortByBtn}>   
                        <span className={styles.dropdowntext}>Sort by: Suggested</span>
                        <span><Dropdown /></span>
                    </button>
                </div>
                <div className={styles.entryContainer}>
                    <ReviewEntry />
                    <ReviewEntry />
                    <ReviewEntry />
                    <ReviewEntry />
                </div>
                <div className={styles.reviewNavContainer}>
                    <ReviewNavBar />
                </div>
        </div>
    )
}

export default Reviews

