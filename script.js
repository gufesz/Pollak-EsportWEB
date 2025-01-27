function loadPage(page) {
    const content = document.getElementById('page-content');
    
    switch(page) {
        case 'home':
            content.innerHTML = `
                <div class="home-container">
                    div class="home-section">
                        <h2>Főoldal</h2>
                        <p>Pollák ESport programunk a célja, hogy a diákoknak segítséget adja a modern világában való esportokat folyódni. A programunk célja, hogy a modern technológiát, a csapatmunkát és a versenyszerű játékot segítse a fejlődésre.</p>
                        <a href="#" class="cta-button"></a>
                    </div>
                </div>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <div class="home-container">
                    <div class="home-section">
                        <h2>Rólunk</h2>
                        <p>A Pollák ESport program célja, hogy lehetőséget biztosítson a diákoknak az esport világában való fejlődésre. Programunk ötvözi a modern technológiát, a csapatmunkát és a versenyszerű játékot.</p>
                        <p>Tapasztalt edzőink segítségével a diákok nem csak a játékokban fejlődnek, de olyan készségeket is elsajátítanak, amelyek az élet más területein is hasznosak lehetnek.</p>
                    </div>
                </div>
            `;
            break;
        case 'events':
            content.innerHTML = `
                <div class="home-container">
                    <div class="home-section">
                        <h2>Események</h2>
                        <p>Rendszeresen szervezünk házi bajnokságokat és részt veszünk országos versenyeken. Íme néhány közelgő esemény:</p>
                        <ul>
                            <li>Pollák Kupa - League of Legends verseny (2023. szeptember 15.)</li>
                            <li>CS:GO Bajnokság (2023. október 1-3.)</li>
                            <li>Rocket League Torna (2023. október 20.)</li>
                        </ul>
                        <a href="#" class="cta-button">Jelentkezés az eseményekre</a>
                    </div>
                </div>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <div class="home-container">
                    <div class="home-section">
                        <h2>Kapcsolat</h2>
                        <p>Kérdésed van? Vedd fel velünk a kapcsolatot!</p>
                        <p>Email: esport@pollak.hu</p>
                        <p>Telefon: +36 1 234 5678</p>
                        <p>Cím: 1234 Budapest, Pollák utca 1.</p>
                        <form>
                            <input type="text" placeholder="Név" required>
                            <input type="email" placeholder="E-mail cím" required>
                            <textarea placeholder="Üzenet" required></textarea>
                            <button type="submit" class="cta-button">Küldés</button>
                        </form>
                    </div>
                </div>
            `;
            break;
    }
}