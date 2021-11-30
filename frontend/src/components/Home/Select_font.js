export function Select_font(props){
//deconstruct props
const {color1, color2, handleChange} = props;
return (
  <select className="select_font" style={{backgroundColor: color1, borderColor: color2}} name='option' onChange={handleChange}>
    <option value='Arial'>Arial</option>
    <option value='Copperplate Gothic'>Copperplate Gothic</option>
    <option value='fantasy'>fantasy</option>
    <option value='Brush Script MT'>Brush Script MT</option>
    <option value='Comic Sans MS'>Comic Sans MS</option>
    <option value="American Typewriter">American Typewriter</option>
    <option value="Courier">Courier</option>
    <option value="Arial Black">Arial Black</option>
    <option value="Luminari">Luminari</option>
    </select>
)
  
}
