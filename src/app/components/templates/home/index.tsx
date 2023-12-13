import { FC } from "react";
import NotFoundImg from "@public/not-found-image.jpg";
import Image from "next/image";

export const Home: FC = () => {
  return (
    <section>
      <div>
        <h1>Olá! 👋 Sou o Daniel Batista, sou Dev. Full Stack.</h1>
        <p>
          Morando em São Paulo, Brasil, amo criar experiências incríveis! 📍
        </p>
        <button>SOBRE MIM</button>
        <button>CONTATE-ME</button>
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
