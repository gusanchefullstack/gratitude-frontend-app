import { createContext, useState, useEffect } from "react";
// import { type Gratitude } from "../models/Gratitude";

const GratitudeListContext = createContext({
  myGratitude:[]
});

export function GratitudeListContextProvider({ children }) {
  const [gratitudeList, setGratitudeList] = useState([]);

  useEffect(() => {
    const fetchGratitudes = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/gratitudes")
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`)
        }
        const payload = await response.json()
        setGratitudeList(payload.data)
      
      } catch (error) {
        console.log(error.message)
      }
    };
    fetchGratitudes()
  },[])

  const gratitudeListCtxValue = {
    myGratitude: gratitudeList,
  };
  return (
    <GratitudeListContext value={gratitudeListCtxValue}>
      {children}
    </GratitudeListContext>
  );
}

export default GratitudeListContext;
