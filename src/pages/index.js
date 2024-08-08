import HeaderFilter from "@/components/body/HeaderFilter";
import MainPage from "@/components/body/MainPage";
import Description from "@/components/Description";
import Footer from "@/components/footer/Footer";
import GreyStrip from "@/components/header/GreyStrip";
import Header from "@/components/header/Header";
import HomeMain from "@/components/header/Home";

import { useState } from "react";

export default function Home() {
  const [hideFilter, setHideFilter] = useState(true);

  const toggleHandler = () => {
    setHideFilter(!hideFilter);
  };

  return (
    <div>
      <GreyStrip></GreyStrip>
      <Header></Header>
      <HomeMain></HomeMain>
      <Description></Description>
      <HeaderFilter onToggle={toggleHandler} filter={hideFilter}></HeaderFilter>
      <MainPage filter={hideFilter}></MainPage>
      <Footer></Footer>
    </div>
  );
}
