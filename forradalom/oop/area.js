/**
 *Area osztály elemet hoz létre egy konténerben
 * @class
 */
class Area {
    /**
     * Létrehoz egy új div elemet a megadott osztálynévvel, és elhelyezi a konténerben
     * @constructor
     * @param {string} className - Az új div elem osztályneve
     */
    constructor(className) {
        // Megpróbáljuk megtalálni a '.containeroop' osztályú elemet a DOM-ban
        let containerDiv = document.querySelector('.containeroop');
    
        // Ellenőrizzük, hogy létezik-e már a konténer
        if (!containerDiv) {
            // Ha nem létezik, létrehozunk egy új div elemet
            containerDiv = document.createElement('div');
            // Beállítjuk az osztálynevet 'containeroop'-ra
            containerDiv.className = 'containeroop';
            // Hozzáadjuk az új konténert a body-hoz
            document.body.appendChild(containerDiv);
        }
        
        // Létrehozunk egy új div elemet
        const div = document.createElement('div');
        // Beállítjuk az átadott className-t az új div osztályaként
        div.className = className;
        
        // Hozzáadjuk az új div elemet a konténerhez
        containerDiv.appendChild(div);
    }
}