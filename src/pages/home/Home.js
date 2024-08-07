import FeaturesCats from "./featuresCats/FeaturesCats";
import NavBar from "./navbar/NavBar";
import PopularProducts from "./popularProducts/PopularProducts";
import HomeSectoins from "./homeSections/HomeSections";
import BestSells from "./bestSells/BestSell";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        window.scrollTo({
            top : 0 , 
            left : 0 , 
            behavior : "instant"
        } ,[]) ; 
    })
    return(
        <>
        <NavBar/>
        <FeaturesCats/>
        <PopularProducts/>
        <BestSells/>
        <HomeSectoins/>
        </>
    )
}