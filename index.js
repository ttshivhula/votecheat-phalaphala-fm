const axios = require('axios')
const cron = require('node-cron')

var songs = new Array();
songs[0] = new Array(4);
songs[0][0] = '48430810'
songs[0][1] = 'Sukendleleni – Jobe London'
songs[1] = new Array(4)
songs[1][0] = '48430811'
songs[1][1] = 'Forever – Setheloft Sky wanda'
songs[2] = new Array(4)
songs[2][0] = '48430812'
songs[2][1] = 'Vula vala – Dj Maphorisa ft Kabza De small'
songs[3] = new Array(4)
songs[3][0] = '48430813'
songs[3][1] = 'Labantwana-Semi Tee ft Miano&amp;Kammu'
songs[4] = new Array(4)
songs[4][0] = '48430814'
songs[4][1] = 'Akulaleki – Something Soweto'
songs[5] = new Array(4)
songs[5][0] = '48430840'
songs[5][1] = 'Umona - NTS Ft Mpumi'
songs[6] = new Array(4)
songs[6][0] = '48430841'
songs[6][1] = 'Koko Matswale - Dj sunco'
songs[7] = new Array(4)
songs[7][0] = '48430842'
songs[7][1] = 'Matorokisi – Makhadzi FT Dj Callme'
songs[8] = new Array(4)
songs[8][0] = '48430843'
songs[8][1] = 'Umlilo - DJ Zinhle'
songs[9] = new Array(4)
songs[9][0] = '48430844'
songs[9][1] = 'Jerusalem - Master KG ft Nomcebo Zikode'

cron.schedule('*/5 * * * * *', () => {
    axios.get('https://polldaddy.com/n/0aaea555cbd131fb0938baff7d68cc54/10480685?1577431276370')
        .then(({
            data
        }) => {

            let random = Math.floor(Math.random() * 99999999999)
            let code = data.match(/'([^']+)'/)[1]
            axios.get(`https://polls.polldaddy.com/vote-js.php?p=10480685&b=1&a=${songs[7][0]},&o=&va=0&cookie=0&n=${code}${random}&url=http%3A//www.phalaphalafm.co.za/sabc/home/phalaphalafm/polls`, { headers: { 'User-Agent': `Android: ${random}` }  })
                .then(({
                    data
                }) => {
                    console.log(data)
                })
                .catch(error => console.log(error))
        })
        .catch((error) => {
            console.log(error)
        })
})
