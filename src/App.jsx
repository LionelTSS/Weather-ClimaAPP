import AppClima from "./components/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>

function App() {
  return (
    <ClimaProvider>
      <header>
        
        <h1 >WeatherApp</h1>
      </header>
      
      <AppClima />
    </ClimaProvider>
  );
}
export default App;
