const API_KEY: string = import.meta.env.VITE_API_KEY;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getFetcher(url: string): Promise<any> {
	try {
		const res = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: API_KEY
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function postFetcher(url: string, postData: string): Promise<any> {
	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: API_KEY
			},
			body: JSON.stringify({ data: postData })
		});
		const data = await res.json();
		if (res.ok) {
			return data;
		}
	} catch (err) {
		console.log(err);
	}
}
