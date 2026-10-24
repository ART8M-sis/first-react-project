import { useState } from "react";
import clsx from "clsx";

interface CourseReviewProps {
  courseTitle: string;
  teacher: string;
}

export default function CourseReview({
  courseTitle,
  teacher,
}: CourseReviewProps) {
  const [rating, setRating] = useState<number>(5);
  const [reviewText, setReviewText] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (isSubmitted) {
    return (
      <div className="p-5 m-2 rounded-lg border border-green-500 bg-green-50 hover:shadow-md w-80">
        <h2>{courseTitle}</h2>
        <p>Викладач: {teacher}</p>

        <p className="text-gray-700 font-semibold">Дякуємо за відгук!</p>
        <p>Ваша оцінка: {rating} / 5</p>
        <p>Ваш коментар: {reviewText.trim() || "(без коментаря)"}</p>

        <div
          className={clsx(
            "mt-4 px-3 py-1 rounded-full",
            "bg-green-200 text-green-800",
          )}
        >
          Відгук надіслано
        </div>
      </div>
    );
  }

  return (
    <div className={clsx("p-5 m-2 rounded-lg border-2 shadow-sm w-76")}>
      <h2 className="text-xl font-bold text-gray-800">{courseTitle}</h2>
      <p>Викладач: {teacher}</p>

      <p>Оцініть курс:</p>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setRating(value)}
            className={clsx(
              "px-2 rounded-md border transition-all",
              rating >= value
                ? "bg-yellow-400 text-white border-yellow-600"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200",
            )}
          >
            {value} ★
          </button>
        ))}
      </div>

      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Залиште ваш відгук про курс..."
        rows={4}
        className="mt-3 w-full p-2 rounded-md border resize-none"
      />

      <button
        type="button"
        onClick={() => setIsSubmitted(true)}
        className="text-blue-500 mt-2 hover:text-blue-700 transition-all rounded-md border p-1 px-5"
      >
        Відправити відгук
      </button>
    </div>
  );
}
