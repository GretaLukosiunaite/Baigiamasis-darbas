import { useEffect } from "react";
import Home from "./pages/Home"
import { API } from "./shared/api";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const participants = await API.getParticipants();
        console.log('Participants:', participants);
      } catch (error) {
        console.error('Error fetching participants:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div>
      Labas Greta
      <Home></Home>
    </div>
  )
}

export default App
