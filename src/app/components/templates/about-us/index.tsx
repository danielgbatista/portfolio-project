import { SectionIndicator } from "@atom-components/section-indicator";
import Image from "next/image";
import { FC } from "react";

export const AboutUs: FC = () => {
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center gap-10 py-12">
      <SectionIndicator label="SOBRE MIM" />
      <div className="w-[90%] h-auto flex flex-col-reverse justify-between items-center gap-12 tablet:flex-row tablet:w-[80%] laptop:w-[70%] desktop:w-[62%]">
        <div className="w-full h-auto flex flex-col text-justify text-primary desktop:w-[62%]">
          <p>
            Sou um desenvolvedor dedicado, trilhando meu caminho com um ano de
            experiência e habilidades sólidas em <strong>TypeScript</strong> e{" "}
            <strong>React</strong>. Nessa jornada, encarei projetos
            desafiadores, lapidando minha habilidade de criar soluções
            inovadoras e eficientes.
          </p>
          <p>
            No mundo do <strong>TypeScript</strong>, aproveito seus benefícios
            para moldar códigos robustos e escaláveis. Em <strong>React</strong>
            , minha paixão reside na criação de interfaces intuitivas,
            adicionando um toque especial às experiências de usuário.
          </p>
        </div>
        <div className="w-[90%] h-auto flex justify-center items-center tablet:w-[20%]">
          <div>
            <Image
              src={"/not-found-image.jpg"}
              width={180}
              height={180}
              alt="logo example"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
