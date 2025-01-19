import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      className=" text-center w-full  sm:w-[85%] m-auto  pb-52 lg:py-52 "
      id="contact"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-2 justify-center items-center w-full sm:w-[85%] m-auto">
        <h2 className=" text-lg sm:text-3xl text-secondary-color-3 font-semibold font-idgrotesk">
        Ready to take the next step? Let’s talk!
        </h2>
        <h3 className=" text-2xl sm:text-4xl font-bold">Get in Touch</h3>
        <p className="text-base sm:text-lg">
          I&apos;m currently open to new job opportunities. Contact me if you are
          interested in having me on your team, working on your project, seeking
          mentorship, or just want to say hello. Please click the button below
          or send an email to{" "}
          <Link
            href={"mailto:your.mohdarif14011@gmail.com"}
            className=" text-secondary-color-3 font-medium"
          >
            mohdarif14011@gmail.com
          </Link>
          .
        </p>
        <Button asChild variant={"outline"}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"mailto:your.mustaphafarouk41@gmail.com"}
            className=" text-base flex items-center justify-center gap-3 px-5 py-2  font-bold w-max  mt-5   border-[1px] hover:bg-[#FBEDDD]  transition-all border-black rounded-lg"
          >
            Send A Message
            <Image
              alt="message"
              src={"/svgs/message-programming.svg"}
              width={25}
              height={25}
            />{" "}
          </Link>
        </Button>
      </div>
      
    </section>
  );
};
export default Contact;
