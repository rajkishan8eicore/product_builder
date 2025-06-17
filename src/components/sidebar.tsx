import { useState } from "react";

const sidebarData = [
  { title: "Branch Master", subItems: [] },
  { title: "General Master", subItems: [] },
  { title: "Client Master", subItems: [] },
  { title: "Intermediary Master", subItems: [] },
  { title: "TPA Master", subItems: [] },
  { title: "Provider Master", subItems: [] },
  {
    title: "Product Setup",
    subItems: [
      "Line of Business",
      "Product Config",
      "Scheme Config",
      "Coverage Config",
      "Coverage(Benefits) Config",
      "Scheme Cover Tagging",
      "Age Band Config",
      "Scheme Age-Band Tagging",
      "Scheme Relation Tagging",
      "Member Type Config",
      "Scheme Member Type Tagging",
      "Question Config",
      "Product Question Tagging",
      "Medical Test Config",
      "Scheme Medical Test Tagging",
      "Product Premium Config",
      "Product Premium Upload",
      "Product Tnc",
    ],
  },
  { title: "Product Master", subItems: ["product name"] },
];

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-[260px] h-full overflow-y-auto bg-[var(--sidebar)] border-r border-[var(--sidebar-border)]">
      {sidebarData.map((item, idx) => (
        <div key={item.title}>
          <div
            onClick={() => handleToggle(idx)}
            className={`bg-gray-600 text-white px-4 py-2 cursor-${
              item.subItems.length ? "pointer" : "default"
            } font-bold border-b border-gray-400 select-none`}
          >
            {item.title}
          </div>
          {item.subItems.length > 0 && openIndex === idx && (
            <div className="bg-white text-gray-800 shadow-sm">
              {item.subItems.map((sub) => (
                <div
                  key={sub}
                  className="px-7 py-2 border-b border-gray-200 cursor-pointer text-[15px] hover:bg-gray-100"
                >
                  {sub}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
