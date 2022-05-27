programa {
	funcao inicio() {
		inteiro cont
	    real S, N, M
        cont = 1
        S = 0
        enquanto(cont <= 10) {
            escreva("escreva  um valor para N")
            leia(N)
            S = S + N
            cont = cont + 1
        }
        escreva("O somatório dos termos N é " + S)
        M = S / 10
        escreva(" A média dos termos N é " + M)
    }
}
