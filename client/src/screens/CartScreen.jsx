import styles from "./CartScreen.module.css";
import cake1 from "../assets/images/cart-cake.png";
import cake2 from "../assets/images/cart-cake-2.png";
import Summary from "../components/Summary";
import CartHeader from "../components/mini-cart/CartHeader";
import OrderCard from "../components/mini-cart/OrderCard";
export default function CartScreen() {
  return (
    <div className={styles.cartScreen}>
      <img className={styles.topCake} src={cake1} alt="berry cheesecake" />
      <h1 className={styles.cartHeader}>Cart</h1>
      <Summary />
      <div className={styles.OrdersContainer}>
        <CartHeader />
        <OrderCard />
      </div>
      <img className={styles.bottomCake} src={cake2} alt="berry cheesecake" />
    </div>
  );
}
