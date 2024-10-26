import { useState } from 'react';
import './App.css';
import Available from './Components/Available-Players/Available';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import MainFooter from './Components/Footer/MainFooter';


function App() {
  const [coin, setCoin] = useState(0);
 

  const claimHandleToCoin = () => {
    setCoin(coin + 5000000);
  };

    return (
      <>
        <Navbar coin={coin} /> {/* Pass coin to Navbar to display total coins */}
        <Banner claimHandleToCoin={claimHandleToCoin} /> {/* Pass function to Banner */}
        <Available claimHandleToCoin={claimHandleToCoin} coin={coin} setCoin={setCoin} /> {/* Pass coin and setCoin to Available */}
        <Footer />
        <MainFooter />
      </>
    );
}

export default App; 