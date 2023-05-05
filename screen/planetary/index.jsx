import { sun, planet } from "../../assets";

const Sun = () => (
  <div className="transform -translate-y-1/2 absolute top-1/2">
    <img
      className="animate-sun-rotate w-[4.5rem] h-[4.5rem] "
      src={sun}
      alt="Sun"
    />
  </div>
);

const Mercury = () => (
  <div className="transform -translate-y-1/2 absolute top-1/2 flex justify-center items-center">
    <div className="animate-mercury-axis w-[6.5rem] h-[6.5rem] rounded-full outline-dashed">
      <img
        src={planet}
        alt="planet"
        sizes="30"
        className="absolute top-[0.4rem] left-[0.4rem] w-[1rem] h-[1rem] animate-mercury-rotate"
      />
    </div>
  </div>
);

const Venus = () => (
  <div className="transform -translate-y-1/2 absolute top-1/2 flex justify-center items-center">
    <div className="animate-venus-axis w-[12rem] h-[12rem] rounded-full outline-dashed">
      <img
        src={planet}
        alt="planet"
        sizes="30"
        className="absolute top-[0.3rem] left-[0.3rem] w-[3rem] h-[3rem] animate-venus-rotate"
      />
    </div>
  </div>
);

const Earth = () => (
  <div className="transform -translate-y-1/2 absolute top-1/2 flex justify-center items-center">
    <div className="animate-earth-axis w-[18rem] h-[18rem] rounded-full outline-dashed">
      <img
        src={planet}
        alt="planet"
        sizes="30"
        className="absolute top-[1.1rem] left-[1.1rem] w-[3rem] h-[3rem] animate-earth-rotate"
      />
    </div>
  </div>
);

const Mars = () => (
  <div className="transform -translate-y-1/2 absolute top-1/2 flex justify-center items-center">
    <div className="animate-mars-axis w-[24rem] h-[24rem] rounded-full outline-dashed">
      <img
        src={planet}
        alt="planet"
        sizes="30"
        className="absolute top-[2.5rem] left-[2.5rem] w-[2rem] h-[2rem] animate-mars-rotate"
      />
    </div>
  </div>
);

const Jupiter = () => (
  <div className="transform -translate-y-1/2 absolute top-1/2 flex justify-center items-center">
    <div className="animate-jupiter-axis w-[31rem] h-[31rem] rounded-full outline-dashed">
      <img
        src={planet}
        alt="planet"
        sizes="30"
        className="absolute top-[2.2rem] left-[2.2rem] w-[4.5rem] h-[4.5rem] animate-jupiter-rotate"
      />
    </div>
  </div>
);

const Saturn = () => (
  <div className="transform -translate-y-1/2 absolute top-1/2 flex justify-center items-center">
    <div className="animate-saturn-axis w-[39rem] h-[39rem] rounded-full outline-dashed">
      <img
        src={planet}
        alt="planet"
        sizes="30"
        className="absolute top-[3.9rem] left-[3.9rem] w-[3.5rem] h-[3.5rem] animate-saturn-rotate"
      />
    </div>
  </div>
);

export const PlanetaryScreen = () => {
  return (
    <div className="h-full w-full overflow-hidden bg-red-900">
      <div className="flex justify-center items-center">
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
      </div>
    </div>
  );
};
