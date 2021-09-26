import "./Popup.css"
import { createEffect, createSignal } from "solid-js"

export default function Popup({ id, buttonContent, children }) {
  let ref
  const [isOpen, setIsOpen] = createSignal("initial")

  function escapeListener(e) {
    if (e.key === "Escape") setIsOpen("closed")
  }

  function clickListener(e) {
    if (!ref?.contains(e.target)) setIsOpen("closed")
  }

  createEffect(() => {
    if (isOpen() === "open") {
      document.addEventListener("click", clickListener)
      document.addEventListener("keyup", escapeListener)
    } else {
      document.removeEventListener("click", clickListener)
      document.removeEventListener("keyup", escapeListener)
    }
  })

  return (
    <div class="popup" ref={ref} id={id}>
      <button
        class={`popupOpener ${isOpen()}`}
        onClick={() =>
          setIsOpen(() => (isOpen() === "open" ? "closed" : "open"))
        }
      >
        {buttonContent}
      </button>
      <span class={`popuptext ${isOpen()}`} id={`popup_content_${id}`}>
        {children}
      </span>
    </div>
  )
}
