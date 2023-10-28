const About = () => {
  return (
   

      <section className="About ">
        <figure>
          <figcaption>I'm <strong>Michael Waller</strong>
          </figcaption>
          <img
          //col-start-9 col-end-13 md:col-start-8  xl:col-start-10
          className="  rounded"
          src="/public/me.jpeg"
          alt="Picture of Michael Waller"
        /></figure>
        <p //col-start-1 sm:col-span-6 md:col-span-6 xl:col-start-2 xl:col-span-6 xl:leading-[4rem] sm:text-xs xl:text-2xl 
        className="">
          A passionate <span className="font-e">SOFTWARE ENGINEER</span> with
          a strong focus on backend development. I'm dedicated to delivering
          reliable and efficient solutions that drive the success of projects.
          Explore my portfolio to discover some of the exciting projects I've
          been a part of and get a glimpse of how I can bring value to your
          team. Let's collaborate and turn your backend vision into reality!
        </p>
      </section>
  );
};

export default About;
