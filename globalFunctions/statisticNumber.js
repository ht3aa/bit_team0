// customers, team members, project, followers on insta, followers on face, services
const statisticNumbers = [6, 4, 6, 134, 6, 1]

const statisticNumberCounters = [0, 0, 0, 0, 0, 0]

export default function statisticNumber(element, childIndex) {

    if(childIndex >= statisticNumbers.length) {
        return;
    }
    const intervalId = setInterval(() => {
        element.children[childIndex].children[0].children[0].innerText = statisticNumberCounters[childIndex]++;
        if(statisticNumberCounters[childIndex] > statisticNumbers[childIndex] - 1) {
            clearInterval(intervalId);
            statisticNumber(element, ++childIndex, statisticNumbers[++childIndex])
        }
    }, 50)
}