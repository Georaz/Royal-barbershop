import React from "react";
import './App.css';
import {Route, Switch} from "react-router-dom";
import MenuContainer from "./components/Menu/MenuContainer";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import Footer from "./components/Footer/Footer";
import AuthContainer from "./components/FormControls/AuthForm/AuthContainerForm";
import PriceList from "./components/PriceList/PriceList";
import Haircut from "./components/PriceList/Service/Haircut";
import Shaving from "./components/PriceList/Service/Shaving";
import SkinNailCare from "./components/PriceList/Service/SkinNailCare";
import RegForm from "./components/FormControls/RegForm/RegForm";
import OfficeContainer from "./components/Office/OfficeContainer";
import Page404 from "./components/Page404/Page404";

const App = () => {
    return (
        <>
            <MenuContainer/>
            <main>
                <Switch>
                    <Route component={MainPageContainer} exact path="/royal-barbershop"/>
                    <Route component={PriceList} exact path="/royal-barbershop/price-list"/>
                    <Route component={SkinNailCare} path="/royal-barbershop/price-list/skin-nail-care"/>
                    <Route component={Haircut} path="/royal-barbershop/price-list/haircut"/>
                    <Route component={Shaving} path="/royal-barbershop/price-list/shaving"/>
                    <Route component={RegForm} path="/royal-barbershop/registration"/>
                    <Route component={AuthContainer} path="/royal-barbershop/auth"/>
                    <Route component={OfficeContainer} path="/royal-barbershop/office"/>
                    <Route component={Page404} />
                </Switch>
            </main>
            <Footer/>
        </>
    )
}

export default App;
