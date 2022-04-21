const ctx = document.querySelector('.js-chart').getContext('2d');
const Global_TEMPERATURE = 14;

fetchData()
    .then(parseData)
    .then(getLabelAndData)
    .then(({ years, temps }) => drawChart(years, temps))

function fetchData() {
    return fetch('../DataBase/ZonAnn.Ts+dSST.csv')
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

            return acc;
        }, { years: [], temps: [] })
}

function drawChart(labels, data) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: 'Средняя глобальная температура',
                data,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
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
