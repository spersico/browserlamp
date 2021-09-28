import './ColorPicker.css';

export default function ColorPicker({ globalColor, onChangeColor }) {
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
      onChangeColor(hexColor);
    } else {
      return null;
    }
  };
  return (
    <div class='colorPicker'>
      <label id='label'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlns:xlink='http://www.w3.org/1999/xlink'
          version='1.1'
          id='Capa_1'
          x='0px'
          y='0px'
          width='50px'
          height='50px'
          viewBox='0 0 390.954 390.955'
          style='enable-background:new 0 0 390.954 390.955;color: white'
          xml:space='preserve'
        >
          <g>
            <g>
              <path d='M377.314,27.704C360.761,0.494,325.283-8.145,298.076,8.41l-52.561,31.977l-3.607-5.932    c-10.484-17.229-32.947-22.7-50.179-12.218C174.5,32.72,169.032,55.184,179.512,72.415l7.162,11.771L60.314,161.652    c-11.612,7.065-30.483,32.364-35.989,39.95c-2.97,4.09-3.191,9.563-0.565,13.881l24.784,40.738    c2.627,4.317,7.591,6.637,12.587,5.88c9.269-1.402,40.41-6.529,52.024-13.596l126.357-77.467l7.161,11.771    c10.481,17.229,32.946,22.7,50.178,12.217c17.229-10.481,22.699-32.946,12.217-50.177l-3.607-5.93l52.561-31.978    C385.229,90.389,393.868,54.912,377.314,27.704z M100.124,227.084l-0.694-59.882l85.469-52.59    c0.715,8.641,3.392,17.25,8.204,25.161c4.812,7.911,11.229,14.245,18.571,18.853L100.124,227.084z' />
              <path d='M52.666,276.584c-1.823-1.458-4.413-1.459-6.238-0.003C44.745,277.922,5.23,309.82,5.23,343.554    c0,27.909,18.223,47.4,44.314,47.4c26.836,0,46.314-19.936,46.314-47.4C95.859,311.472,54.43,277.995,52.666,276.584z     M55.582,378.402c-0.414,0.104-0.829,0.155-1.237,0.155c-2.231,0-4.266-1.506-4.842-3.769c-0.68-2.672,0.931-5.389,3.6-6.075    c0.915-0.241,20.916-5.754,20.913-25.823c0-2.762,2.237-5,4.999-5.001c2.762,0,5.001,2.238,5.001,4.999    C84.02,365.254,65.417,375.898,55.582,378.402z' />
            </g>
          </g>
        </svg>
        <input
          type='color'
          hidden
          value={globalColor}
          placeholder='Username'
          onInput={(e) => {
            pickerHexToRgb(e.target.value);
          }}
        />
      </label>
    </div>
  );
}