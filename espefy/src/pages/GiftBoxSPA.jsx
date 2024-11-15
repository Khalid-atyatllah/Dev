import React, { useState } from 'react';
import Header from '../layouts/Header';
import BoxSelectionLayout from '../layouts/BoxSelectionLayout';
import ChocolateSelectionLayout from '../layouts/ChocolateSelectionLayout';
import AdditionalItemsLayout from '../layouts/AdditionalItemsLayout';

const GiftBoxSPA = () => {
  const [step, setStep] = useState(1);

  const goToNextStep = () => setStep((prevStep) => prevStep + 1);
  const goToPreviousStep = () => setStep((prevStep) => prevStep - 1);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto p-8">
        {step === 1 && <BoxSelectionLayout onContinue={goToNextStep} />}
        {step === 2 && <ChocolateSelectionLayout onContinue={goToNextStep} onBack={goToPreviousStep} />}
        {step === 3 && <AdditionalItemsLayout onBack={goToPreviousStep} />}
      </main>
    </div>
  );
};

export default GiftBoxSPA;
