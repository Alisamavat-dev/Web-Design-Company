import {
  FaUsers,
  FaCode,
  FaCheckCircle,
  FaStar,
  FaLaptopCode,
  FaPalette,
  FaTag,
  FaClock,
  FaHeadset,
  FaHome,
  FaPlusCircle,
  FaCreditCard,
  FaImages,
  FaQuestionCircle,
  FaPhone,
} from "react-icons/fa";

const icons = {
  users: FaUsers,
  code: FaCode,
  "check-circle": FaCheckCircle,
  star: FaStar,
  "arrow-right": FaLaptopCode,
  palette: FaPalette,
  tag: FaTag,
  clock: FaClock,
  support: FaHeadset,
  home: FaHome,
  "plus-circle": FaPlusCircle,
  "credit-card": FaCreditCard,
  collection: FaImages,
  "question-circle": FaQuestionCircle,
  phone: FaPhone,
};

export const Icon = ({ name, className = "text-lg" }) => {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent className={className} /> : null;
};

export default Icon;
