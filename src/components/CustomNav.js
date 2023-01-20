import { useState } from "react"
import leaf from "../assets/img/leaf.png"
import CartModal from "./CartModal"
import InstructionsModal from "./InstructionsModal"
import { IoCartOutline,IoInformationCircle, IoLogoGithub } from "react-icons/io5"

const CustomNav = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [instructionsShow, setInstructionsShow] = useState(false)
  const handleInstructionsClose = () => setInstructionsShow(false)
  const handleInstructionsShow = () => setInstructionsShow(true)

  return (
    <nav className="top-nav">
      <div className="top-nav-brand">
        <img src={leaf} id="leaf" className="brand-icon" alt="leaf" />
        <h1>Sincere Succulents</h1>
      </div>
      <div className="top-nav-settings-cart">
        <button className="button" type="button" onClick={handleInstructionsShow}>
          <IoInformationCircle />
        </button>
        <button className="button" type="button">
          <a href="https://github.com/jomelbautista/react-succulent-store" id="button-github" target="_blank" rel="noopener noreferrer">
            <IoLogoGithub />
          </a>
        </button>
        <button className="button" type="button" onClick={handleShow}>
          <IoCartOutline />
        </button>
      </div>
      {show ? <CartModal handleClose={handleClose} /> : <></>}
      {instructionsShow ? <InstructionsModal handleInstructionsClose={handleInstructionsClose} /> : <></>}
    </nav>
  )
}

export default CustomNav
