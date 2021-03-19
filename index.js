/***
 * Assumptions
 * ScoolClass input is string [A,B]
 * foodPrefererence input string [V,NV]
 */

class SortingHat {
    constructor({ capacity }) {
        this.houseCapacity = capacity;
        this.boardingHouses = {
            "NA": []
        };
        this.rollMap = {}
    }
    register(roll, schoolClass, foodPreferece) {
        schoolClass = String(schoolClass).toUpperCase();
        foodPreferece = String(foodPreferece).toUpperCase();
        if (isNaN(roll)) {
            return "Enter roll number integer value";
        }
        if (String(roll).length < 4) {
            return "Enter roll number in 4 digits";
        }

        if (this.rollMap[roll]) {
            return this.boardingHouses;
        }
        this.houseCapacity -= 1;
        this.rollMap[roll] = `${schoolClass}-${foodPreferece}`;
        if (this.houseCapacity < 0) {
            return this.boardingHouses.NA.push(roll)
        }
        if (this.boardingHouses[`${schoolClass}${foodPreferece}`]) {
            this.boardingHouses[`${schoolClass}${foodPreferece}`].push(roll)
        } else {
            this.boardingHouses[`${schoolClass}${foodPreferece}`] = [roll]
        }
        return this.boardingHouses;
    }
    getBoardingHouses() {
        return this.boardingHouses;
    }

}
const School = new SortingHat({
    capacity: 10
})

module.exports = SortingHat;


