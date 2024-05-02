import FeaturesCats$Adds from "./featuresCats&adds/FeaturesCats$Adds";
import NavBar from "./navbar/NavBar";
import PopularProducts from "./popularProducts/PopularProducts";
import HomeSectoins from "./homeSections/HomeSections";
import BestSells from "./bestSells/BestSell";

export default function Home() {
    return(
        <>
        <NavBar/>
        <FeaturesCats$Adds/>
        <PopularProducts/>
        <BestSells/>
        <HomeSectoins/>
        </>
    )
}