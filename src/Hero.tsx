const Hero = () => {
  return (
    <section className="container flexcol md:flex-row flex justify-between py-20 items-center">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-bold">Kenzie Taqiyassar</h1>
          <h3 className="text-primaryBlue">Malang, Indonesia</h3>
        </div>

        <p className="max-w-[500px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          iste commodi dolorum provident voluptates ut rerum debitis qui
          consequatur eos reiciendis error veritatis quia soluta laborum
          exercitationem repudiandae, maxime corporis?
        </p>
      </div>
      <img
        src="https://media.licdn.com/dms/image/D5603AQEJvR6QFuvw3w/profile-displayphoto-shrink_800_800/0/1693023707645?e=1712188800&v=beta&t=JZvLg2qGkn1U0Q-vzFy3QlnCSl2qzJWRTv0hlA62Br4"
        alt="photo profile"
        className="rounded-full w-[480px] h-[480px]"
      />
    </section>
  );
};

export default Hero;
