const ctx = document.querySelector('.js-chart').getContext('2d');

function fetchData() {
    fetch('../DataBase/ZonAnn.Ts+dSST.csv')
        .then(res => res.text())
        .then((data) => {
            const parsedData = Papa.parse(data, { header: true, }).data;

            const lables = parsedData.map(entry => entry.Year);
            console.log(lables);

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: lables,
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
}

fetchData()

