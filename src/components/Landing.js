import succulent1 from "../assets/img/succulents-1.jpg"

const Landing = () => {
  return (
    <section className="landing" id="#landing">
      <div className="title-container">
        <div className="title-text">
          <h1>Your Neighborhood Succulent Specialists</h1>
          <h2>Discover succulent varieties one pot at a time!</h2>
          <h2>Simply add products to your cart below.</h2>
        </div>
        <div className="title-image">
        <img src={succulent1} className="img" alt="Succulent" />
        </div>
      </div>
    </section>
  )
}

export default Landing
