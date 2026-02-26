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
        const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjAxOWQ3ZWRlLTMzNzgtNGIxYy04NWRkLTQ4YzRiMGVkYzFkYyIsImVtYWlsIjoiZ3VzYW5jaGUiLCJ1c2VybmFtZSI6Imd1c2FuY2hlIiwiaWF0IjoxNzcyMDUwODcwLCJleHAiOjE3NzIxMzcyNzB9.ejZmc4kLl9WxkkFznt93MHE67vMpnqLby8B4aLxi7_s"
        const response = await fetch("http://localhost:3000/api/v1/gratitudes", {
          headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
          }
          
        })
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
