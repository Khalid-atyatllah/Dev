import ChocolatesProductPage from '../components/ProductPage/ChocolatesProductPage';

const ChocolateSelectionLayout = ({ onContinue, onBack }) => (
  <ChocolatesProductPage
    title="Select Your Chocolates"
    onContinue={onContinue}
    onBack={onBack}
  />
  
);

export default ChocolateSelectionLayout;
