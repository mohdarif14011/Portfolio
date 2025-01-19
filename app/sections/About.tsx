

const About = () => {
  return (
    <section
      className="flex flex-col pt-28 lg:pt-48 mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
      id="about"
      data-aos="fade-up"
    >
      <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-bold">
        <div className="w-[5%%] lg:hidden lg:w-36 border-b-[1px] border-b-border-color"></div>
        <span className=" font-bold text-lg sm:text-2xl font-idgrotesk">
          01. About Me
        </span>
        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </div>
      <div className="lg:flex-row w-full py-10  gap-10">
        
        <div className="w-full lg:w-[100%] order-1 lg:order-2">
          <article>
          Mohd Arif is a passionate UX/UI designer with hands-on experience in creating user-centric designs. During his internships at Kubair and Abhishek Academy, he honed skills in UX research, wireframing, and usability testing to deliver seamless and responsive designs tailored to user needs. His participation in hackathons like Byteverse and NexLearn further showcases his ability to craft innovative solutions under tight deadlines.{" "}
            <br />
            <br />
            Currently pursuing a Bachelor&apos;s in Electronics and Communication Engineering at the National Institute of Technology Patna, Mohd Arif is proficient in tools like Figma and Sketch. With strong technical skills, a collaborative mindset, and leadership experience in design events, he is committed to delivering impactful and engaging user experiences.
          </article>
        </div>

        

      </div>
    </section>
  );
};
export default About;
