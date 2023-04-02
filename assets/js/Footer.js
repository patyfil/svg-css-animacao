class Footer {
    constructor() {
        this.filtroTurbulencia = document.getElementById("filtro-turbulencia")
    }

    efeitoOnda() {
        TweenMax.to(this.filtroTurbulencia, 20, {
            attr: {
                baseFrequency: 0.01,
            }, 
            repeat: -1, 
            yoyo: true
        })

    }
}

export { Footer }