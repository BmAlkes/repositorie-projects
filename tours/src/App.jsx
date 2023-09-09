import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      setTour(json);
    } catch (e) {
      console.log(e.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return <h2>Tours Starter</h2>;
};
export default App;
