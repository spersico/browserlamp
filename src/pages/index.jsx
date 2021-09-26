import { createSignal } from "solid-js"

import "./index.css"
import { colors, coloredLog } from "~/colors"
import MainSwitch from "~/components/MainSwitch"
import ColorChanger from "~/components/ColorChanger"

export default function Home() {
  const [globalColor, setGlobalColor] = createSignal(colors[0].value)
  const [lastColor, setLastColor] = createSignal(colors[1].value)
  const [lampIsOn, setLampSwitch] = createSignal(false)

  const onChangeGlobalColor = (newColor) => {
    setLampSwitch(newColor !== colors[0].value)
    if (globalColor() !== colors[0].value && lastColor() !== globalColor()) {
      setLastColor(globalColor())
    }
    setGlobalColor(newColor)
    coloredLog("last", lastColor())
    coloredLog("global", globalColor())
  }

  return (
    <main style={{ background: `rgb(${globalColor()})` }}>
      <MainSwitch
        lastColor={lastColor}
        isOn={lampIsOn}
        onChangeColor={onChangeGlobalColor}
      />
      <ColorChanger
        globalColor={globalColor}
        onChangeColor={onChangeGlobalColor}
      />
    </main>
  )
}
