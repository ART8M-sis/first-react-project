import clsx from 'clsx';

interface LessonCardProps {
  topic: string;
  date: string;
  isOnline: boolean;
  zoomLink?: string;
}

export default function LessonCard({ topic, date, isOnline, zoomLink }: LessonCardProps) {
  return (
    <div
      className={clsx(
        'p-4 rounded-lg shadow-md border m-2',
        {
          'bg-blue-100 border-300': isOnline,
          'bg-purple-100 border-300': !isOnline,
        }
      )}
    >
      <h3>{topic}</h3>
      <p>Дата: {date}</p>

      {isOnline && zoomLink && (
        <a href={zoomLink} target="_blank" rel="noreferrer">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-3 px-6">Підключитися до Zoom</button>
        </a>
      )}

      {!isOnline && (
        <p>Аудиторія 404. Не забудьте ноутбук!</p>
      )}
    </div>
  );
}