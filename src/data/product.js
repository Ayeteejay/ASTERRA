import MasterPlan from "../images/homepage/masterplan.jpg";
import MasterPlanIcon from "../images/homepage/masterplan-icon.svg";
import Recover from "../images/homepage/recover.jpg";
import RecoverIcon from "../images/homepage/recover-icon.svg";
import EarthWorks from "../images/homepage/earthworks.jpg";
import EarthWorksIcon from "../images/homepage/earthworks-icon.svg";

const ProductData = [
  {
    id: 1,
    mainImg: MasterPlan,
    alt: "MasterPlan environment",
    title: "MasterPlan",
    subtitle: "Pipe Deficiency Assessment",
    description:
      "Assesses underground pipe deficiencies so replacement decisions and long-term planning can made with a full view of the system",
    icon: MasterPlanIcon,
    color: "#ff4d1d",
    link: "/masterplan",
    headerLink: "/products/masterplan",
  },
  {
    id: 2,
    mainImg: Recover,
    alt: "Recover environment",
    title: "Recover",
    subtitle: "Leak Detection and Analysis",
    description:
      "Supports leak detection and analysis for potable, waste, and reclaimed water systems to support fast, efficient remediation with vastly reduced use of ground crews",
    icon: RecoverIcon,
    color: "#002bff",
    link: "/recover",
    headerLink: "/products/recover",
  },
  {
    id: 3,
    mainImg: EarthWorks,
    alt: "EarthWorks environment",
    title: "EarthWorks",
    subtitle: "Property Assessment",
    description:
      "Gives property owners, managers, and ground engineers accurate underground moisture assessments to spot potential damage and failure locations before serious problems occur",
    icon: EarthWorksIcon,
    color: "#13cca8",
    link: "/earthworks",
    headerLink: "/products/earthworks",
  },
];
export default ProductData;
