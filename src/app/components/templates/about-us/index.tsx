import Image from "next/image";
import { FC } from "react";

export const AboutUs: FC = () => {
  return (
    <section>
      <div>
        <span>SOBRE MIM</span>
        <p>
          {" "}
          Sou um desenvolvedor dedicado, trilhando meu caminho com um ano de
          experiência e habilidades sólidas em TypeScript e React. Nessa
          jornada, encarei projetos desafiadores, lapidando minha habilidade de
          criar soluções inovadoras e eficientes.
        </p>
        <p>
          {" "}
          No mundo do TypeScript, aproveito seus benefícios para moldar códigos
          robustos e escaláveis. Em React, minha paixão reside na criação de
          interfaces intuitivas, adicionando um toque especial às experiências
          de usuário.
        </p>
      </div>
      <div>
        <Image
          src={"/not-found-image.jpg"}
          width={250}
          height={250}
          alt="logo example"
        />
      </div>
    </section>
  );
};
