import { colors } from './../colors';
import './ColorChanger.css';
import Popup from './Popup';
import ColorPicker from './ColorPicker';
import RandomColor from './RandomColor';

export default function ColorChanger({ globalColor, onChangeColor }) {
  return (
    <Popup
      id='colorChangers'
      buttonContent='Select Color 👇🏻'
      children={
        <div class='colorChangers'>
          {colors.slice(1).map(({ value }) => (
            <button
              style={{ background: `rgb(${value})` }}
              class={`${globalColor() === value ? 'selected' : ''}`}
              onClick={() => onChangeColor(value)}
            />
          ))}
          <RandomColor onChangeColor={onChangeColor} />
          <ColorPicker
            globalColor={globalColor}
            onChangeColor={onChangeColor}
          />
        </div>
      }
    />
  );
}
