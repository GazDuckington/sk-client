const API_KEY: string = import.meta.env.VITE_API_KEY;

async function getFetcher(url: string) {
	try {
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': API_KEY
			}
		});
		const data = await res.json();
		if (res.ok) {
			return data;
		}
	} catch (err) {
		console.log(err);
	}
}

export default getFetcher;
