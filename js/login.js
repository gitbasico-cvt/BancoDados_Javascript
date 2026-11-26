// js/login.js
// Responsável pela verificação de conexão e autenticação de login + senha

const statusConexao = document.getElementById('status-conexao');
const statusTexto = document.getElementById('status-texto');

function atualizarStatusConexao(conectado, textoCustomizado = '') {
    if (!statusConexao || !statusTexto) return;

    statusConexao.classList.remove('conectado', 'desconectado');

    if (conectado) {
        statusConexao.classList.add('conectado');
        statusTexto.textContent = textoCustomizado || 'Conectado';
    } else {
        statusConexao.classList.add('desconectado');
        statusTexto.textContent = textoCustomizado || 'Desconectado';
    }
}

async function verificarConexaoBanco() {
    // Garante que o SDK e o conectar.js já criaram o cliente _supabase
    if (typeof _supabase === 'undefined' || !_supabase) {
        console.error('Cliente _supabase não encontrado. Verifique a ordem dos scripts no HTML.');
        atualizarStatusConexao(false, 'Desconectado');
        return;
    }

    try {
        // Testa a comunicação com a tabela 'usuario' no Supabase
        const { error } = await _supabase
            .from('usuario')
            .select('id', { head: true, count: 'exact' });

        if (error) {
            console.warn('Falha ao conectar ao banco:', error.message);
            atualizarStatusConexao(false, 'Desconectado');
            return;
        }

        atualizarStatusConexao(true, 'Conectado');
    } catch (err) {
        console.warn('Erro de rede ao verificar banco:', err);
        atualizarStatusConexao(false, 'Desconectado');
    }
}

// Executa o teste de conexão assim que o script carrega
verificarConexaoBanco();

const formLogin = document.getElementById('form-login');
const inputLogin = document.getElementById('login');
const inputSenha = document.getElementById('senha');
const btnEntrar = document.getElementById('btn-entrar');
const btnCadastro = document.getElementById('btn-cadastro');
const mensagem = document.getElementById('mensagem');

if (formLogin) {
    formLogin.addEventListener('submit', async (event) => {
        event.preventDefault();

        const login = inputLogin.value.trim();
        const senha = inputSenha.value.trim();

        if (login === '' || senha === '') {
            mensagem.textContent = 'Preencha o login e a senha para entrar.';
            mensagem.style.color = '#b91c1c';
            return;
        }

        if (typeof _supabase === 'undefined' || !_supabase) {
            atualizarStatusConexao(false, 'Desconectado');
            mensagem.textContent = 'Conexão com o banco não inicializada.';
            mensagem.style.color = '#b91c1c';
            return;
        }

        btnEntrar.disabled = true;
        btnEntrar.textContent = 'Entrando...';
        mensagem.textContent = '';

        try {
            const { data, error } = await _supabase
                .from('usuario')
                .select('id, login')
                .eq('login', login)
                .eq('senha', senha)
                .maybeSingle();

            if (error) {
                console.error('Erro ao consultar o Supabase:', error.message);
                atualizarStatusConexao(false, 'Desconectado');
                mensagem.textContent = 'Erro ao conectar com o servidor. Tente novamente.';
                mensagem.style.color = '#b91c1c';
                return;
            }

            atualizarStatusConexao(true, 'Conectado');

            if (!data) {
                mensagem.textContent = 'Login ou senha inválidos.';
                mensagem.style.color = '#b91c1c';
                return;
            }

            localStorage.setItem('usuarioLogado', JSON.stringify(data));
            mensagem.textContent = 'Login realizado com sucesso! Redirecionando...';
            mensagem.style.color = '#15803d';

            window.location.href = 'index.html';
        } catch (err) {
            console.error('Erro inesperado:', err);
            atualizarStatusConexao(false, 'Desconectado');
            mensagem.textContent = 'Ocorreu um erro inesperado ao tentar entrar.';
            mensagem.style.color = '#b91c1c';
        } finally {
            btnEntrar.disabled = false;
            btnEntrar.textContent = 'Entrar';
        }
    });
}

if (btnCadastro) {
    btnCadastro.addEventListener('click', () => {
        window.location.href = 'cadastrar.html';
    });
}