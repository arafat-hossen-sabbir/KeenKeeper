import React, { use } from "react";

const friendPromise = fetch("/friends.json").then((res) => res.json());

const Allfriends = () => {
  const friendData = use(friendPromise);

  return (
    <div className="bg-base-200">
      <div className="max-w-5xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Your Friends :
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {friendData.map((friend) => (
            <div
              key={friend.id}
              className="bg-white border border-gray-100 rounded p-5 text-center hover:shadow-lg transition duration-200 cursor-pointer"
            >
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-14 h-14 rounded-full mx-auto object-cover"
              />

              <h3 className="mt-3 font-medium text-gray-800 text-base">
                {friend.name}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {friend.days_since_contact} days ago
              </p>

              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                {friend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-[2px] bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <span
                  className={`text-[11px] px-3 py-[3px] rounded-full font-medium ${
                    friend.status === "active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {friend.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allfriends;
