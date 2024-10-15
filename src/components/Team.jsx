import { pricingOptions } from "../constants";

const Team = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking wide">
        Notre{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-950 text-transparent bg-clip-text">
          {" "}
          Equipe
        </span>
      </h2>
      <div className="flex flex-wrap hover">
        {pricingOptions.map((options, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2 ">
            <div className="p-30 border border-neutral-700 rounded-md mt-12">
              {options.image}
              <h3
                href="#"
                className="bg-gradient-to-r from-blue-400 to-blue-950 text-transparent bg-clip-text inline-flex justify-center items-center text-center w-full h-0 p-2 mt-4 tracking-tight text-2xl rounded-lg transition duration-200"
              >
                {options.post}
              </h3>
              <h3
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-2 p-8 mt-8 tracking-tight text-2xl hover:bg-blue-900 rounded-lg transition duration-200"
              >
                {options.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
