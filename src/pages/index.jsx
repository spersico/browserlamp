import ColorChanger from "~/components/ColorChanger"
import { createSignal } from "solid-js"

import "./index.css"
import colors from "~/colors"

export default function Home() {
  const [globalColor, setGlobalColor] = createSignal(colors[0].value)

  return (
    <main style={{ background: `rgb(${globalColor()})` }}>
      <ColorChanger globalColor={globalColor} onChangeColor={setGlobalColor} />
    </main>
  )
}
