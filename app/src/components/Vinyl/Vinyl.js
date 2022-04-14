import styles from './Vinyl.module.css'
import arcticOak from '../../assets/images/arctic_oak.jpg'

const Vinyl = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.header}>NextFloor - Amazing</p>
        <div className={styles.gridContainer}>
          <div className={styles.productContainer}>
            <img src={arcticOak} className={styles.image}/>
            <p className={styles.title}>Arctic Oak</p>
            <button>Availability</button>
            <button>Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vinyl;