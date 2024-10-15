import { features } from "../constants"


const Realisation = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[600px]">
    <div className="text-center">
        <span className="bg-neutral-900 text-blue-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
        realisations
        </span>

        <h2 className="flex-auto text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-10 traking wide ">
            Admirez
            <span className="bg-gradient-to-r from-blue-400 to-blue-950 text-transparent bg-clip-text">{" "} le travail</span>
        </h2>
    </div>

    <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((ft, index)=>(
            <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
                <div className="flex mx-6 h-60 w-80 p-2 bg-neutral-900 text-blue-700 justify-center items-center rounded-full">
                {ft.icon}
                </div>
                <div >
                    <h5 className="bg-gradient-to-r from-blue-400 to-blue-950 text-transparent bg-clip-text mt-1 mb-6 text-xl uppercase">
                    {ft.text}
                    </h5>
                    <p>
                    {ft.description}
                    </p>
                </div>
            </div>

            </div>
        ))}
    </div>

    </div>
  )
}

export default Realisation