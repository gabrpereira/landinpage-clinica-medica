import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer_background">
      <div className="footer_container">

        {/* coluna_esquerda - links */}
        <div className="footer_box_left">
          <h3 className="footer_title">Institucional</h3>
          <div className="buttons_wrapper">
            <button className="buttons_footer">Política de Privacidade</button>
            <button className="buttons_footer">Termos de Serviço</button>
          </div>
        </div>

        {/* coluna_direita - endereço + redes sociais */}
        <div className="footer_box_right">
          <div className="footer_box_right_inner">
            <h3 className="footer_title title_with_icon">
              <i className="fas fa-map-marker-alt map_icon"></i>
              Medical Clinic
            </h3>
            <div className="contact_info_wrapper">
              <p className="contact_info">
                1234 Main St, Anytown, USA
              </p>
              <p className="contact_info">
                <strong>CNPJ:</strong> 24.519.993/0001-70
              </p>
              <p className="contact_info">
                <strong>E-mail:</strong> <a href="mailto:info@medicalclinic.com">info@medicalclinic.com</a>
              </p>
              <p className="contact_info">
                <strong>Telefone:</strong> +1 234 567 8900
              </p>
            </div>
          </div>

          <div className="social_footer">
            <p><strong>Siga-nos!</strong></p>
            <div className="social_icons">
              <a href="#" aria-label="Whatsapp"><i className="fab fa-whatsapp"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="footer_copyright">
          <p>© 2025 <strong>Medical Clinic</strong>. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
