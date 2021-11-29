const hextoRgb = hex => {
  return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}
const rgbToHex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


const complimentaryColor = (rgb, number) => {
 const r = rgb[0];
 const g = rgb[1];
 const b = rgb[2]; 
 const compR = number - r;
 const compG = number - g;
 const compB = number - b;
 return `rgb(${compR}, ${compG}, ${compB})`
}

const increaseBrightness = (hex, percent) => {
   // strip the leading # if it's there
   hex = hex.replace(/^\s*#|\s*$/g, '');

   // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
   if(hex.length == 3){
       hex = hex.replace(/(.)/g, '$1$1');
   }

   var r = parseInt(hex.substr(0, 2), 16),
       g = parseInt(hex.substr(2, 2), 16),
       b = parseInt(hex.substr(4, 2), 16);

   return '#' +
      ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
      ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
      ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}


export {hextoRgb, complimentaryColor, increaseBrightness}