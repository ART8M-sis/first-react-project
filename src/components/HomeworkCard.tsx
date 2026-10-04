import clsx from 'clsx';

interface HomeworkCardProps {
  title: string;
  course: string;
  isCompleted: boolean;
  score?: number;
}

export default function HomeworkCard({title,course,isCompleted,score} : HomeworkCardProps){
    return(
        <div className={clsx(
            'p-4 rounded-lg shadow-md border',
            {
                'bg-green-100 border-300' : isCompleted,
                'bg-orange-100 border-300' : !isCompleted,
            }
        )}>
            <h3>{title}</h3>
            <p>Курс:{course}</p>
        
            {isCompleted ? (
                <div>
                    {score !=undefined ? (
                        <p>Оцінка: {score}/100</p>
                    ) : (
                        <p>Очікуе перевірки...</p>
                    )}
                </div>
            ) : (
                <button>Здати роботу</button>
            )}
        </div>
    )
}