import styles from './AdminProductScreen.module.css';

import { useState } from 'react';

import AdminFormHeader from '../../components/admin/AdminFormHeader';
import AdminProductForm from '../../components/admin/AdminProductForm';
import BaseProductFormInputs from '../../components/admin/BaseProductFormInputs';
import AdminFormBtn from '../../components/admin/AdminFormBtn';
import CreateVariantForm from '../../components/admin/CreateVariantForm';
import VariantPreview from '../../components/admin/VariantPreview';
import AdminBackLink from '../../components/admin/AdminBackLink';

const updateBtnStyles = {
  color: 'var(--black)',
  background: 'var(--green)',
  marginBottom: '5px',
};

const createVariantBtnStyles = {
  color: 'white',
  background: 'var(--purple)',
  maxWidth: '700px',
  marginBottom: '5px',
  marginTop: '5px',
};

const deleteProductBtnStyles = {
  color: 'white',
  background: 'var(--error)',
  marginTop: '5px',
};

export default function AdminProductScreen() {
  const [createVariant, setCreateVariant] = useState(false);
  const [isVariants] = useState(true);

  return (
    <div className={styles.screen}>
      <AdminBackLink to='products' />

      <AdminProductForm>
        <AdminFormHeader>Edit Product</AdminFormHeader>
        <BaseProductFormInputs />
        <AdminFormBtn propStyles={updateBtnStyles}>Update Product</AdminFormBtn>
        {!createVariant && (
          <AdminFormBtn
            onClick={() => setCreateVariant((prevState) => !prevState)}
            propStyles={createVariantBtnStyles}
          >
            Create Variant
          </AdminFormBtn>
        )}
      </AdminProductForm>
      <AdminFormBtn propStyles={deleteProductBtnStyles}>
        Delete Product
      </AdminFormBtn>

      {createVariant && (
        <CreateVariantForm setCreateVariant={setCreateVariant} />
      )}

      {isVariants && (
        <>
          <h3 className={styles.variantsHeader}>Variants</h3>
          {/* map through previews */}
          <VariantPreview />
          <VariantPreview />
          <VariantPreview />
        </>
      )}
    </div>
  );
}
