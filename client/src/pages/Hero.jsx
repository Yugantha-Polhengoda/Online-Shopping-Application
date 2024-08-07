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
import Content from '../components/Content'

const Hero = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          
            <motion.div className='home-content' {...headContainerAnimation}>
                <motion.div {...headTextAnimation}>
                    <h1 className='head-text'><span className='text-black'>CUSTOMIZE</span> <br className='xl:block hidden'/> YOUR OWN. </h1>
                </motion.div>
            </motion.div>

            <motion.div {...headContentAnimation}>
                    <p className='max-w-md mb-2 mt-[50px] font-normal text-gray-600'>
                        Design your own Dress and  <strong> ORDER IT. </strong>
                    </p>

                    <CustomButton 
                        type= 'filled'
                        title= 'Customize It'
                        handleClick={() => state.intro = false}
                        CustomStyles='w-fit px-4 py-2.5 font-bold text-sm'
                    />
                </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Hero
