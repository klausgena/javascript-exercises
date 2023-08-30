const findTheOldest = function (aPeople) {
    const aSorted = aPeople.sort(
        (a, b) => {
            const aYearOfDeath = !a.yearOfDeath ? new Date().getFullYear() : a.yearOfDeath;
            const bYearOfDeath = !b.yearOfDeath ? new Date().getFullYear() : b.yearOfDeath;
            const ageA = aYearOfDeath - a.yearOfBirth;
            const ageB = bYearOfDeath - b.yearOfBirth;
            if (ageA > ageB) {
                return -1;
            }
            if (ageA < ageB) {
                return 1;
            }
        }
    );
    return aSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
