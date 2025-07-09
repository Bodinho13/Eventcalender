

const calcDaysOfMonth = (month: number, year: number):number => {
    const m31: number[] = [0, 2, 4, 6, 7, 9, 11];
    if(m31.includes(month))
        return 31;
    else if(month !== 1)
        return 30;
    else if(year % 4 === 0)
        return 29;
    else
        return 28;
}

const months: string[] = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const weekdays: string[] = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

export {
    calcDaysOfMonth,
    months,
    weekdays
}