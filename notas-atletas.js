class ClimaDasCidades {
    constructor(cidades) {
        this.cidades = cidades;
    }

    obterPrimeiraCidade() {
        return this.cidades[0];
    }

    obterUltimaCidade() {
        return this.cidades[this.cidades.length - 1];
    }

    exportarCSV() {
        return this.cidades
            .map(cidade => `${cidade.location.name} ${cidade.current.temperature}`)
            .join(', ');
    }
}
