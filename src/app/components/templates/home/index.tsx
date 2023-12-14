import { FC } from "react";
import Image from "next/image";
import { Button } from "@atom-components/index";
import { KeyboardArrowRight } from "@mui/icons-material";

export const Home: FC = () => {
  return (
    <section className="w-full h-[66vh] flex flex-col-reverse justify-center items-center gap-16 py-14 tablet:h-[50vh] tablet:flex-row">
      <div className="w-[90%] h-auto flex flex-col justify-center items-center gap-4 tablet:w-[56%] laptop:w-[45%] desktop:w-[37%]">
        <div className="w-full h-auto flex flex-col justify-center gap-2 leading-tight text-primary">
          <h1 className="font-bold text-2xl tablet:text-3xl">
            Olá! 👋 Sou o Daniel Batista, sou Dev. Full Stack.
          </h1>
          <p className="font-bold text-base tablet:text-xl">
            Morando em São Paulo, Brasil, amo criar experiências incríveis! 📍
          </p>
        </div>
        <div className="w-full h-auto flex flex-col gap-3 tablet:flex-row">
          <Button label="SOBRE MIM" icon={<KeyboardArrowRight />} fill />
          <Button label="CONTATE-ME" outlined />
        </div>
      </div>
      <div className="w-[90%] h-auto flex justify-center items-center tablet:w-[20%] laptop:justify-end">
        <Image
          src={"/not-found-image.jpg"}
          width={180}
          height={180}
          alt="logo example"
        />
      </div>
    </section>
  );
};
