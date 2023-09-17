import { useState } from 'react';
import styles from './CakeDetailsCard.module.css';

import { addItem } from '../../slices/cartSlice';
import { useDispatch } from 'react-redux';

import SelectInput from '../utils/SelectInput';

export default function CakeDetailsCard({ cake, setIsMiniCartOpen }) {
  const [size, setSize] = useState(cake.variants[0].size);
  const [price, setPrice] = useState(cake.variants[0].price);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState(cake.variants[0].stock);
  const [options, setOptions] = useState(
    Array.from({ length: stock > 10 ? 10 : stock }, (_, i) => i + 1)
  );

  const dispatch = useDispatch();

  const handleAddItemToCart = function () {
    setIsMiniCartOpen(true);

    dispatch(
      addItem({
        id: cake._id,
        size: Number.parseInt(size),
        price: Number.parseFloat(price),
        quantity: Number.parseInt(quantity, 10),
        stock: Number.parseInt(stock, 10),
        name: cake.name,
      })
    );
  };

  const handleSizeChange = function (selectedSize) {
    setSize(selectedSize);
    const variant = cake.variants.find((el) => el.size == selectedSize);
    setOptions(
      Array.from(
        { length: variant.stock > 10 ? 10 : variant.stock },
        (_, i) => i + 1
      )
    );

    setPrice(variant.price);
    setStock(variant.stock);
  };

  const handleQtyChange = function (qty) {
    setQuantity(qty);
  };

  return (
    <div className={styles.cakeDetailsCard}>
      <h3 className={styles.cakeDetailsCardHeader}>{cake.name}</h3>
      <p className={styles.description}>{cake.description}</p>
      <p className={styles.price}>Price: ${price}</p>

      <SelectInput
        options={cake.variants}
        setter={handleSizeChange}
        path={'size'}
        style={{ marginBottom: '.5rem' }}
      >
        Size
      </SelectInput>

      <br />

      <SelectInput options={stock} setter={handleQtyChange} key={size}>
        Qty
      </SelectInput>

      <button className={styles.addToCartBtn} onClick={handleAddItemToCart}>
        Add To Cart
      </button>
    </div>
  );
}
