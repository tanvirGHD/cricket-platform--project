import { useState } from 'react';
import './App.css';
import Available from './Components/Available-Players/Available';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
// import MainFooter from './Components/Footer/MainFooter';


function App() {
  const [coin, setCoin] = useState(0);

  // Function to add coins when "Claim Coin" button is clicked
  const claimHandleToCoin = () => {
    setCoin(coin + 5000000);
  };

  return (
    <>
      <Navbar coin={coin} />
      <Banner claimHandleToCoin={claimHandleToCoin} />
      <Available coin={coin} setCoin={setCoin} />
      <Footer></Footer>
      {/* <MainFooter></MainFooter> */}
      
    </>
  );
}

export default App;
