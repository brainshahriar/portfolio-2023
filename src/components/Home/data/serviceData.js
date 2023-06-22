import frontendIcon from "../../../assets/images/frontend.png";
import uiIcon from "../../../assets/images/uiux.png";
import backendIcon from "../../../assets/images/backend.png";
import responsiveIcon from "../../../assets/images/responsive.png";
import customization from "../../../assets/images/custom.png";
import deployment from "../../../assets/images/deployment.png";
export const serviceData = () => {
    return {
        description:
            "Unleash The Power Of Software Innovation, Meet The Code Crusader, A Full Stack Developer On A Mission. From Captivating Interfaces To Robust Systems, I Create Digital Magic, Join Forces And Let's Shape The Future With Code That's Truly Fantastic!",
        items: [
            {
                title: "User Friendly UI/UX",
                description: "Creating intuitive interfaces that delight users and enhance their experience",
                icon:uiIcon ,
            },
            {
                title: "Frontend Development",
                description: "Transforming designs into interactive digital experiences",
                icon: frontendIcon,
            },
            {
                title: "Backend Development",
                description: "Powering applications with robust and efficient server-side functionality",
                icon: backendIcon,
            },
            {
                title: "Responsive Design",
                description: "Adapting seamlessly to every device, delivering a consistent and optimal user experience",
                icon: responsiveIcon,
            },
            {
                title: "Software Customization",
                description: "Tailoring solutions to meet unique business needs, unlocking the full potential of technology",
                icon: customization
            },
            {
              title: "Deployment and Maintenance",
              description: "Ensuring smooth and reliable operation of software systems throughout their lifecycle",
              icon: deployment,
          }
        ],
    };
};
