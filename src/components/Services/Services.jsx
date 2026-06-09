import ServiceRow from "./ServiceRow";
import "./Services.css";

function Services() {
  return (
    <section>

      <h2>
        What we can offer you
      </h2>

      <ServiceRow
        category="Office Content"
        title="Collaborative & Partnership"
      />

      <ServiceRow
        category="Digital"
        title="Piloting Digital Confidence"
      />

    </section>
  );
}

export default Services;