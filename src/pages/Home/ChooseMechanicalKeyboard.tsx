import { Card, CardContent } from "@/components/ui/card";
import { BiCheckCircle } from "react-icons/bi";

const data = [
  {
    header: "Superior Typing Experience",
    text: "Mechanical keyboards provide tactile and audible feedback that enhances typing accuracy and speed. Each keypress is more satisfying and consistent due to individual mechanical switches under each key.",
  },
  {
    header: "Durability",
    text: "Mechanical keyboards are built to last, often outlasting membrane keyboards by millions of keystrokes. The robust construction ensures they can withstand heavy use over time.",
  },
  {
    header: "Customization",
    text: "Users can customize mechanical keyboards with different switches, keycaps, and layouts to suit their preferences. This makes them ideal for both gamers and professionals looking for a personalized typing experience.",
  },
  {
    header: "Ergonomics",
    text: "Many mechanical keyboards offer ergonomic features like adjustable key switches and split layouts, reducing strain and increasing comfort during long typing sessions.",
  },
  {
    header: "Aesthetic Appeal",
    text: "Mechanical keyboards come in a variety of designs and colors, allowing users to express their personal style. RGB lighting and custom keycaps add to the visual appeal, making your keyboard unique.",
  },
];

const ChooseMechanicalKeyboards = () => {
  return (
    <section className="md:container mx-auto my-12 p-6">
      <h1 className="text-xl md:text-2xl font-bold text-center mb-10">
        Why Choose Mechanical Keyboards?
      </h1>
      <Card className="mb-8 py-6">
        <CardContent>
          {data.map((d, i) => (
            <div key={i} className="flex items-start mb-6">
              <BiCheckCircle className="text-green-500 mr-4" size={32} />
              <div>
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  {d.header}
                </h2>
                <p className="text-sm md:text-base">{d.text}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default ChooseMechanicalKeyboards;
