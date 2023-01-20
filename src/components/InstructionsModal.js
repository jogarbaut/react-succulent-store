import ReactDom from "react-dom"
import { IoCloseOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

const Instructions = ({ handleInstructionsClose }) => {
  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <article className="instructions-modal">
        <div className="flex-row instructions-modal__header">
          <h2>Succulent Store Instructions</h2>
          <button className="btn btn__cancel" type="button" onClick={handleInstructionsClose}>
            <IoCloseOutline />
          </button>
        </div>
        <p>Web application built with React front-end library and custom responsive UI components to provide an e-commerce experience for customers of a succulent shop.</p>

        <h3>React Technologies</h3>
        <ul>
          <li>Reusable React components were designed including product cards and cart product cards which provides scalable design if shop adds more to their inventory.</li>
          <li>React state enables users to interact with buttons to add or remove items and instantaneously see quantity and costs updates.</li>
          <li>React components subscribe to the context changes, as necessary, and will automatically rerender.</li>
        </ul>
        <h3>User Interface</h3>
        <ul>
          <li>Web application was designed with "mobile-first" design approach.</li>
          <li>User can edit cart from both the main page and cart modal.</li>
          <li>Product feed and cart was designed to be responsive to smaller and larger screens.</li>
        </ul>
        <h3>Application Features</h3>
        <ul>
          <li>Add and remove items from cart using the product card buttons.</li>
          <li>Click the cart icon to view cart that conditionally renders information based on items the user has selected.</li>
        </ul>
        <hr />
        <div className="signature">
          <h4>Project Created by Jomel Bautista</h4>
          <div className="flex-row">
            <button className="button__signature" type="button">
              <a href="https://github.com/jomelbautista" id="button-github" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub />
              </a>
            </button>
            <button className="button__signature" type="button">
              <a href="https://www.linkedin.com/in/jomelgbautista/" id="button-github" target="_blank" rel="noopener noreferrer">
                <IoLogoLinkedin />
              </a>
            </button>
          </div>
        </div>
      </article>
    </>,
    document.getElementById("portal")
  )
}

export default Instructions
