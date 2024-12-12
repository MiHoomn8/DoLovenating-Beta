import { cidades } from "./cidades.js";

const menuCidades = cidades.map(cidade=>(`
    <div class="lista">
      <div>
        <a href="./doacoes.html?cidade=${cidade.key}">${cidade.city}</a></div>
    </div>
`)).join("\n")

const menuList = document.querySelector(".background")
menuList.innerHTML += menuCidades

