import React from "react";
import Header from "../components/Header/Header";
import Leftside from "../screens/leftsidebar";
import Flights from "../screens/Flights";
import Rightsidebar from "../screens/rightsidebar";
import Filter from "../Filter/filter";
import Dashboard from '../screens/Dashboard/index'
import Reports from '../screens/Reports/index'
import Settings from '../screens/Settings/index'
import Statistics from '../screens/Statistics/index'
import Wallet from '../screens/Wallets/index'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";



function Navigation(){
    return(
        <div>
           
            <Router>
            <Header />
            <Leftside />
            <Rightsidebar />
            <Filter />
                <Switch>
                <Route exact path="/"><Dashboard /></Route>
                <Route  path="/flights"><Flights /></Route>
                <Route  path="/wallet"><Wallet /></Route>
                <Route  path="/reports"><Reports /></Route>
                <Route  path="/statistics"><Statistics /></Route>
                <Route  path="/settings"><Settings /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Navigation;