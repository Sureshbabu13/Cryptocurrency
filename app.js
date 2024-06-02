
const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1';

async function fetchCryptocurrencies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function displayCryptocurrencies() {
    const cryptocurrencies = await fetchCryptocurrencies();
    const main = document.querySelector('main');

    cryptocurrencies.forEach(crypto => {
        const cryptoCard = document.createElement('div');
        cryptoCard.classList.add('crypto-card');
        cryptoCard.innerHTML = `
            <h2>${crypto.name}</h2>
            <p>Price: $${crypto.current_price}</p>
            <p>Market Cap: $${crypto.market_cap}</p>
            <!-- Add more relevant data here -->
        `;
        main.appendChild(cryptoCard);
    });
}

displayCryptocurrencies();
