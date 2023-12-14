import { FC } from "react";

interface TimelineContentProps {
  business: string;
  description: string;
}

export const TimelineContent: FC<TimelineContentProps> = () => {
  return (
    <div className="w-[98%] max-h-[300px] flex flex-col border-2 border-primary overflow-y-auto p-5 rounded-md gap-2 shadow-lg">
      <p className=" text-sm font-bold text-center">
        Estágio em Desenvolvimento de Sistemas
      </p>
      <ul className="list-disc flex flex-col gap-2 p-2 text-xs text-justify font-normal ">
        <li>
          Aperfeiçoei minhas habilidades como desenvolvedor front-end,
          trabalhando no desenvolvimento e aprimoramento de interfaces de
          usuário atraentes e responsivas.
        </li>
        <li>
          Utilizei ativamente a ferramenta Figma para aprimorar as habilidades
          de UX e UI, participando ativamente no design e na colaboração eficaz
          com equipes multidisciplinares.
        </li>
        <li>
          Desenvolvi API's seguindo o modelo REST, adquirindo experiência
          prática na criação de endpoints eficientes e seguros para facilitar a
          comunicação entre front-end e back-end.
        </li>
        <li>
          Implementei e promovi práticas de Código Limpo, integrando os
          princípios SOLID e adotando o Atomic Design para estruturar e
          organizar o código de forma modular e escalável.
        </li>
      </ul>
    </div>
  );
};
