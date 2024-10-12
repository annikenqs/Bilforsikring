import React, { useState, useEffect } from "react";
import RadioButton from "../RadioButton/RadioButton";
import { fetchMockData, InsuranceOption } from "../../utils/fetchMockData"; 

const RadioButtonGroup: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [options, setOptions] = useState<InsuranceOption[]>([]);

  useEffect(() => {
    const getOptions = async () => {
      const data = await fetchMockData();
  
      const randomIndex = Math.floor(Math.random() * data.length);
      const updatedData = data.map((option: InsuranceOption, index: number) =>
        index === randomIndex ? { ...option, recommended: true } : { ...option }
      );
      
      setOptions(updatedData);
    };
    getOptions();
  }, []);

  const sortedOptions = [...options].sort((a, b) => b.price - a.price);
  
  const handleOptionChange = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <section>
      {sortedOptions.map((option, index) => (
        <RadioButton
          key={index}
          title={option.title}
          description={option.description}
          price={option.price}
          recommended={option.recommended}
          selected={selectedOption === index}
          onChange={() => handleOptionChange(index)}
        />
      ))}
    </section>
  );
};

export default RadioButtonGroup
