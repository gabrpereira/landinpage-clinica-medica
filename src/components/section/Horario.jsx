// Horario.jsx
import "./Horario.css";

export default function Horario() {
  return (
    <section className="horario-section">
      <hr className="horario-divider" />
      <h3 className="horario-title">Agende sua Consulta</h3>
      <p className="horario-subtitle">Entre em contato conosco e cuide da sua saúde</p>
      <a href="#contato" className="horario-cta-button">
        Agendar Consulta
      </a>
    </section>
  );
}