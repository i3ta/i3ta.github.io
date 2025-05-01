export const About = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-8">
      <h1 className="gradient-heading col-span-2 text-center">About</h1>
      <div className="content col-span-2 flex flex-col gap-4 p-4">
        <p>
          As a member of my school’s informatics olympiad team, I discovered a
          deep passion for programming—drawn by the thrill of problem-solving
          and the creativity of building complex systems from a blank screen.
          Inspired by my parents, both of whom are doctors, I’ve also grown up
          with a strong appreciation for the impact of medicine. Bioinformatics
          gives me a way to unite these two worlds: the power of computation and
          the drive to improve lives.
        </p>
        <p>
          I believe technology has the potential to make healthcare more
          accessible, affordable, and equitable. My goal is to help bridge the
          gap in care for underserved communities, especially those in rural or
          impoverished areas. Through code and compassion, I hope to build tools
          that bring hope and healing to those who need it most.
        </p>
      </div>
      <img
        src="IMG_0729.jpg"
        alt="Picture of Aaron standing in flowers"
        className="rounded-xl shadow-black !shadow-lg"
      />
    </div>
  );
};
