import corsairLogo from "../../assets/brands/corsair.png";
import kechronLogo from "../../assets/brands/keychrone.png";
import duckyLogo from "../../assets/brands/ducky.png";
import epomakerLogo from "../../assets/brands/epomakerLogo.png";
import logitechLogo from "../../assets/brands/logitechLogo.png";
import razerLogo from "../../assets/brands/razerLogo.png";
import "../../style/PopularBrands.css"

const data = [
  {
    name: "Corsair",
    img: corsairLogo,
  },
  {
    name: "Kechron",
    img: kechronLogo,
  },
  {
    name: "Ducky",
    img: duckyLogo,
  },
  {
    name: "Epomaker",
    img: epomakerLogo,
  },
  {
    name: "Logitech",
    img: logitechLogo,
  },
  {
    name: "Razer",
    img: razerLogo,
  },
];

const PopularBrands = () => {
  return (
    <div className="md:container my-10 md:my-20">
      <div>
        <h3 className="text-center text-xl md:text-2xl font-bold">Popular Keyboard Brands</h3>
      </div>
      <div className="wrapper">
        {data.map((d, index) => {
          const animationDelay = `calc(30s / ${data.length} * (${data.length} - ${index}) * -1)`;
          return (
            <div key={index} className="item" style={{ animationDelay }}>
              <div className="text-center flex flex-col items-center">
                <img className="w-24 md:w-28 aspect-video object-contain" src={d.img} alt={d.name} />
                <p className="text-lg md:text-xl font-bold">{d.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularBrands;
