
const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between mx-0 my-24 items-center pt-20 lg:pt-24 bg-center xl:mx-[10%] lg:mx-[7%] md:mx-[7%] ">
      <section
        className="mx-auto w-full  xl:w-[70%] relative pb-10   flex flex-col gap-4 lg:w-[70%]"
      >
        <div className="flex flex-col gap-2">
          <span className="mx-auto font-medium text-lg">Hi, I&lsquo;m</span>
          <h1 className="mx-auto font-bold  text-6xl md:text-7xl font-grotesk">
            Mohd Arif
          </h1>
        </div>
        <div className="relative">
          <div className="mx-auto">
            
            
          </div>
          <p className="mt-2 mx-auto text-center ">                         
          Designing intuitive and visually engaging user experiences is my passion. I strive to create interfaces that connect seamlessly with users.
          </p>
        </div>
        
      </section>
    </header>
  );
};
export default Header;
