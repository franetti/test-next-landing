"use client";
import { useState } from "react";
import FaqHelpCenter from "./FaqHelpCenter";
import { BiSolidRightArrow } from "react-icons/bi";
import { useTranslations } from "next-intl";
export type HelpCenterType = {
  title: string,
  questionsKeys: string[],
};


export default function Questions({ title, questionsKeys }: HelpCenterType) {
  const t = useTranslations('helpCenter')
  const [arrow, setArrow] = useState(false);
  const handleRotate = () => setArrow(!arrow);
  const rotate = arrow ? "rotate(90deg)" : "rotate(0)";

  return (
    <li className="border-2 my-3 md-0 md:mx-2 rounded-md shadow-md w-full">
      <span className="flex items-center p-5">
        <BiSolidRightArrow
          className="mr-6 text-orange-500 cursor-pointer flex-shrink-0"
          style={{ transform: rotate, transition: "all 0.2s linear" }}
          onClick={handleRotate}
        />
        <h3 className="cursor-pointer font-bold" onClick={handleRotate}>
          {title}
        </h3>
      </span>
      <ul className="ml-12 text-xl">
        {arrow &&
          questionsKeys.map((key:string) => (
            <FaqHelpCenter
              title={ t(`${title}.${key}.question`)}
              desc={ t(`${title}.${key}.answer`)}
              key={key}
            />
          ))}
      </ul>
    </li>
  );
}
