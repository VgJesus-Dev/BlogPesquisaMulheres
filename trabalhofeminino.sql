CREATE DATABASE trabalhofeminino;

-- Criar a tabela pesquisadores
CREATE TABLE pesquisadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    descricao TEXT
);

-- Inserir os dados dos pesquisadores
INSERT INTO pesquisadores (nome, sobrenome, email, descricao) VALUES
    ('Davi', 'Paulino', 'davi.pgomes2@senacsp.edu.com', 'Empresas com ambientes flexíveis e inclusivos beneficiam as mulheres e constroem uma sociedade mais justa. Ao oferecerem oportunidades iguais e tratamento justo para todos, elas promovem o bem-estar e o potencial de cada indivíduo. Essa mudança cultural impacta positivamente a sociedade e as empresas, gerando um futuro mais próspero e equilibrado.'),
    ('Sheila', 'Barcellos', 'sheila.rbarcellos@senacsp.edu.com', 'A participação das mulheres na tecnologia está crescendo, mas ainda é baixa. Embora representem 25% da força de trabalho, a presença feminina em cargos técnicos é menor. Historicamente dominado por homens, o setor enfrenta desafios como desigualdade salarial e falta de representatividade em liderança. A luta por um futuro mais inclusivo continua, com iniciativas para promover a diversidade e garantir oportunidades iguais para mulheres.'),
    ('Taynara', 'Gomes', 'taynara.csilva6@senacsp.edu.com', 'Crianças precisam de pais, homens e mulheres, com direitos e deveres iguais. A coparentalidade, com exceção das questões específicas da gravidez e parto, garante um futuro mais justo e equilibrado para as crianças e seus pais. Essa mudança impacta positivamente a sociedade, criando um sistema de apoio mais forte e um exemplo positivo de igualdade de gênero para as próximas gerações.');