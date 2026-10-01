CREATE DATABASE pratica_saep_db;
USE pratica_saep_db;


CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    cpf VARBINARY(255) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(150),
    endereco VARCHAR(255)
);


CREATE TABLE veiculo (
    id_veiculo INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    placa VARCHAR(10) NOT NULL UNIQUE,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(80) NOT NULL,
    ano INT NOT NULL,
    cor VARCHAR(30),
    
    CONSTRAINT fk_veiculo_cliente
        FOREIGN KEY (id_cliente)
        REFERENCES cliente(id_cliente)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);


CREATE TABLE ordem_servico (
    id_ordem_servico INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_veiculo INT NOT NULL,
    data_agendamento DATETIME NOT NULL,
    descricao_problema TEXT NOT NULL,
    servico_realizado TEXT,
    valor DECIMAL(10,2) NOT NULL DEFAULT 0.00,

    status ENUM(
        'AGENDADA',
        'EM_ANDAMENTO',
        'CONCLUIDA',
        'CANCELADA'
    ) NOT NULL DEFAULT 'AGENDADA',

    data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_os_cliente
        FOREIGN KEY (id_cliente)
        REFERENCES cliente(id_cliente)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT fk_os_veiculo
        FOREIGN KEY (id_veiculo)
        REFERENCES veiculo(id_veiculo)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);


CREATE TABLE agendamento (
    id_agendamento INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_veiculo INT NOT NULL,
    data_hora DATETIME NOT NULL,
    observacao VARCHAR(500),

    status ENUM(
        'AGENDADO',
        'CONFIRMADO',
        'REALIZADO',
        'CANCELADO'
    ) NOT NULL DEFAULT 'AGENDADO',

    data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_agendamento_cliente
        FOREIGN KEY (id_cliente)
        REFERENCES cliente(id_cliente)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT fk_agendamento_veiculo
        FOREIGN KEY (id_veiculo)
        REFERENCES veiculo(id_veiculo)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);


