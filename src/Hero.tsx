const Hero = () => {
  return (
    <section
      className="container flex-col-reverse gap-12 md:gap-0 md:flex-row flex justify-between pt-40 pb-20 items-center md:h-screen"
      id="profile"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-bold">Kenzie Taqiyassar</h1>
          <h3 className="text-primaryBlue">Malang, Indonesia</h3>
        </div>

        <p className="max-w-[500px]">
          I am an Informatics Engineering student at Brawijaya University who is
          currently studying Software Engineering and Full Stack Development. I
          also keep to learn and practice in programming everyday and explore
          all of field in IT to keep update my knowledge.
        </p>
      </div>
      <img
        src="https://media.licdn.com/dms/image/D5603AQEJvR6QFuvw3w/profile-displayphoto-shrink_800_800/0/1693023707645?e=1712188800&v=beta&t=JZvLg2qGkn1U0Q-vzFy3QlnCSl2qzJWRTv0hlA62Br4"
        alt="photo profile"
        className="rounded-full max-w-80 max-h-8max-w-80 md:max-w-[480px] md:max-h-[480px]"
      />
    </section>
  );
};

export default Hero;
