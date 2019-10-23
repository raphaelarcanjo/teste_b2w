const app = new Vue({
    el: '#app',
    data: {
        planet: [],
        isLoading: true
    },
    methods: {
        getPlanet: function () {
            this.isLoading = true
            fetch('https://swapi.co/api/planets')
            .then(response => response.json())
            .then(data => {
                let count = data.count
                let planetID = Math.floor(Math.random() * count) + 1
            
                fetch('https://swapi.co/api/planets/' + planetID)
                .then(response => response.json())
                .then(data => {
                    this.planet = data
                    this.planet.films = data.films.length
                    this.planet.residents = data.residents.length
                    this.isLoading = false
                })
            })
        }
    },
    created: function () {
        this.getPlanet()
    }
})