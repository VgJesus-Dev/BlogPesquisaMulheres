const mysql = require("mysql");

// Configuração do banco de dados MySQL
const conexao = mysql.createConnection({
    host: 'localhost', // Endereço do servidor do banco de dados (geralmente 'localhost' para desenvolvimento local)
    user: 'root', // Nome de usuário do banco de dados
    password: '', // Senha do banco de dados
    database: 'trabalhofeminino' // Nome do banco de dados a ser usado
});

module.exports = conexao;