export default  {


	async getProducts() {
		const res = await fetch('./services/products.json');
		const d = await res.json();
		console.log(d.data)
		return d.data;
    }

   
}