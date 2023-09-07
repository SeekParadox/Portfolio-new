const About = () => {
  return (
    <section className="About h-screen mx-28">
      <header className="mb-20 h-12 flex items-center border-b-2 border-slate-400 rounded-sm  ">
        <h2 className="">MW</h2>
        <div className="ml-auto p-4 space-y-1 ">
          <span className="block w-6 h-0.5 bg-slate-400 "></span>
          <span className="block w-6 h-0.5 bg-slate-400 "></span>
        </div>
      </header>

      {/* About me section */}
      <div className="grid grid-cols-12">
        <p className="col-start-2 col-span-6">
          <h1>Welcome to my portfolio!</h1>
          <span className="name text-4xl">
            I'm <strong className="text-center">Michael Waller</strong>
          </span>{" "}
          a passionate <span className="font-e  ">SOFTWARE ENGINEER</span> with
          a strong focus on backend development. I'm dedicated to delivering
          reliable and efficient solutions that drive the success of projects.
          Explore my portfolio to discover some of the exciting projects I've
          been a part of and get a glimpse of how I can bring value to your
          team. Let's collaborate and turn your backend vision into reality!
        </p>
        <img
          className=" col-start-9 col-end-13 rounded"
          src="/public/me.jpeg"
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
