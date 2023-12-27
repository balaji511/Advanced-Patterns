import { useMediaQuery } from "@mui/material";
import { createContext, useEffect, useState } from "react";

export interface IMobileContextType {
  isMobile: boolean;
}

export const MobileDisplayContext = createContext<IMobileContextType>({
  isMobile: false,
});

export const MobileDisplayContextProvider = ({ children }: any) => {
  const isMobileValue = useMediaQuery("(max-width:900px)");
  const [isMobile, setIsMobile] = useState<boolean>(isMobileValue);
  useEffect(() => {
    setIsMobile(isMobileValue);
  }, [isMobileValue]);
  return (
    <MobileDisplayContext.Provider value={{ isMobile }}>
      {children}
    </MobileDisplayContext.Provider>
  );
};
