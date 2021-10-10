import React, { useState } from 'react';
import './TrafficLights.css';

// function TrafficLights({ startingLight }) {
//   const [redLightOn, setRedLightOn] = useState(false);
//   const [amberLightOn, setAmberLightOn] = useState(false);
//   const [greenLightOn, setGreenLightOn] = useState(false);

//   if ({ startingLight } === 'green') {
//     setGreenLightOn(true);
//   } else if ({ startingLight } === 'amber') {
//     setAmberLightOn(true);
//   } else {
//     setRedLightOn(true);
//   }

//   function AllLightsReset() {
//     setRedLightOn(false);
//     setAmberLightOn(false);
//     setGreenLightOn(false);
//   }

//   return (
//     <>
//       <div className="traffic-light-container">
//         <div
//           className={redLightOn === true ? 'red-light' : 'red-light light-off'}
//         ></div>
//         <div
//           className={
//             amberLightOn === true ? 'amber-light' : 'amber-light light-off'
//           }
//         ></div>
//         <div
//           className={
//             greenLightOn === true ? 'green-light' : 'green-light light-off'
//           }
//         ></div>
//       </div>
//       <button onClick={() => setRedLightOn(true)}>Stop</button>
//       <button onClick={() => setAmberLightOn(true)}>Caution</button>
//       <button onClick={() => setGreenLightOn(true)}>Go</button>
//       <button onClick={() => AllLightsReset()}>Reset</button>
//     </>
//   );
// }

type startingLightType = {
  startingLight: 'green' | 'amber' | 'red' | 'none';
};

function TrafficLights({ startingLight }: startingLightType) {
  const [activeLight, setActiveLight] = useState({ startingLight });

  function LightReset() {
    setActiveLight('none');
  }

  return (
    <>
      <div className="traffic-light-container">
        <div
          className={`red-light ${activeLight === 'red' ? '' : 'light-off'}`}
        ></div>
        <div
          className={`amber-light ${
            activeLight === 'amber' ? '' : 'light-off'
          }`}
        ></div>
        <div
          className={`green-light ${
            activeLight === 'green' ? '' : 'light-off'
          }`}
        ></div>
      </div>
      <button onClick={() => setActiveLight('red')}>Stop</button>
      <button onClick={() => setActiveLight('amber')}>Caution</button>
      <button onClick={() => setActiveLight('green')}>Go</button>
      <button onClick={() => LightReset()}>Reset</button>
    </>
  );
}

export default TrafficLights;
