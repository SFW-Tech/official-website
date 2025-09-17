import React from "react";

interface Foodcardprops {
  heading: string;
  content: string; // multi-line string
}

const highlightStartingNumber = (text: string) => {
  const match = text.match(/^(\d+)(.*)/);
  if (match) {
    const [, number, rest] = match;
    return (
      <>
        <span className="text-black font-bold px-1 rounded">{number}</span>
        {rest}
      </>
    );
  }
  return text;
};

const Foodapplicationcard: React.FC<Foodcardprops> = ({ heading, content }) => {
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="flex flex-col gap-8 bg-gray-50 p-2 md:p-6 rounded-4xl">
      {/* Heading */}
      <div className="flex items-center justify-center gap-4">
        <div className="h-[2px] w-20 bg-gray-300"></div>
        <h2 className="text-blue-950 text-2xl md:text-4xl font-bold whitespace-nowrap">
          {heading}
        </h2>
        <div className="h-[2px] w-20 bg-gray-300"></div>
      </div>

      {/* Content */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 space-y-4 hover:shadow-lg transition">
        {lines.map((line, idx) => {
          if (line.startsWith("-") || /^\d/.test(line)) {
            // Paragraph lines → same indent as bullets
            return (
              <p
                key={idx}
                className="text-gray-700 text-sm md:text-base leading-relaxed pl-6"
              >
                {line.startsWith("-")
                  ? line.replace(/^-+\s*/, "")
                  : highlightStartingNumber(line)}
              </p>
            );
          } else {
            // Bullet lines
            return (
              <ul key={idx} className="list-disc pl-6">
                <li className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {line}
                </li>
              </ul>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Foodapplicationcard;
