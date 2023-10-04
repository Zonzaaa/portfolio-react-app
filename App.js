import Koti from "./components/Koti";
import Minusta from "./components/Minusta";
import Navbar from "./components/Navbar";
import Taidot from "./components/Taidot";
import Työt from "./components/Työt";
import Yhteystiedot from "./components/Yhteystiedot";

function App() {
  return (
    <div>
      <Navbar />
      <Koti />
      <Minusta />
      <Taidot />
      <Työt />
      <Yhteystiedot />
    </div>
  );
}

export default App;
