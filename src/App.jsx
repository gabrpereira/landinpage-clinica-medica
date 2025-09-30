import Header from "./components/header/Header";
import Menu_page_01 from "./components/menu/Menu_page_01";
import Card from "./components/section/Card";
import Footer from "./components/footer/Footer";
import Horario from "./components/section/Horario";
function App() {
  return (
    <>
      <div className="main-content-wrapper">
        <Header />
        <Menu_page_01 />
        <Card />
        <Horario />
      </div>
    <Footer/>
    </>
  );
}

export default App;
