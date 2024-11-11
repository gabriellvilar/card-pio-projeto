<?php
// Exibir erros para depuração
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Conectar ao banco de dados
$conn = new mysqli("localhost", "root", "", "sistema_pedidos");

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Verificar se o formulário foi enviado via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Receber os dados do formulário via POST
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $cep = $_POST['cep'];
    $endereco = $_POST['endereco'];
    $complemento = $_POST['complemento'];
    $bairro = $_POST['bairro'];
    $cidade = $_POST['cidade'];
    $uf = $_POST['uf'];

    // Verifique se os dados chegaram corretamente
    // Descomente para depuração
    // var_dump($_POST);

    // Inserir no banco de dados
    $stmt = $conn->prepare("INSERT INTO pedidos (nome, email, telefone, cep, endereco, complemento, bairro, cidade, uf) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssssss", $nome, $email, $telefone, $cep, $endereco, $complemento, $bairro, $cidade, $uf);

    if ($stmt->execute()) {
        echo "Pedido finalizado com sucesso!";
    } else {
        echo "Erro ao finalizar o pedido: " . $stmt->error;
    }

    $stmt->close();
}

// Fechar a conexão
$conn->close();
?>
