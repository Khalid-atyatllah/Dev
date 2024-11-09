import ItemsProductPage from '../components/ProductPage/ItemsProductPage';

const AdditionalItemsLayout = ({ onContinue, onBack }) => (
  <ItemsProductPage
    title="Select Additional Items"
    onContinue={onContinue}
    onBack={onBack}
  />
  

);

export default AdditionalItemsLayout;
