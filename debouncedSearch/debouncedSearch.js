
/**
 * Function debounces the input to fetch 
 * results from the API
 */


const inputEle = document.getElementById('search-input');
const resultEle = document.getElementById('search-result');

// Fetch data from API on input
const search = function() {
	const query = this.value;
	const url = `https://autocomplete.clearbit.com/v1/companies/suggest?query=:${query}`;
  fetch(url, {
    method: 'get'
	}).then((res) => res.json()).then(function(res) {
    const names = res.map(obj => obj.name);
    resultEle.innerHTML = names.map((name) => (
      `<li>${name}</li>`
    )).join('');
	}).catch(function(err) {
  	// Error :(
    console.log(err);
  });
};

// Debounces the input function with the given time
const debounce = (func, wait) => {
	let timeout;
	return function(...params) {
  	const self = this; // Store the context
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			func.apply(self, params); // Apply the right context
		}, wait);
	};
}

// bind the debounced function on input.
inputEle.oninput = debounce(search, 400);