function Avatar({ size, bg, label, color }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: bg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "700",
        color: color,
      }}
    >
      {label}
    </div>
  );
}

export default Avatar;