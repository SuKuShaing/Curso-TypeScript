const fetchData = async () => {
    try {
        const API_URL = "https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json";
        const response = await fetch(API_URL);
        debugger;
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { error: 'Error al cargar los datos' };
    }
}

let button : HTMLButtonElement = document.querySelector(".btnInfo") as HTMLButtonElement;
let paragraph : HTMLParagraphElement = document.querySelector(".info") as HTMLParagraphElement;

button.addEventListener("click", async () => {
    paragraph.innerHTML = "Cargando...";
    const data = await fetchData();
    paragraph.innerHTML = data.error || JSON.stringify(data);
});