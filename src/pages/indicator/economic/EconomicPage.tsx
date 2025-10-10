import React, { useState, useMemo } from "react";
import Calendar from "./components/Calendar"

const EconomicPage = () => {
  const [pickedRange, setPickedRange] = useState<{
    start: Date;
    end: Date;
  } | null>(null);

  return (
    <div>
      <Calendar/>    
    </div>
  );
};

export default EconomicPage;