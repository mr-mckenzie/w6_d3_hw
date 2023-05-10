const Park = function (name, ticketPrice, dinosaurCollection) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = dinosaurCollection;
}

Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurCollection.push(dinosaur)
}

Park.prototype.removeLastDinosaur = function() {
    this.dinosaurCollection.pop()
}

Park.prototype.findMostVisitors = function() {
    let mostVisitors = 0
    let indexCounter = 0
    let mostVisitedDino

    for (const dino of this.dinosaurCollection) {

        if (dino.guestsAttractedPerDay > mostVisitors) {
            mostVisitors = dino.guestsAttractedPerDay
            mostVisitedDino = dino
        }
        indexCounter ++
    }

    return mostVisitedDino
}

Park.prototype.findAllBySpecies = function (species) {
    let indexCounter = 0
    const indexArray = []

    for (const dino of this.dinosaurCollection) {
        if (dino.species === species) {
            indexArray.push(indexCounter)
        }
        indexCounter ++
    }
    return indexArray
}

Park.prototype.getDailyVisitors= function () {
    let visitorCount = 0
    for (const dino of this.dinosaurCollection) {
        visitorCount += dino.guestsAttractedPerDay
    }
    return visitorCount
}

Park.prototype.getYearlyVisitors = function () {
    //assuming this park is only open for 350 days a year
    const yearlyVisitors = 350 * this.getDailyVisitors()
    return yearlyVisitors
}

Park.prototype.getAnnualRevenue = function () {
    const annualRevenue = this.ticketPrice * this.getYearlyVisitors()
    return annualRevenue
}

// My first version of removeBySpecies is below (it works)
// Park.prototype.removeBySpecies = function(species) {
//     for (let i = 0; i<this.dinosaurCollection.length; i++) {
//         if (this.dinosaurCollection[i].species === species) {
//             this.dinosaurCollection.splice(i, 1)
//             i--
//         }
//     }
// }

// Second attempt, this time using the findAllBySpecies function
Park.prototype.removeBySpecies = function(species) {
    indexArray = this.findAllBySpecies(species)
    indexArray.reverse()
    for (index of indexArray){
        this.dinosaurCollection.splice(index, 1)
    }
}

module.exports = Park;