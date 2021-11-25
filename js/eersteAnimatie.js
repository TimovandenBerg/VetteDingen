const svg = document.getElementById("triangles");
const ani1White = document.getElementById("ani1--white1");
const darkGroup = document.getElementById("darkGroup");

svg.onclick = (e) => {
    // var oudeKleur = window.getComputedStyle(ani1White, null).getPropertyValue("fill");

    const colors = ['red', 'blue', 'green', 'orange', 'pink', 'purple', 'black', 
                    'grey', 'lightblue', 'yellowgreen', 'violet', 'turquoise', 'tomato',
                    'teal', 'thistle', 'tan', 'steelblue', 'springgreen', 'slateblue', 
                    'seagreen', 'salmon', 'sandybrown', 'plum', 'peru', 'peachpuff', 
                    'oldlace', 'maroon', 'limegreen', 'lightskyblue', 'lightseagreen', 'lightsalmon', 
                    'ivory', 'khaki'];
    const groepen = [darkGroup, ani1White];
    const rando = () => colors[Math.floor(Math.random() * colors.length)];
    for (i = 0; i < groepen.length; i++) {
        nieuweKleur = rando();
        // Code om wellicht ervoor te zorgen dat niet dezelfde kleur wordt uitgekozen, werkt nog niet.
        // while (oudeKleur === nieuweKleur) {
        //     nieuweKleur = rando();
        //     console.log("Zijn hetzelfde");
        // }
        groepen[i].style.fill = nieuweKleur;
    }
}