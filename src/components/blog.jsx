import React from "react";
import b1 from "../assets/image38.jpeg";
import b2 from "../assets/image39.jpeg";
import b3 from "../assets/image40.jpeg";
import b4 from "../assets/image41.jpeg";
import "./navbar.css";
const Blog = () => {
  return (
    <div>
      {/* <div> 
        <h1></h1>
      </div>
      <div>
        <img src=""></img>
      </div>
      <div className="text-left gap-10">
        <p>
          In the vast tapestry of human existence, few aspects are as central to
          our individuality and societal interactions as our facial identity.
          From ancient civilizations to modern technological advancements, the
          recognition and interpretation of faces have played a pivotal role in
          shaping human interactions and cultural dynamics.
        </p>
        <p>
          Facial recognition, the process by which a computer system identifies
          or verifies a person’s identity from digital images or video frames,
          is a concept that has gained significant prominence in recent years.
          However, its roots can be traced back centuries, if not millennia, to
          the earliest forms of human communication and interaction.
        </p>
        <p>
          In ancient civilizations such as Egypt and Mesopotamia, facial
          recognition was an integral part of administrative systems and
          societal structures. Hieroglyphs and cuneiform tablets often depicted
          rulers and deities with distinctive facial features, serving both as a
          form of identification and a means of conveying power and authority.
        </p>
        <p>
          Fast forward to the Renaissance period, and we witness a burgeoning
          interest in portraiture and the study of human anatomy. Artists such
          as Leonardo da Vinci and Michelangelo meticulously studied facial
          expressions and proportions, seeking to capture the essence of
          individual facial identity on canvas. These portraits not only
          immortalized the likeness of their subjects but also provided insights
          into the cultural norms and values of the time.
        </p>
        <p>
          As societies progressed and technology advanced, so too did our
          methods of facial recognition. The advent of photography in the 19th
          century revolutionized the way we capture and preserve facial
          identity, allowing for more accurate representations and documentation
          of individuals from all walks of life.
        </p>
        <p>
          In the 20th and 21st centuries, facial recognition technology
          underwent exponential growth, fueled by advancements in computer
          science and artificial intelligence. From security systems and law
          enforcement to social media and marketing, the applications of facial
          recognition are vast and varied, raising important questions about
          privacy, ethics, and individual rights.
        </p>
        <p>
          Despite its undeniable utility, facial recognition is not without its
          controversies and challenges. Issues of bias and inaccuracies have
          been raised, particularly concerning the disproportionate impact on
          marginalized communities. Moreover, the potential for misuse and abuse
          of facial recognition technology raises serious concerns about civil
          liberties and human rights.
        </p>
        <p>
          In conclusion, the journey of facial identity through time and culture
          is a complex and multifaceted one. From its humble beginnings in
          ancient civilizations to its current prominence in the digital age,
          the recognition and interpretation of faces have shaped our
          understanding of ourselves and the world around us. As we continue to
          navigate the evolving landscape of facial recognition, it is essential
          to remain vigilant and mindful of the ethical and societal
          implications inherent in this powerful technology.
        </p>
      </div> */}
      
      <div className="back ">
        <p className="text-3xl md:text-4xl text-white text-center font-Int font-extrabold py-10">
          BLOG
        </p>
      </div>

      <div className=" grid grid-cols-1 gap-10 lg:grid-cols-2 lg:w-11/12 mx-auto mt-10">
        <div className="mx-8 py-8 px-2 grid grid-cols-1 gap-5 lg:grid-cols-2 bg-white shadow-xl hover:bg-slate-200 cursor-pointer rounded-xl">
          <div className="relative  rounded hover:bg-rose-200">
            <img
              className="rounded-lg transition duration-700 ease-in-out"
              src={b1}
            ></img>
            <div className="absolute top-14 -left-8 bg-rose-500 py-2 px-2" >
            <p className="text-xl text-white">Feb 24</p>
            </div>
          </div>
          <div className=" text-xl font-medium py-8 px-2 text-center">
            <h1>Facial Identity: A Journey Through Time and Culture</h1>
          </div>
        </div>
        <div className="mx-8 px-2 py-8 grid grid-cols-1 gap-5 lg:grid-cols-2 bg-white shadow-xl  hover:bg-slate-200 cursor-pointer rounded-xl">
          <div className=" rounded relative">
            <img className="rounded-lg " src={b2}></img>
            <div className="absolute top-14 -left-8 bg-rose-500 py-2 px-2" >
            <p className="text-xl text-white">Feb 24</p>
            </div>
          </div>
          <div className=" text-xl font-medium py-8 text-center">
            <h1>AI-driven Face Identification: Where and How It’s Used</h1>
          </div>
        </div>
        <div className="mx-8 py-8 px-2 grid grid-cols-1 gap-5 lg:grid-cols-2 bg-white shadow-xl  hover:bg-slate-200 cursor-pointer rounded-xl">
          <div className=" rounded relative">
            <img className="rounded-lg" src={b3}></img>
            <div className="absolute top-14 -left-8 bg-rose-500 py-2 px-2" >
            <p className="text-xl text-white">Feb 24</p>
            </div>
          </div>
          <div className=" text-xl font-medium py-2 text-center">
            <h1>
              Unlocking the Potential: Face Recognition Technology in Everyday
              Life
            </h1>
          </div>
        </div>{" "}
        <div className="mx-8 py-8 px-2 grid grid-cols-1 gap-5 lg:grid-cols-2 bg-white shadow-xl  hover:bg-slate-200 cursor-pointer rounded-xl">
          <div className=" rounded relative ">
            <img className="rounded-lg " src={b4}></img>
            <div className="absolute top-14 -left-8 bg-rose-500 py-2 px-2" >
            <p className="text-xl text-white">Feb 24</p>
            </div>
          </div>
          <div className=" text-xl font-medium py-8 text-center">
            <h1>The Future of AI Face Search</h1>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900 to-rose-700 mt-4 ">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 rounded-2xl py-8 text-center ">
            <div className="mt-3  md:ml-10">
            <h1 className="text-3xl text-white font-extrabold ">FaceSync Treasures your moments</h1>

            </div>
            <div className="">
            <button className=" bg-white text-rose-800 font-bold hover:text-white hover:bg-gradient-to-r from-purple-950 to-rose-800 rounded   p-5">
                Book Your Free Demo
              </button>
            </div>
            </div>
            </div>




    </div>
  );
};
export default Blog;
