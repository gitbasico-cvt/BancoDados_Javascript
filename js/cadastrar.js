// js/cadastrar.js
// Responsável pelo cadastro de usuário na tabela 'usuario'

const formCadastro = document.getElementById('form-cadastro');
const btnCadastrar = document.getElementById('btn-cadastrar');
const btnVoltarLogin = document.getElementById('btn-voltar-login');
const mensagem = document.getElementById('mensagem');

if (formCadastro) {
    formCadastro.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Coleta e limpa os valores dos campos
        const novoUsuario = {
            nome: document.getElementById('nome').value.trim(),
            cpf: document.getElementById('cpf').value.trim(),
            fone: document.getElementById('fone').value.trim(),
            cep: document.getElementById('cep').value.trim(),
            endereco: document.getElementById('endereco').value.trim(),
            bairro: document.getElementById('bairro').value.trim(),
            numero: document.getElementById('numero').value.trim(),
            email: document.getElementById('email').value.trim().toLowerCase(),
            login: document.getElementById('login').value.trim(),
            senha: document.getElementById('senha').value.trim()
        };

        if (typeof _supabase === 'undefined' || !_supabase) {
            mensagem.textContent = 'Conexão com o banco não inicializada.';
            mensagem.style.color = '#b91c1c';
            return;
        }

        btnCadastrar.disabled = true;
        btnCadastrar.textContent = 'Cadastrando...';
        mensagem.textContent = '';

        try {
            // Insere na tabela 'usuario' (id, created_at e perfil são gerados/definidos automaticamente)
            const { data, error } = await _supabase
                .from('usuario')
                .insert([novoUsuario])
                .select();

            if (error) {
                console.error('Erro ao cadastrar:', error.message);

                // Tratamento amigável caso login, email ou cpf sejam únicos
                if (error.code === '23505') {
                    mensagem.textContent = 'Já existe um usuário com este login, e-mail ou CPF.';
                } else {
                    mensagem.textContent = 'Erro ao salvar cadastro: ' + error.message;
                }
                mensagem.style.color = '#b91c1c';
                return;
            }

            mensagem.textContent = 'Cadastro realizado com sucesso! Redirecionando para o login...';
            mensagem.style.color = '#15803d';

            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1200);
        } catch (err) {
            console.error('Erro inesperado:', err);
            mensagem.textContent = 'Ocorreu um erro inesperado ao cadastrar.';
            mensagem.style.color = '#b91c1c';
        } finally {
            btnCadastrar.disabled = false;
            btnCadastrar.textContent = 'Cadastrar';
        }
    });
}

if (btnVoltarLogin) {
    btnVoltarLogin.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}