interface CardProps {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
}

const Card = ({ id, name, type, description, image }: CardProps) => {
  const isEven = id % 2 === 0;
  return (
    <section
      className={`flex flex-col lg:flex-row w-full md:px-12 items-center px-0`}
      data-aos={`fade-up`}
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div
        className={`relative z-10 p-4 lg:p-0 w-full sm:w-[90%] lg:w-[40%] lg:bg-transparent lg:rounded-none rounded-b-lg bg-[#FBEDDD] lg:bg-none ${
          isEven ? "lg:order-1 lg:text-left" : "lg:order-2 lg:text-right"
        }`}
      >
        <h6 className="text-lg text-secondary-color-3 font-semibold font-grotesk">
          {type}
        </h6>
        <h1 className="text-2xl mt-2 font-bold dark:lg:text-white dark:text-primary-color">
          {name}
        </h1>
        <div
          className={`px-0 py-0 lg:px-5 lg:py-7 lg:bg-[#FBEDDD] dark:text-primary-color mr-0 ml-0 ${
            isEven ? "lg:-ml-16" : "lg:-mr-16"
          } mt-2 rounded-md relative`}
        >
          {description}
        </div>
        <div
          className={`flex gap-4 items-center justify-normal ${
            isEven ? "lg:justify-start" : "lg:justify-end"
          }`}
        ></div>
      </div>
      <div
        className={`w-full sm:w-[90%] lg:w-[60%] ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <img
          src={image}
          alt={`${name} Image`}
          className="object-contain h-auto lg:object-cover grayscale hover:grayscale-0 transition-all w-full lg:h-[300px] lg:object-left rounded-t-lg lg:rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};
export default Card;
