import { createSignal } from 'solid-js';
import { render } from 'solid-js/web';

import './index.css';
import { colors, coloredLog } from './colors';
import MainSwitch from './components/MainSwitch';
import ColorChanger from './components/ColorChanger';
import Footer from './components/Footer';

function Home() {
  const [globalColor, setGlobalColor] = createSignal(colors[0].value);
  const [lastColor, setLastColor] = createSignal(colors[1].value);
  const [lampIsOn, setLampSwitch] = createSignal(false);

  const onChangeGlobalColor = (newColor) => {
    setLampSwitch(newColor !== colors[0].value);
    if (globalColor() !== colors[0].value && lastColor() !== globalColor()) {
      setLastColor(globalColor());
    }
    setGlobalColor(newColor);
    coloredLog('last', lastColor());
    coloredLog('global', globalColor());
  };

  const pickerHexToRgb = (hex) => {
    hex = hex.replace(/#/g, '');
    if (hex.length === 3) {
      hex = hex
        .split('')
        .map(function (hex) {
          return hex + hex;
        })
        .join('');
    }
    // validate hex format
    let result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(
      hex
    );
    if (result) {
      let red = parseInt(result[1], 16);
      let green = parseInt(result[2], 16);
      let blue = parseInt(result[3], 16);

      const hexColor = `${red},${green},${blue}`;
      onChangeGlobalColor(hexColor);
    } else {
      return null;
    }
  };

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
      <input
        type='color'
        value={globalColor}
        onInput={(e) => {
          pickerHexToRgb(e.target.value);
        }}
      />
      <Footer />
    </main>
  );
}

render(Home, document.getElementById('root'));
