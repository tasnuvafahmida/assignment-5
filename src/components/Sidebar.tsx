import type { Dispatch, SetStateAction } from "react";
import type { techType } from "../types/techtype";

interface SidebarProps {
  addedTechnologies: techType[];
  setAddedTechnologies: Dispatch<SetStateAction<techType[]>>;
}

const Sidebar = ({
  addedTechnologies,
  setAddedTechnologies,
}: SidebarProps) => {

  const handleRemove = (technologyName: string) => {
    setAddedTechnologies((prev) =>
      prev.filter((tech) => tech.name !== technologyName)
    );
  };

  const handleRemoveAll = () => {
    setAddedTechnologies([]);
  };

  return (
    <div className="card bg-base-100 shadow-sm">

      <div className="card-body p-4">

        <div className="flex justify-between items-center">

          <div>
            <h2 className="card-title">
              Your Stack
            </h2>

            <p className="text-sm text-gray-500">
              {addedTechnologies.length} Technology
              {addedTechnologies.length !== 1 ? "ies" : "y"} Selected
            </p>
          </div>

          {addedTechnologies.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="text-red-500 text-sm"
            >
              Remove All
            </button>
          )}

        </div>

        <div className="divider"></div>

        {addedTechnologies.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No technologies selected yet.
          </p>
        ) : (
          <div className="flex flex-col gap-3">

            {addedTechnologies.map((technology) => (

              <div
                key={technology.name}
                className="border rounded-lg p-3 flex items-center gap-3"
              >

                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-8 h-8"
                />

                <div className="flex-1">

                  <h3 className="font-semibold">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {technology.category}
                  </p>

                </div>

                <button
                  onClick={() => handleRemove(technology.name)}
                  className="text-red-500 font-bold"
                >
                  ✕
                </button>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default Sidebar;
