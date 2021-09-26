export const colors = [
  { name: "Black", kelvin: 0, value: "0,0,0" },
  { name: "Candle", kelvin: 1900, value: "255,147,41" },
  { name: "40W Tungsten", kelvin: 2600, value: "255, 197, 143  " },
  { name: "100W Tungsten", kelvin: 2850, value: "255, 214, 170" },
  { name: "Halogen", kelvin: 3200, value: "255, 241, 224" },
  { name: "Carbon Arc", kelvin: 5200, value: "255, 250, 244" },
  { name: "High Noon Sun", kelvin: 5400, value: "255, 255, 251" },
  { name: "Direct Sunlight", kelvin: 6000, value: "255, 255, 255" },
  { name: "Overcast Sky", kelvin: 7000, value: "201, 226, 255" },
  { name: "Clear Blue Sky", kelvin: 20000, value: "64, 156, 255" },
]

export function coloredLog(name, color) {
  console.log(`%c -> ${name}: ${color}`, `color: rgb(${color})`)
}
const randomBetween = (min, max) =>
  min + Math.floor(Math.random() * (max - min + 1))

export function randomRGB() {
  return `${randomBetween(0, 255)}, ${randomBetween(0, 255)}, ${randomBetween(
    0,
    255
  )}`
}