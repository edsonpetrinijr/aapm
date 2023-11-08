import React from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { IconType } from "react-icons";
import colors from "tailwindcss/colors";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    const openLinkInNewTab = (url: string) => {
        window.open(url, "_blank");
    };

    const SocialIcon: React.FC<{ icon: IconType; url: string }> = ({ icon, url }) => (
        <li className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-zinc-100 transition-all mx-2 shadow-lg">
            <button
                className="w-10 h-10 rounded-full flex justify-center items-center"
                onClick={() => openLinkInNewTab(url)}
            >
                {icon({ size: 20, fill: colors.zinc[700], stroke: colors.zinc[700] })}
            </button>
        </li>
    );

    return (
        <footer className="mt-4">
            <hr className="w-full border-zinc-300" />

            <div className="flex flex-col justify-center items-center p-4">
                <ul className="flex flex-row mb-2">
                    <SocialIcon icon={FiLinkedin} url="https://www.linkedin.com/in/edsonpetrinijr/" />
                    <SocialIcon icon={FiGithub} url="https://github.com/edsonpetrinijr" />
                    <SocialIcon icon={FiTwitter} url="https://twitter.com/edsonpetrinijr" />
                </ul>

                <p>Edson Junior © {year}</p>
            </div>
        </footer>
    );
}
