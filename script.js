function generateArray() {
    const container = document.getElementById('array-container');
    container.innerHTML = "";

    for (let i=0; i<20; i++){
        const value = Math.floor(Math.random() * 100) + 10;

        const bar = document.createElement('div');
        bar.classList.add("bar");
        bar.style.height = `${value}px`;

        container.appendChild(bar);
    }
}