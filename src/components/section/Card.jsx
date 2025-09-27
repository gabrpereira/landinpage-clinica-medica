import "./Card.css";

function Card() {
  return (
    <section className="container_card">
      <div className="box_to_box_card">
        <div className="box_cards">
          <div className="box_card_01">
            <h3 className="title_card">Serviços de <span className="cut_card">Qualidade</span></h3>
            <p className="text_card">
              Oferecemos uma ampla gama de serviços médicos para atender às suas
              necessidades.
            </p>
          </div>
          <div className="box_card_01">
            <h3 className="title_card">Profissionais <span className="cut_card">experientes</span></h3>
            <p className="text_card">
              Nossos médicos têm anos de experiência em sectionersas áreas médicas
            </p>
          </div>
        </div>
          <button className="btn_learn_more">Saiba mais</button>
      </div>
    </section>
  );
}

export default Card;
