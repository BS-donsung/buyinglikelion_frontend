export function calculateAge(birthDateString: string): number {
    const birthDate = new Date(parseInt(birthDateString.substr(0, 4)), parseInt(birthDateString.substr(4, 2)) - 1, parseInt(birthDateString.substr(6, 2)));
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export function determineAgeGroup(birthDateString: string): string {
    const age = calculateAge(birthDateString);

    if (age >= 20 && age < 30) {
        return "20대";
    } else if (age >= 30 && age < 40) {
        return "30대";
    } else if (age >= 40 && age < 50) {
        return "40대";
    } else {
        return "기타 연령대";
    }
}