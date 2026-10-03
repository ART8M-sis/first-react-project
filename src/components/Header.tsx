interface HeaderProps{
    studentName: string
}

export default function Header({studentName}:HeaderProps){
    return(
        <header>
            <h2>Електронний щоденник студента</h2>
            {/* Інтерпаляція рядків */}
            <p>Вітаемо, {studentName}! Гарного навчання!</p>
        </header>
    )
}