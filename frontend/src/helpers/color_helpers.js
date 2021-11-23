const hextoRgb = hex => {
  return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];

}

const complimentaryColor = (rgb, number) => {
 const r = rgb[0];
 const g = rgb[1];
 const b = rgb[2]; 
 const compR = r + number;
 const compG = g + number;
 const compB = b + number;
 return [compR, compG, compB]
}

export {hextoRgb, complimentaryColor}