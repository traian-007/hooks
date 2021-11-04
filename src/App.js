import "./App.css";
import { GlobalProvider } from "./context/contextState";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <GlobalProvider>
      <MainPage />
    </GlobalProvider>
  );
}

export default App;
