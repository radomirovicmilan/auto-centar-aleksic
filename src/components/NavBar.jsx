import React from "react";
import "../scss/components/NavBar.scss";
import NavBarButton from "./NavBarButton";
import {
  HomeOutline,
  ImagesOutline,
  ConstructOutline,
  ChatbubblesOutline,
} from "react-ionicons";

import { Colors } from "../constants/colors";

export default function NavBar() {
  return (
    <div className="navbar-wrapper">
      <img className="logo-navbar" src="./logo.png" alt="logo" />
      <div className="navbar-buttons-wrapper">
        <NavBarButton
          label={"Pocetna"}
          icon={<HomeOutline color={Colors.icons.navbarButton} />}
        />
        <NavBarButton
          label={"Galerija"}
          icon={<ImagesOutline color={Colors.icons.navbarButton} />}
        />
        <NavBarButton
          label={"Usluge"}
          icon={<ConstructOutline color={Colors.icons.navbarButton} />}
        />
        <NavBarButton
          label={"Kontakt"}
          icon={<ChatbubblesOutline color={Colors.icons.navbarButton} />}
        />
      </div>
    </div>
  );
}
