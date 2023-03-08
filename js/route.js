export class Router {
    /* um objeto vazio */
    routes = {}
    
    /* mapeamento das rotas */
    add(routeName, page) {
        this.routes[routeName] = page
    }

    /* console.log(routes["/about"]) para saber se a fuction routes esta correta*/
    route(event) {
        event = event || window.event
        event.preventDefault()

        /* pega o conteudo do href */
        window.history.pushState({}, "", event.target.href)

        this.handle()
    }

    /* exibe o conteudo do html, o fetch impede que a pagina trave enquanto busca os dados */
    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })

    }
}