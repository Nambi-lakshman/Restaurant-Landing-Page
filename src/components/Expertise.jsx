import { CUSINES } from "../constants";

const Expertise = () => {
  return (
    <section id="expertise" className="py-12">
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Expertise
      </h2>
      <div className="container mx-auto px-4">
        {CUSINES.map((cusine, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center border-b-4 border-dotted border-neutral-700/40 py-6"
          >
             
            <div className="md:w-1/3 flex justify-center">
              <img
                src={cusine.image}
                alt={cusine.title}
                className="w-[450px] h-[400x] rounded-3xl object-cover shadow-md"
              />
            </div>
          
            <div className="md:w-2/3 mt-4 md:mt-0 md:pl-8 text-center md:text-left">
              <div className="text-2xl font-bold mb-2">{cusine.number}</div>
              <h3 className="text-2xl uppercase tracking-tighter text-rose-300">
                {cusine.title}
              </h3>
              <p className="mt-2 text-lg tracking-tighter">
                {cusine.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
