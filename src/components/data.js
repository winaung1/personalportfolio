import { DiNodejsSmall } from "react-icons/di";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoHtml5, IoLogoReact } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMui, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const slides = [
    { item: <IoLogoReact /> },
    { item: <SiTailwindcss /> },
    { item: <FaCss3/> },
    { item: <IoLogoHtml5/> },
    { item: <SiNextdotjs /> },
    { item: <SiMongodb  /> },
    { item: <SiMui /> },
    { item: <DiNodejsSmall /> },
    { item: <SiExpress /> }
  ];
  const projects = [
    { item: <img className="h-full" src="https://www.premiumuikits.com/wp-content/uploads/2021/03/5.jpg" alt="Premium UI Kits 1" /> },
    { item: <img className="h-full" src="https://www.premiumuikits.com/wp-content/uploads/2021/03/prod-savory-preview.jpg" alt="Premium UI Kits 2" /> },
    { item: <img className="h-full" src="https://www.premiumuikits.com/wp-content/uploads/2024/03/io-finance-featured.jpg.webp" alt="Premium UI Kits 2" /> },
    { item: <img className="h-full" src="https://www.premiumuikits.com/wp-content/uploads/2023/05/wunder-ui-featured-image.jpg" alt="Premium UI Kits 3" /> },
    { item: <img className="h-full" src="https://dreamy-eight.vercel.app/static/media/Thumbnail.7c0d2fef8aa6a1336ccc.png" alt="Dreamy 1" /> },
    { item: <img className="h-full" src="https://dreamy-eight.vercel.app/static/media/Cover.9882531db63e5d5e28b0.png" alt="Dreamy 2" /> },
    { item: <img className="h-full" src="https://cdn.dribbble.com/userupload/2940070/file/original-72e4bc4ea337cf2406a639da58e0766c.png?resize=1504x1128" alt="Dreamy 3" /> },
    { item: <img className="h-full" src="https://cdn.dribbble.com/userupload/13752131/file/original-780ebe5a6ab568327cb4a144e879e379.jpg?resize=1504x1128" alt="Dreamy 3" /> },
    { item: <img className="h-full" src="https://cdn.dribbble.com/userupload/14199889/file/original-1d5eb86490f1abbc156d202df2de8cc6.jpg?resize=2048x1536" alt="Dreamy 3" /> }
  ];
  

const experiences = [
    {title: 'Frontend Developer', company: 'Premium UI Kits', date: '2020 - Current'},
    {title: 'Full-Stack Developer', company: 'Dreamy', date: '2023 - Current'},
    {title: 'Frontend Developer', company: 'WinRealtor', date: 'Mar 2023 – May 2023'},
    {title: 'Full-Stack Developer', company: 'Audiophile', date: 'Jan 2023 – Mar 2023'},
    {title: 'Frontend Developer', company: 'Vanderhall Motor Works', date: 'July 2022 – September 2022'},
]

const skills = [
    { item: "React" },
    { item: "Tailwind CSS" },
    { item: "CSS3" },
    { item: "HTML5" },
    { item: "Next.js" },
    { item: "MongoDB" },
    { item: "Material-UI" },
    { item: "Node.js" },
    { item: "Express" }
];


export {slides, projects, experiences, skills}