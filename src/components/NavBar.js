import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksKey = links.map((link) => {
    return <a key={link} href={"#"+link}>{link}</a>
  })

  return <nav>{linksKey}</nav>;
}

export default NavBar;
