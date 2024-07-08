import React from "react";
import { Greendot } from "./Greendot";
import { ProjectCard } from "./ProjectCard";
import { Title } from "./Title";

export const Projects = ({setDisplayText}) => {
  return (
    <div id="projects-section" className="py-10 px-4">
      <Title title={"Our work."} />
      <ProjectCard
      setDisplayText={setDisplayText}
        date={"2024"}
        header={"Premium UI Kits - Agency/SaaS Website Template"}
        description={
          "Premium UI Kits aim of producing high-quality components that allow designers to create faster and more efficiently."
        }
        description2={
          "Scalable and Sustainable UI Design. Yes, that’s our mantra and we’re doing the best we can to keep our promise: to create usable and super easy-to-customize interfaces for busy designers that help them reinforce their creative process."
        }
        role={"Fontend Web Developer"}
        company={"Premium UI Kits"}
        site={"https://www.premiumuikits.com/"}
        img1={"https://www.premiumuikits.com/wp-content/uploads/2021/03/5.jpg"}
        img2={"https://www.premiumuikits.com/wp-content/uploads/2021/03/prod-savory-preview.jpg"}
        img3={"https://www.premiumuikits.com/wp-content/uploads/2023/05/wunder-ui-featured-image.jpg"}
      />
      <ProjectCard
        setDisplayText={setDisplayText}
        date={"2023"}
        header={"Dreamy - Agency/SaaS Website Templates"}
        description={
          "Dreamy is aiming to sell coded website templates to users who is logged in. After a purchase, the user will recieve an email regarding on how to get the site started."
        }
        description2={
          "We help developers and regular users who knows nothing about website to start their first or second sites for an affordable pricing."
        }
        role={"Full-stack Developer"}
        company={"Dreamy"}
        site={"https://dreamy-eight.vercel.app/"}
        img1={"https://dreamy-eight.vercel.app/static/media/Thumbnail.7c0d2fef8aa6a1336ccc.png"}
        img2={"https://dreamy-eight.vercel.app/static/media/Cover.9882531db63e5d5e28b0.png"}
        img3={"https://cdn.dribbble.com/userupload/2940070/file/original-72e4bc4ea337cf2406a639da58e0766c.png?resize=1504x1128"}
      />
  
    </div>
  );
};
