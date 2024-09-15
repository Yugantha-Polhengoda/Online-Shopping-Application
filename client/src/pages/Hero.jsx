import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from '../store'
import { CustomButton } from '../components'

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
 } from '../config/motion'
import Content from '../components/Offers'

const Hero = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500">
                  PRINT YOUR
                </span>
                <br className="xl:block hidden" />
                <span className="text-slate-400">OWN DESIGN.</span>
                {/* <h1 className="relative font-bold text-6xl xl:text-8xl leading-tight">
                <span
                  className="absolute -left-[4px] top- text-transparent bg-gradient-to-r bg-clip-text from-blue-700 to-purple-700 z-0"
                  aria-hidden="true"
                >
                  PRINT YOUR
                </span>
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500 z-10 relative">
                  PRINT YOUR
                </span>
                <br className="xl:block hidden" />
                <span
                  className="absolute -ml-[6.5px] top-24 text-gray-800 z-0"
                  aria-hidden="true"
                >
                  OWN DESIGN.
                </span>
                <span className="text-slate-400 z-10 relative">
                  OWN DESIGN.
                </span>
                </h1> */}
                {/* <span className="text-slate-300">
                  PRINT <span className="">YOUR</span>
                </span>{" "}
                <br className="xl:block hidden" /> OWN{" "}
                <span className="">DESIGN.</span>{" "} */}
              </h1>
            </motion.div>
          </motion.div>

          <motion.div {...headContentAnimation} className="">
            <p className="max-w-md mb-2 xl:mt-20 font-normal text-gray-300">
              Design Your Own T-Shirt and <strong className='text-white'> ORDER IT. </strong>
            </p>

            <CustomButton
              type="filled"
              title="Customize It"
              handleClick={() => (state.intro = false)}
              CustomStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Hero
