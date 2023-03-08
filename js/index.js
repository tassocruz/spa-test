import { Router } from "./route.js"

import Controls from './controls.js';
import Events from "./events.js";

/* mapeamento das rotas */
const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universo", "/pages/universo.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add(404, "/pages/404.html")

/* chama a function e exibe o home */
router.handle()

/* retonar as paginas pelo botao de voltar */
window.onpopstate = () => router.handle()
window.route = () => router.route()

/* oculta/exibe imagem-background de acordo com a pagina */
import { 
    btnPlay,
    btnUniverso,
    btnExploracao,
    imagHome,
    imagUniverso,
    imagExploracao
} from "./elements.js";

const controls = Controls({
    btnPlay,
    btnUniverso,
    btnExploracao,
    imagHome,
    imagUniverso,
    imagExploracao
})

Events({controls})

