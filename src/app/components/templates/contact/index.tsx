import { FC } from "react";

export const Contact: FC = () => {
  return (
    <section>
      <div>
        <p>Entre em Contato: Juntos, Transformaremos Ideias em Realidade!</p>
        <p>
          Estou ansioso para ouvir de você! Entre em contato e vamos começar a
          criar algo incrível juntos.
        </p>
      </div>
      <div>
        <form action="">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Assunto" />
          <textarea placeholder="Mensagem" />
          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </section>
  );
};
