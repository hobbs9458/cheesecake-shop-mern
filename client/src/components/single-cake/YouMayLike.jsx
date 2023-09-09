import styles from './YouMayLike.module.css';

import ShopCakeCard from '../shop/ShopCakeCard';
import { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

export default function YouMayLike({ cake }) {
  const [theRandomCakes, setTheRandomCakes] = useState([]);

  const data = useSelector((state) => state.products);

  let cakes;

  if (data) {
    cakes = data;
  }

  const findRandomCakes = useCallback(
    function (numRandomCakes) {
      const randomCakeNamesSet = new Set();
      let count = 0;

      while (count < numRandomCakes) {
        const num = Math.floor(Math.random() * cakes.length);
        const randomCakeName = cakes[num].name;

        if (
          !randomCakeNamesSet.has(randomCakeName) &&
          randomCakeName !== cake.name
        ) {
          randomCakeNamesSet.add(randomCakeName);
          count++;
        }
      }

      return cakes.filter((cakeCard) => randomCakeNamesSet.has(cakeCard.name));
    },
    [cake.name, cakes]
  );

  useEffect(() => {
    if (data) {
      setTheRandomCakes(findRandomCakes(3));
    }
  }, [cake, data, findRandomCakes]);

  return (
    <>
      <h4 className={styles.youMayLikeHeader}>You May Also Like</h4>
      <div className={styles.youMayLikeCakeWrap}>
        {theRandomCakes &&
          theRandomCakes.map((cake, index) => (
            <ShopCakeCard key={index} cake={cake}>
              {cake.name}
            </ShopCakeCard>
          ))}
      </div>
    </>
  );
}
