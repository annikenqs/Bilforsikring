import React, { useState } from "react";
import "./ComparisonComponent.css";

const Comparison: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);

  const handleToggleComparison = () => {
    setShowComparison(!showComparison);
  };

  return (
    <section className="comparison-container">
      <button 
        className="comparison-toggle" 
        onClick={handleToggleComparison} 
        aria-expanded={showComparison}
      >
        {showComparison ? "Skjul sammenligning" : "Sammenlign dekninger"}
      </button>
      {showComparison && (
        <p>Her skal det dukke opp en sammenligning av de ulike dekningene.</p>
      )}
    </section>
  );
};

export default Comparison;
