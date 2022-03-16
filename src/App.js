import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "../node_modules/react-router-dom";
import Information from "./components/InformationSection/Information";
import Header from "./components/Header/Header";
import Tickets from "./components/Tickets/Tickets";
import Footer from "./components/Footer/Footer";
import PurchasingCard from "./components/PurchaseWrapper/PurchasingCard"
import "./styles/styles.css";


function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<> 
                <Header />
                 <Tickets />
                <Footer />
            </>}/>
          <Route path="/information" element={<Information />} />
          <Route path="/buygiftcard" element={<PurchasingCard />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
