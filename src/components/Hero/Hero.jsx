import FloatingAvatar from "./Avatar";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <FloatingAvatar
        size={70}
        bg="#fde8d8"
        label="P"
        color="#c06030"
        top={120}
        left="8%"
      />

      <div className="hero-content">

        <h1>
          The thinkers and
          <br />
          doers were changing
          <br />
          the status quo with
        </h1>

        <p>
          We are a team of strategists...
        </p>

      </div>

    </section>
  );
}

export default Hero;