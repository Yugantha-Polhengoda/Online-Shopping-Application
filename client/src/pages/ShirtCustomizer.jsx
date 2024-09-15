import React from 'react'
import Canvas from "../canvas"
import CanvasModel from '../canvas'
import { Tab } from "../components"
import Customizer from "./Customizer"
import Hero from "../pages/Hero"

const ShirtCustomizer = () => {
  return (
    <div className="app transition-all ease-out mt-6">
      <Hero />
      <Canvas />
      <Customizer />
      <Tab />
    </div>
  )
}

export default ShirtCustomizer
