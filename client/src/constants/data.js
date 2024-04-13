import { PiTidalLogo } from "react-icons/pi";
import { MdGroupAdd } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { FaUserSecret } from "react-icons/fa"
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";

export const data = [
  {
    icon: PiTidalLogo,
    title: "All Information",
    link: '/all-information',
  },
  {
    icon: MdGroupAdd,
    title: "Add Mentor",
    link: '/add-mentor',
  },
  {
    icon: GrUpdate,
    title: "Update Mentor",
    link: '/update-mentor',
  },
  {
    icon: FaUserSecret,
    title: "My Account",
    link: '/my-account',
  },
]

export const mentors = [
  {
    title: "Mentors",
    icon: FaChalkboardTeacher,
    count: '110',
  },
  {
    title: "Pupils",
    icon: PiStudentBold,
    count: '1105',
  },
]

