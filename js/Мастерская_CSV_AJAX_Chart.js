const ctx = document.querySelector('.js-chart').getContext('2d');
const Global_TEMPERATURE = 14;

fetchData()
    .then(parseData)
    .then(getLabelAndData)
    .then(({ years, temps, north, south }) => drawChart(years, temps, north, south))

function fetchData() {
    return fetch('https://vadymmelnyk21.github.io/learning/DataBase/ZonAnn.Ts+dSST.csv')
        .then(res => res.text())
}

function parseData(data) {
    return Papa.parse(data, { header: true, }).data;
}

function getLabelAndData(data) {
    return data.reduce(
        (acc, entry) => {
            acc.years.push(entry.Year);
            acc.temps.push(Number(entry.Glob) + Global_TEMPERATURE);
            acc.north.push(Number(entry.NHem) + Global_TEMPERATURE);
            acc.south.push(Number(entry.SHem) + Global_TEMPERATURE);

            return acc;
        }, { years: [], temps: [], north: [], south: [] })
}

function drawChart(labels, temps, north, south) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Средняя глобальная температура',
                data: temps,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false,
            },
            {
                label: 'Средняя северная температура',
                data: north,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: false,
            },
            {
                label: 'Средняя южная температура',
                data: south,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                fill: false,
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback(value) {
                            return value + '°';
                        }
                    }
                }
            }
        }
    });
}
