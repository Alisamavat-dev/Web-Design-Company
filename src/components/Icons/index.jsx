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
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const icons = {
  users: FaUsers,
  code: FaCode,
  "check-circle": FaCheckCircle,
  star: FaStar,
  "star-fill": AiFillStar,
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
  instagram: FaInstagram,
  github: FaGithub,
  linkedin: FaLinkedin,
};

export const Icon = ({ name, className = "text-lg" }) => {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent className={className} /> : null;
};

export default Icon;
