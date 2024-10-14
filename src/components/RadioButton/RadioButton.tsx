import React from "react";
import "./RadioButton.css";
import { InsuranceOption } from "../../utils/fetchMockData";

interface RadioButtonProps
  extends Pick<InsuranceOption, "title" | "description" | "price" | "recommended"> {
  selected: boolean;
  onChange: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  title,
  description,
  price,
  selected,
  recommended,
  onChange,
}) => {
  const uniqueId = `radio-${title}`;
  return (
    <label className={`radio-button ${selected ? "selected" : ""} ${ recommended ? "recommended" : "" }`}>
      {recommended && <span className="recommended-badge">Anbefalt</span>}
      <input
        type="radio"
        id={uniqueId}
        name="insurance-options"
        checked={selected}
        value={title}
        onChange={onChange}
      />
      <span className="checkmark" aria-hidden="true"></span>
      <div className="radio-content">
        <div className="radio-header">
          <h4>{title}</h4>
          <p>{price} kr/md.</p>
        </div>
        {selected && description && (
          <p className="radio-description">{description}</p>
        )}
      </div>
    </label>
  );
};

export default RadioButton;
