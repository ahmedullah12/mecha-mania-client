import { Card, CardContent } from "@/components/ui/card";
import { BiCog, BiPalette, BiGridAlt, BiCodeBlock } from "react-icons/bi";
import { BsFillLightbulbFill } from "react-icons/bs";

const options = [
  {
    header: "Switch Types",
    text: "Choose from a variety of switch types including linear, tactile, and clicky, each offering a distinct typing feel. Popular brands include Cherry, Gateron, and Kailh.",
    icon: BiCog,
  },
  {
    header: "Keycaps",
    text: "Customize your keyboard with different keycap materials and designs. Options range from PBT plastic to artisan keycaps, providing both aesthetic and functional benefits.",
    icon: BiPalette,
  },
  {
    header: "Layouts",
    text: "Mechanical keyboards are available in various layouts including full-size, tenkeyless, and compact, allowing users to select the best fit for their workspace and needs.",
    icon: BiGridAlt,
  },
  {
    header: "Backlighting",
    text: "Enhance your typing experience with customizable RGB lighting. Many mechanical keyboards offer programmable lighting effects, enabling you to create a visually stunning setup.",
    icon: BsFillLightbulbFill,
  },
  {
    header: "Macros and Programming",
    text: "Advanced users can program macros and custom key functions to streamline tasks and improve efficiency. Many mechanical keyboards come with software support for extensive customization.",
    icon: BiCodeBlock,
  },
];

const CustomizableOptions = () => {
  return (
    <section className="md:container mx-auto my-12 p-6">
      <h1 className="text-xl md:text-2xl font-bold text-center mb-10">
        Customizable Options
      </h1>
      <Card className="mb-8 py-6">
        <CardContent>
          {options.map((option, index) => (
            <div className="flex items-start mb-6" key={index}>
              <option.icon className="text-[#023246] mr-4" size={32} />
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-2">{option.header}</h2>
                <p className="text-sm md:text-base">{option.text}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default CustomizableOptions;
