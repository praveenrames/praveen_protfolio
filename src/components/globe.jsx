import IconCloud from "./ui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "html5",
    "css3",
    "react",
    "nodedotjs",
    "express",
    "tailwindcss",
    "git",
    "vite",
    "mongoDb",
    "sql",
    "github",
    "bootstrap",
    "redux",
    "amazonaws",
    "visualstudiocode",
    "postman",
];

function IconCloudDemo () {
    return (
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}

export default IconCloudDemo;
