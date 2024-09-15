import { proxy } from "valtio";

const state = proxy({
  intro: true,
  // color:'#EFBD48',
  color: "#1d4e57",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./LOGO - Copy.png",
  fullDecal: "./threejs.png",
});

export default state;