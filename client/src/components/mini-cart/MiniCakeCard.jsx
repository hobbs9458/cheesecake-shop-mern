import { useLocation } from 'react-router-dom';
import styles from './MiniCakeCard.module.css';

import cake from '../../assets/images/mobile/mobile-cakes-38w/red-velvet-38w.jpg';
import cakeLarge from '../../assets/images/mobile/mobile-cakes-75w/red-velvet-75w.jpg';

export default function MiniCakeCard() {
  let location = useLocation();
  const onCheckout = location.pathname === '/checkout';
  return (
    <div className={styles.miniCakeCardContainer}>
      <picture>
        <source media='(min-width: 744px)' srcSet={cakeLarge} />
        <img
          src={cake}
          alt='small image of cake'
          className={styles.miniCakeCardImg}
        />
      </picture>

      <p
        className={`${styles.miniCakeCardName} ${
          onCheckout ? styles.largeText : ''
        } `}
      >
        Creamy cheesecake with fruit, sprinkles, and caramel!
      </p>
    </div>
  );
}
