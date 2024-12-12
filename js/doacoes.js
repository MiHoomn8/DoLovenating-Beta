import { cidades } from "./cidades.js";
import { getQueryParams } from "./getQueryParams.js";


const {cidade} = getQueryParams()
const cidadeSelecionada = cidades.find(item=>item.key === cidade)

const title = document.getElementById("cidade")
title.innerText = `${cidadeSelecionada.city} - ${cidadeSelecionada.state}`

const logo = document.getElementById("logo")
logo.src = cidadeSelecionada.imgUrl