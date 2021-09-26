import colors from "~/colors"
import "./ColorChanger.css"

export default function ColorChanger({ globalColor, onChangeColor }) {
  return (
    <div class="colorChangers">
      {colors.map(({ name, kelvin, value }) => (
        <button
          style={{ background: `rgb(${value})` }}
          class={`increment ${globalColor() === value ? "selected" : ""}`}
          onClick={() => onChangeColor(value)}
        />
      ))}
    </div>
  )
}
