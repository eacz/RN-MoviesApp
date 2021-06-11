import React, { createContext, useState } from "react";

interface ImageColors {
  primary: string,
  secondary: string
}

interface ContextProps {
  colors: ImageColors,
  prevColors: ImageColors,
  setActualColors: (colors: ImageColors) => void,
  setPreviousColors: (colors: ImageColors) => void,
}

export const GradientContext = createContext({} as ContextProps);



const GradientProvider = ({children}: any)  => {

  const [colors , setColors  ] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const setActualColors = (colors: ImageColors) => {
    setColors(colors);
  }

  const setPreviousColors = (colors: ImageColors) => {
    setPrevColors(colors);
  }

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setActualColors,
        setPreviousColors
      }}
    >
      {children}
    </GradientContext.Provider>
  )
}


export default GradientProvider