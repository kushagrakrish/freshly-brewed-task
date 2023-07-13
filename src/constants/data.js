import Fb from "../assets/meta.png";
import Amazon from "../assets/amazon.png";
import spotify from "../assets/spotify.png";
import UI from "../assets/Ux.png";
import Product from "../assets/product.png";
import marketing from "../assets/marketing.png";
import Data from "../assets/DataSciene.png";
import teaching from "../assets/teaching.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar3.png";
import avatar3 from "../assets/avatar2.png";

export const images = [Amazon, spotify, Fb];

export const services = [
  {
    title: "UI/UX",
    img: UI,
  },
  {
    title: "Product Marketing",
    img: Product,
  },
  {
    title: "Marketing",
    img: marketing,
  },
  {
    title: "Data science",
    img: Data,
  },
  {
    title: "teaching",
    img: teaching,
  },
];

export const serviceTypeOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const testimonial = [
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Alisa",
    avatar: avatar1,
    company: "Founder,XOXO",
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Michel",
    avatar: avatar2,
    company: "Manager,QWERTY",
  },
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Lee Cooper",
    avatar: avatar3,
    company: "HR Director, Meta",
  },
];
