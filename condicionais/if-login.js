//verifica se LOGIN e SENHA
// correspondem ao mesmo tempo ( && )

const LOGIN = 'marmitex'
const SENHA = '12345'

if (LOGIN == 'marmitex' && SENHA == '12345' ) {
    console.log('acesso permitido!')
} else {
    console.warn('verifique seus dados')
}