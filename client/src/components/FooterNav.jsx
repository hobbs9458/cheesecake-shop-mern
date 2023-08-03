import styles from './FooterNav.module.css';

import { NavLink } from 'react-router-dom';

export default function FooterNav() {
  return (
    <nav className={styles.footerNav}>
      <ul>
        <li>
          <NavLink
            to={'/'}
            className={({ isActive }) =>
              isActive
                ? `${styles.footerLink} ${styles.active}`
                : `${styles.footerLink}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/contact'}
            className={({ isActive }) =>
              isActive
                ? `${styles.footerLink} ${styles.active}`
                : `${styles.footerLink}`
            }
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/my-account'}
            className={({ isActive }) =>
              isActive
                ? `${styles.footerLink} ${styles.active}`
                : `${styles.footerLink}`
            }
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/cart'}
            className={({ isActive }) =>
              isActive
                ? `${styles.footerLink} ${styles.active}`
                : `${styles.footerLink}`
            }
          >
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
