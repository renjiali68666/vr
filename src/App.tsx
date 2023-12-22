// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import VrReact from "vr-react";
import Image from "./assets/VR.jpg";
const scenes = {
  oneScene: {
    type: "equirectangular",
    panorama: Image,
  },
};
export const App = () => {
  return (
    <VrReact
      config={{ hfov: 80 }}
      orientationOnByDefault
      scenes={scenes}
      width="100vw"
      height="56.25vw"
    />
  );
};
