const utils = () => {

    const URL = "https://ecommerce-shopping.onrender.com";

    const getProducts = async () => {
        try {
            const res = await fetch(URL+ "/product");
            const json = await res.json();
            return json;
        }
        catch (error) 
            { console.log(error); }      
    }

    return { getProducts };
}

export default utils;
