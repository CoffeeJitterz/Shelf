import React, { useState } from "react";

export function ToggleWindow(initial){
  const [mode, setMode] = useState(initial)

  const toggle = (newMode) => {   
      setMode(newMode)    
  }
  return {mode, toggle}
}