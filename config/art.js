var Art = require('../models/art');

const randomArt = [
    {
        name: "Skyspace",
        description: "Dem lights are cool",
        image: "https://moody.rice.edu/sites/g/files/bxs1641/f/styles/hero/public/hero/PastedGraphic-3.jpg?itok=jMw3szoN"
    },
    {
        name: "Owl Statue",
        description: "Judgmental Owl",
        image: "http://img.groundspeak.com/waymarking/display/c202450f-1380-4c4f-8cdd-861020b8b7ae.jpg"
    }
]

randomArt.map(({name, description, image}) => {
    Art.findOne({name: name})
    .then(piece => {
        if (!piece) {
            let artPiece = new Art();
            artPiece.name = name;
            artPiece.description = description;
            artPiece.image = image;
            artPiece.save()
            .catch(err => {
                console.log(err)
            })
        }
    })
})