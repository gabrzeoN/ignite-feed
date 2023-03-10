import style from "./Header.module.css";

import igniteLogo from "../assets/ignite-logo.svg";

console.log(igniteLogo);
export function Header() {

  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="Ignite logotipo" />
      <h1>Ignite Feed</h1>
    </header>
  );
}