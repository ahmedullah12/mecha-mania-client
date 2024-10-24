import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ComponentType } from "react";

type ButtonParams = {
  value: string;
  link: string;
  Icon: ComponentType<{ size?: number }>;
};

const PrimaryButton = ({ value, link, Icon }: ButtonParams) => {
  return (
    <Link to={link}>
      <Button className="bg-[#023246] flex items-center gap-2 ">
        <span className="text-white">{value}</span>
        <span>
          <Icon size={16} />
        </span>
      </Button>
    </Link>
  );
};

export default PrimaryButton;
