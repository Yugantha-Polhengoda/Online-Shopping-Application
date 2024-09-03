import React, { useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import config from '../config/config'
import state from '../store'
import download from '../assets/download.png'
import stylishShirt from '../assets/stylish-tshirt.png'
// import { download, stylishShirt } from '../assets'
// import { downloadCanvasToImage, reader } from '../config/helpers'
import {EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'

import { 
    CustomButton,
    AiPicker,
    ColorPicker,
    FilePicker,
    Tab,
} from '../components'

const Customizer = () => {
    const snap = useSnapshot(state);

    const [file, setFile] = useState('')
    const [prompt, setPrompt] = useState('')
    const [genarateingImg, setGenarateingImg] = useState('false')
    const [activeEditorTab, setActiveEditorTab] = useState('')
    const [activeFilterTab, setActiveFilterTab] = useState({
        logoShirt: true,
        stylishShirt: false,
    })

    const genarateTabContent = () => {
        switch (activeEditorTab) {
            case "colorpicker":
               return <ColorPicker />
            case "filepicker":
                return <FilePicker 
                    file={file}
                    setFile={setFile}
                    readFile={readFile}
                    handleSubmit={handleSubmit}
                />
            case "aipicker":
               return <AiPicker 
                    prompt={prompt}
                    setPrompt={setPrompt}
                    genarateingImg={genarateingImg}
               />

            default:
                return null;
        }
    }

    const handleSubmit = async (type) => {
        if(!prompt) return("Please enter a prompt");

        try {
            //call our backend to generate an ai image!
        } catch (error) {
            alert(error)
        } finally {
            setGenarateingImg(false)
            setActiveEditorTab("")
        }
    } 

    const handleDecals = (type, result) => {
        const decalType = DecalTypes[type];

        state[decalType.stateProperty] = result;

        if(!activeFilterTab[decalType.filterTab]) {
            handleActiveFilterTab(decalType.filterTab)
        }
    }

    const handleActiveFilterTab = (tabName) => {
        switch (tabName) {
            case "logoShirt":
                    state.isLogoTexture = !activeFilterTab[tabName];
                break;

            case "stylishShirt":
                    state.isFullTexture = !activeFilterTab[tabName];
            default:
                state.isFullTexture = true;
                state.isLogoTexture = true;
        }

        setActiveFilterTab((prevState) => {
            return {
                ...prevState,
                [tabName]: !prevState[tabName]
            }
        })
    }

    const readFile = (type) => {
        reader(file)
            .then((result) => {
                handleDecals(type, result);
                setActiveEditorTab("");
            })
    }


  return (
    <AnimatePresence>
        {!snap.intro && (
            <>
            <motion.div
                key="custom"
                className='absolute top-0 left-0 z-10'
                {...slideAnimation('left')}
            >
                <div className='flex items-center min-h-screen'>
                    <div className='editortabs-container tabs'>
                        {EditorTabs.map((tab) => (
                            <Tab 
                              key={tab.name}
                              tab={tab}
                              handleClick={() => setActiveEditorTab(tab.name)}
                            />
                        ))}

                        {genarateTabContent()}
                    </div>
                </div>
            </motion.div> 

            <motion.div
                className='absolute top-24 right-5 z-10'
                {...fadeAnimation}
            >
                <CustomButton
                    type= 'filled'
                    title= 'GO Back'
                    handleClick={() => state.intro = true}
                    CustomStyles='w-fit px-4 py-2.5 font-bold text-sm'
                />
            </motion.div>

            <motion.div
                className='filtertabs-container'
                {...slideAnimation('up')}
            >
                {FilterTabs.map((tab) => (
                            <Tab 
                              key={tab.name}
                              tab={tab}
                              isFilterTab
                              isActiveTab={activeFilterTab[tab.name]}
                              handleClick={() => handleActiveFilterTab(tab.name)}
                            />
                        ))}
            </motion.div>
            </>
        )}
    </AnimatePresence>
  )
}

export default Customizer
