import { FC } from "react";
import Image from "next/image";

export const Header: FC = () => {
  return (
    <header className="w-full h-auto flex justify-around p-4 gap-12">
      <div className="">
        <Image
          src={"/not-found-image.jpg"}
          alt="logo example"
          width={10}
          height={10}
          className="w-10 h-10"
        />
      </div>

      <nav className="flex items-center">
        <ul className="flex gap-10">
          <li className="flex items-center">Inicio</li>
          <li className="flex items-center">Sobre mim</li>
          <li className="flex items-center">Experiências</li>
          <li className="flex items-center">Contato</li>
        </ul>
      </nav>
    </header>
  );
};
