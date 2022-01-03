const express = require('express');
const app =  express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        css: ['home.css'],
        imgHome: '/img/home.png'
    })
})

app.get('/movie', (req, res) => {
    res.render('movie.hbs', {
        css: ["movie.css"],
        imgM1: '/img/imgM1.png',
        imgM2: '/img/imgM2.png',
        imgM3: '/img/imgM3.png',
        imgM4: '/img/imgM4.png',
        imgM5: '/img/imgM5.png',
        imgM6: '/img/imgM6.png',
    })
})

app.get('/manga', (req, res) => {
    const couvs = [
        {
            name: "couv vol 1",
            img: '/img/couv1.jpg'
        },
        {
            name: "couv vol 2",
            img: '/img/couv2.jpg'
        },
        {
            name: "couv vol 3",
            img: '/img/couv3.jpg'
        },
        {
            name: "couv vol 4",
            img: '/img/couv4.jpg'
        },
        {
            name: "couv vol 5",
            img: '/img/couv5.jpg'
        },
        {
            name: "couv vol 6",
            img: '/img/couv6.jpg'
        },
    ]

    res.render('manga', {
        css:['manga.css'],
        couvManga : couvs
    })
})

app.listen('4000');