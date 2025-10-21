import styles from "./page.module.css";

export default function Login () {
    return (
        <div className={styles.container}>
        <div className="login-container">
      <h1>Seja Bem-Vindo</h1>
      <p>
        Construindo uma cidadania <br />
        ativa através da leitura
      </p>
      <input type="email" id="email" placeholder="E-mail" />
      <input type="password" id="senha" placeholder="Senha" />

      <a href="#" className="link">Esqueceu a senha?</a>

      <button onClick="fazerLogin()">Login</button>

      <p className="naoTemConta">Não tem conta?</p>
      <button className="cadastro-btn" onclick="irParaCadastro()">
        Cadastre-se
      </button>
    </div>

    <img src="../../../public/foto-boneca.png" alt="" className="foto-boneca" />

    <script src="script.js"></script>
        </div>
    );
}