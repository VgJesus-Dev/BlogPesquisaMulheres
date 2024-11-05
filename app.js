// Importando módulos necessários
const express = require('express'); // Importa o framework Express para criar o servidor web
const app = express(); // Cria uma instância do aplicativo Express
const mysql = require('mysql'); // Importa o módulo para interagir com o banco de dados MySQL
const session = require('express-session'); // Importa o módulo para gerenciar sessões de usuário
const bodyParser = require('body-parser'); // Importa o módulo body-parser para analisar o corpo das requisições
const conexao = require ('./mulherconectada');

// Configuração do Express

app.use(express.static('public')); // Define a pasta 'public' como a pasta de arquivos estáticos (CSS, JavaScript, imagens)
app.set('view engine', 'ejs'); // Define o EJS como o mecanismo de visualização (template engine)
app.set('views', __dirname + '/views'); // Define a pasta 'views' como a pasta onde as views (arquivos EJS) estão localizadas

// Configuração do middleware de sessões
app.use(session({
    secret: 'sua_chave_secreta', // Define uma chave secreta para assinar as sessões (troque por uma chave forte e aleatória)
    resave: false, // Não força o salvamento da sessão se ela não foi modificada
    saveUninitialized: true // Salva a sessão mesmo que ela não tenha sido inicializada com dados
}));

// Configuração do body-parser para analisar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: true })); // Analisa requisições com codificação URL
app.use(bodyParser.json()); // Analisa requisições com formato JSON

// Rota para a página inicial
app.get('/', (req, res) => {
    // Consulta todos os produtos do banco de dados
    var sql = 'SELECT * FROM pesquisadores';
    conexao.query(sql, function (err, results) {
        if (err) {
            console.error(err); // Loga o erro no console
            res.status(500).send('Erro ao conectar no Banco de dados'); // Envia uma resposta de erro 500 para o cliente
            return; // Encerra a execução da função para evitar que o código continue
        res.redirect('/pesquisadores');
        }
        

        // Renderiza a view 'index.ejs' e passa as mulheres como dados para a view
        res.render('index', { pesquisadores: results });
    });
});

//POST

app.post('/', function (req, res) {
    var nome = req.body.nome;
    var sobrenome = req.body.sobrenome;
    var email = req.body.email;
    var descricao = req.body.descricao;

    var sql = 'INSERT INTO pesquisadores (nome, sobrenome, email, descricao) VALUES (?, ?, ?, ?)';
    conexao.query(sql, [nome, sobrenome, email, descricao], function (err, result) {
        if (err) {
            console.error(err);
            res.status(500).send('Erro ao salvar no Banco de Dados');
            return;
        }
        // Redireciona para a página inicial após o envio para atualizar a lista
        res.redirect('/');
    });

    
});









// Inicia o servidor na porta 3002
app.listen(3002, () => {
    console.log('Servidor iniciado na porta 3002');
});