function ServiceRow({ category, title }) {
  return (
    <div className="service-row">

      <span>{category}</span>

      <h3>{title}</h3>

      <button>→</button>

    </div>
  );
}

export default ServiceRow;