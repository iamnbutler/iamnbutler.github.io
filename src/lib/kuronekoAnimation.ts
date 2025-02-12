import type { ImageMetadata } from "astro";
import frame1 from "../assets/kuro/kuroneko_blink_01.svg";
import frame2 from "../assets/kuro/kuroneko_blink_02.svg";
import frame3 from "../assets/kuro/kuroneko_blink_03.svg";
import frame4 from "../assets/kuro/kuroneko_blink_04.svg";
import frame5 from "../assets/kuro/kuroneko_blink_05.svg";
import frame6 from "../assets/kuro/kuroneko_blink_06.svg";
import frame7 from "../assets/kuro/kuroneko_blink_07.svg";
import frame8 from "../assets/kuro/kuroneko_blink_08.svg";
import frame9 from "../assets/kuro/kuroneko_blink_09.svg";
import frame10 from "../assets/kuro/kuroneko_blink_10.svg";
import frame11 from "../assets/kuro/kuroneko_blink_11.svg";
import frame12 from "../assets/kuro/kuroneko_blink_12.svg";
import frame13 from "../assets/kuro/kuroneko_blink_13.svg";
import frame14 from "../assets/kuro/kuroneko_blink_14.svg";
import frame15 from "../assets/kuro/kuroneko_blink_15.svg";

export const frameData: ImageMetadata[] = [
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  frame8,
  frame9,
  frame10,
  frame11,
  frame12,
  frame13,
  frame14,
  frame15,
];

const frameOverrides: Record<number, number> = {};
const defaultFrameDuration = 40; // ms

export function animateKuroneko(imageElement: HTMLImageElement): void {
  let currentFrame = 0;

  function animateFrames() {
    const totalFrames = frameData.length;
    const nextFrame = (currentFrame + 1) % totalFrames;

    const duration = frameOverrides[currentFrame] || defaultFrameDuration;

    imageElement.src = frameData[currentFrame].src;
    currentFrame = nextFrame;

    if (currentFrame === 0) {
      setTimeout(startAnimation, 12000);
    } else {
      setTimeout(animateFrames, duration);
    }
  }

  function startAnimation() {
    currentFrame = 0;
    imageElement.src = frameData[currentFrame].src;
    animateFrames();
  }

  startAnimation();
}
