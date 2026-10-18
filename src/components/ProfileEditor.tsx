import { useState } from "react";
import clsx from "clsx";

export default function ProfileEditor() {
  const [profile, setProfile] = useState({
    name: "Ваше Ім'я",
    specialty: "React Developer",
    isOnline: true,
  });

  return (
    <div className="flex flex-wrap justify-center gap-5 p-4">
      {/*Ліва колонка*/}
      <div className="p-5 border-2">
        <h2>Налаштування профілю</h2>

        <p className="text-gray-600 mt-4">Ім'я:</p>
        <input
          type="text"
          className="p-2 border"
          placeholder="Введіть ім'я..."
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />

        <p className="text-gray-600 mt-4">Спеціальність:</p>
        <input
          type="text"
          className="p-2 border"
          placeholder="Введіть спеціальність..."
          value={profile.specialty}
          onChange={(e) =>
            setProfile({ ...profile, specialty: e.target.value })
          }
        />

        <div>
          <label className="flex items-center gap-2 mt-4 text-gray-600">
            <input
              type="checkbox"
              checked={profile.isOnline}
              onChange={(e) =>
                setProfile({ ...profile, isOnline: e.target.checked })
              }
            />
            Онлайн
          </label>
        </div>
      </div>

      {/* Права колонка - прев'ю */}
      <div className="p-5 border-2">
        <h2>Мій профіль</h2>

        <h3 className="p-4">Ім'я: {profile.name}</h3>

        <h3 className="p-4">Спеціальність: {profile.specialty}</h3>

        <div className="flex items-center gap-2 mt-4">
          <div
            className={clsx(
              "w-3 h-3 rounded-full",
              profile.isOnline ? "bg-green-500" : "bg-gray-400",
            )}
          ></div>

          <span className="text-gray-600">
            {profile.isOnline ? "Онлайн" : "Офлайн"}
          </span>
        </div>
      </div>
    </div>
  );
}
