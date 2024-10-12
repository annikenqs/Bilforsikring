export interface InsuranceOption {
    title: string;
    description: string;
    price: number;
    recommended: boolean;
  }

export const fetchMockData = async () => {
    try {
      const response = await fetch("/insuranceOptions.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  