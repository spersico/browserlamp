import { colors } from "~/colors"
import "./MainSwitch.css"

export default function MainSwitch({ lastColor, isOn, onChangeColor }) {

  return (
    <div
      class="main-switch"
      onClick={(e) => {
        onChangeColor(e.target.checked ? lastColor() : colors[0].value)
      }}
    >
      <input type="checkbox" class="checkbox" checked={isOn()} />
      <div class="knobs">
        <span>OFF</span>
      </div>
      <div class="layer"></div>
    </div>
  )
}
