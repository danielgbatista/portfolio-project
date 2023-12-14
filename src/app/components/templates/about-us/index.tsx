import { SectionIndicator } from "@atom-components/sectionIndicator";
import Image from "next/image";
import { FC } from "react";

export const AboutUs: FC = () => {
  return (
    <section className="w-full h-[100vh] flex flex-col justify-center items-center">
      <SectionIndicator label="SOBRE MIM" />
      <div className="w-[90%] h-auto flex flex-col-reverse items-center justify-center gap-6">
        <div className="w-full h-auto flex-col text-justify">
          <p>
            {" "}
            Sou um desenvolvedor dedicado, trilhando meu caminho com um ano de
            experiência e habilidades sólidas em <strong>
              TypeScript
            </strong> e <strong>React</strong>. Nessa jornada, encarei projetos
            desafiadores, lapidando minha habilidade de criar soluções
            inovadoras e eficientes.
          </p>
          <p>
            {" "}
            No mundo do <strong>TypeScript</strong>, aproveito seus benefícios
            para moldar códigos robustos e escaláveis. Em <strong>React</strong>
            , minha paixão reside na criação de interfaces intuitivas,
            adicionando um toque especial às experiências de usuário.
          </p>
        </div>
        <div className="w-full h-auto flex justify-center items-center">
          <div>
            <Image
              src={"/not-found-image.jpg"}
              width={1200}
              height={300}
              layout="responsive"
              alt="logo example"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
