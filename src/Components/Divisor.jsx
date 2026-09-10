export default function Divisor({ altura = "10px", largura = "99vw" }) {
  return (
    <div
      style={{
        backgroundColor: "var(--grizesito)",
        height: `${altura}`,
        width: `${largura}`,
        borderRadius: 10,
      }}
    ></div>
  );
}
