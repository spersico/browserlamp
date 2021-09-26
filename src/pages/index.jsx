import Counter from "~/components/Counter"
import "./index.css"

export default function Home() {
  return (
    <main style={{ background: "black" }}>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  )
}
