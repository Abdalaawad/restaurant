import "./App.css";
import {
  Gallery,
  Footer,
  Header,
  Navbar,
  // Video,
  Drinks,
  Cheef,
  About,
  Specialmenu,
} from "./component";
import Description from "./component/description/Description";
import Larurels from "./component/larurles/Larurels";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Specialmenu />
      <Cheef />
      {/* <Video /> */}
      <Larurels />
      <Gallery />
      <Drinks />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
