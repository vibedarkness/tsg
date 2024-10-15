import { testimonials } from "../constants"

const Temoignage = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-xl sm:text-2xl lg:text-4xl text-center mt-6 lg:my-20 tracking wide">
        Temoignage des{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-950 text-transparent bg-clip-text">
          {" "}
          Clients Satisfait
        </span>
      </h2>

      <div className="flex flex-wrap justify center">

        {testimonials.map((test,index)=>(
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 py-2 px-4">
            <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
                <p>{test.text}</p>
                <div className="flex items-start mt-8">
                    <img src={test.image} alt={test.user} className="w-12 h-12 mr-6 rounded-full border border-neutral-300" />
                    <div>
                        <h6>{test.user}</h6>
                        <span className="text-sm font-normal italic text-neutral-600">{test.company}</span>
                    </div>
                </div>
            </div>



            </div>
        ))}
      </div>
      
      </div>
  )
}

export default Temoignage