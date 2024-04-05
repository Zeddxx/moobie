import Image from "next/image";

interface CardWrapperProps {
  children: React.ReactNode;
  heading: string;
  description: string;
  image: string;
}

const CardWrapper = ({
  children,
  description,
  heading,
  image,
}: CardWrapperProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-x-4">
      <div className="w-full hidden lg:flex h-full items-center justify-center">
        <div className="relative h-96 w-full">
          <Image
            src={image}
            alt="Welcoming user with cat and a small girl"
            fill
            className="object-contain h-full w-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full lg:items-start justify-center">
        <div className="">
          <h1 className="text-[clamp(3rem,6vw,4rem)] font-logo tracking-wide">
            {heading}
          </h1>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        <div className="">{children}</div>
      </div>
    </div>
  );
};
export default CardWrapper;
