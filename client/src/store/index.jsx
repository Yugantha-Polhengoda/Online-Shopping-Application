import { proxy } from "valtio";

const state = proxy({
    intro: true,
    // color:'#EFBD48',
    color:'#50e3c2',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal:'./lumion.png',
    fullDecal: './threejs.png',
});

export default state;