(() => {
// Criando um objeto de máscara que encapsula os métodos

    const mascara = {
        numero(evento){
            const campo = evento.target
            campo.maxLength = 15
            const valor = campo.value

            const novoValor = valor
            .replace(/\D/g, '')

            campo.value = novoValor
        },

        cpf(evento){
            const campo = evento.target
            campo.maxLength = 14
            const valor = campo.value

            const novoValor = valor
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2')

            campo.value = novoValor
        },
        
        cnpj(evento){
            const campo = evento.target
            campo.maxLength = 18
            const valor = campo.value

            const novoValor = valor
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2')

            campo.value = novoValor
        },

        cep(evento){
            const campo = evento.target
            campo.maxLength = 9
            const valor = campo.value

            const novoValor = valor
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')

            campo.value = novoValor
        },

        telefone(evento){
            const campo = evento.target
            campo.maxLength = 15
            const valor = campo.value

            const novoValor = valor
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
            campo.value = novoValor
        },

        moeda(evento){
            const campo = evento.target
            campo.maxLength = 23
            const valor = campo.value

            const novoValor = valor
            .replace(/\D/g, '')

            const options = {style: 'currency', currency: 'BRL'}

            const valorFormatado = new Intl.NumberFormat('pt-br', options)
            .format(novoValor / 100)

            campo.value = valorFormatado
        }
    }

    const campos = document.querySelectorAll('[data-mascara]')

    campos.forEach((campo) => {
        const metodo = campo.dataset.mascara

        campo.addEventListener('input', mascara[metodo])
    })

})

()