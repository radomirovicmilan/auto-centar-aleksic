import React from "react";
import "../scss/components/NavBarButton.scss";

export default function NavBarButton({ label, icon }) {
  console.log(icon);
  return (
    <button className="navbar-button">
      {icon}
      <span>{label}</span>
    </button>
  );
}
