import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ComponentType } from "react";

type ButtonParams = {
    value: string;
    link: string;
    Icon: ComponentType<{ size?: number }>
}

const PrimaryButton = ({value,link,  Icon} : ButtonParams) => {
  return (
    <Button className="bg-[#023246] flex items-center gap-2 ">
          <Link to={link} className="text-white">
            {value}
          </Link>
          <span>
            <Icon size={16} />
          </span>
        </Button>
  );
};

export default PrimaryButton;