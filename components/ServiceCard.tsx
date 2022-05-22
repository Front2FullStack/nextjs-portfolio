import { FunctionComponent } from "react";
import IService from "../types/Services";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, details, title },
}) => {
  const createMarkup = () => {
    return {
      __html: details
    };
  };
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-green-500" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <div dangerouslySetInnerHTML={createMarkup()}/>
      </div>
    </div>
  );
};

export default ServiceCard;
