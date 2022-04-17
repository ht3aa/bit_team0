export default function statisticNumber(element) {
    const statisticNumbers = {
        team: 0,
        customers: 0,
        projects: 0,
        folowersInstagram: 0,
        folowersFacebook: 0,
        services: 0,
    }

    const intervalId1 = setInterval(() => {
        element.children[0].children[0].children[0].innerText = statisticNumbers.customers++;
        if(statisticNumbers.customers > 6) {
            clearInterval(intervalId1);
        }
    }, 50)
    const intervalId2 = setInterval(() => {
        element.children[1].children[0].children[0].innerText = statisticNumbers.team++;
        if(statisticNumbers.team > 4) {
            clearInterval(intervalId2);
        }
    }, 50)
    const intervalId3 = setInterval(() => {
        element.children[2].children[0].children[0].innerText = statisticNumbers.projects++;
        if(statisticNumbers.projects > 6) {
            clearInterval(intervalId3);
        }
    }, 50)
        const intervalId4 = setInterval(() => {
        element.children[3].children[0].children[0].innerText = statisticNumbers.folowersInstagram++;
        if(statisticNumbers.folowersInstagram > 134) {
            clearInterval(intervalId4);
        }
    }, 50)
    const intervalId5 = setInterval(() => {
        element.children[4].children[0].children[0].innerText = statisticNumbers.folowersFacebook++;
        if(statisticNumbers.folowersFacebook > 6) {
            clearInterval(intervalId5);
        }
    }, 50)
    const intervalId6 = setInterval(() => {
        element.children[5].children[0].children[0].innerText = statisticNumbers.services++;
        if(statisticNumbers.services > 1) {
            clearInterval(intervalId6);
        }
    }, 50)
}