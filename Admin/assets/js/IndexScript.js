function AdminIndex() {
    $.ajax({
        type: "POST",
        url: '/Users/UserCount',
        success: function (data) {
            debugger
            $('#AllUsersinTab').text(data['data']);
        },
        error: function (request, status, error) {
            swal.fire("Hata!", "Bir sorun ile karşılaşıldı!", "error");
        }
    });
    $.ajax({
        type: "POST",
        url: '/Users/MonthlyDataForAllUserCount',
        success: function (data) {
            debugger
            const ctx3 = document.getElementById('canvas').getContext('2d');
            ctx3.heigh = 100;

            const myChart3 = new Chart(ctx3, {
                type: 'line',
                data: {
                    labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
                    datasets: [
                        {
                            data: [data['January'], data['February'], data['March'], data['April'], data['May'], data['June'], data['July'], data['August'], data['September'], data['October'], data['November'], data['December']],
                            borderColor: "#50cd89",
                            backgroundColor: "#50cd89",
                            label: "Kullanıcı Sayısı",
                            borderWidth: 1,
                            fill: false
                        },
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        },
        error: function (request, status, error) {
            swal.fire("Hata!", "Bir sorun ile karşılaşıldı!", "error");
        }
    });
};
function AdminIndex2(paramaters) {
    $.ajax({
        type: "POST",
        url: '/Users/UserCount',
        success: function (data) {
            debugger
            $('#TimeParamaterUsers').text(data['data2']);
            const ctx2 = document.getElementById('chart').getContext('2d');
            const myChart2 = new Chart(ctx2, {
                type: 'pie',
                data: {
                    labels: ['Gelen Kullanıcı'],
                    datasets: [{
                        data: [data['data2']],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 99, 132, 0.8)',
                            'rgba(255, 206, 86, 0.8)',
                            'rgba(75, 192, 192, 0.8)',
                        ],
                        borderColor: [
                            '#00000'
                        ]
                    },
                    {}
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        },
        error: function (request, status, error) {
            swal.fire("Hata!", "Bir sorun ile karşılaşıldı!", "error");
        }
    });
};
