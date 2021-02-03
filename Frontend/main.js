const app = new Vue({
	el: "#app",
	data: {
		films: [],
	},
	created() {
		fetch("http://localhost:3001/api/films")
			.then((response) => response.json())
			.then((json) => (this.films = json))
			.catch((err) => console.log(err));
	},
});
