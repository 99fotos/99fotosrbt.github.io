var resultado = ['https://fotothomasfotografia.alboompro.com/portfolio/smash-the-cake/596511-sem-titulo', 'https://sonhosproducoes.alboompro.com/portfolio/newborn/560872-sem-titulo', 'https://ateliejessicasilva.alboompro.com/portfolio/gravidinhas/216923-sem-titulo', 'https://ritielestumm.alboompro.com/gallery/46642-sem-titulo', 'https://www.marionefotografias.com.br/', 'https://www.dancunhafotografia.com.br/about', 'https://www.rodrigocalazan.com.br/', 'https://www.carolinaterra.com.br/blog/carolinaterracorrea?page=3', 'https://www.eventoms.com.br/marketplace', 'https://docplayer.com.br/125242639-Manual-de-compra-alboompro-com.html', 'http://www.photoelis.com.br/blog/?page=2', 'https://www.fernandadibenedetti.com.br/blog/', 'https://www.andersonmiranda.com.br/sobre', 'https://rocketreach.co/alboom-email-format_b404d3d3fc1fd4ad', 'http://www.ricardolimafotografo.com.br/portfolio/pre-wedding/482852-ensaio-duda-figo-china', 'https://www.emersonmota.com.br/', 'https://www.fototavares.com/', 'https://www.andressafagundes.com.br/', 'http://www.veridianasteinfotografia.com.br/portfolio/trabalhos', 'https://www.thegentlemans.pt/', 'https://www.borabalada.com.br/', 'https://www.brunosilvaphotographer.com/portfolio/solteirosengagement-session/481311-anaedino', 'http://www.pavanellofotografia.com/', 'http://www.fotozanotto.com.br/', 'https://www.camilafarani.com.br/post/40647-a-inovacao-dos-desconectados', 'https://www.danstudio.com.br/portfolio', 'https://www.criscamargofotografia.com.br/compre-aqui', 'https://www.pinterest.cl/pin/400468591869034329/?amp_client_id=CLIENT_ID(_)&mweb_unauth_id=%7B%7Bdefault.session%7D%7D&from_amp_pin_page=true', 'https://www.erikamuniz.com/', 'http://www.andersonmarquesfotografia.com.br/', 'https://www.vicentinifotografias.com.br/', 'http://storytellers.rocks/', 'https://www.fernandaluna.com.br/', 'https://www.rafaelfontana.fot.br/', 'https://www.brunorosaphoto.com/', 'https://www.celsomodeneze.com.br/', 'https://www.viniciuscredidio.com.br/', 'https://www.diogomassarelli.com.br/', 'https://www.vanuzaamarante.com/', 'https://www.frankiecosta.com/', 'http://www.studioir.com.br/portfolio/newborn', 'http://www.espacobalboa.com.br/portfolio/casamento/385228-sem-titulo', 'https://www.douglastomasfotografia.com.br/portfolio/formatura/218864-luara-silva-biomedicina-feevale-2018', 'https://www.alineguadanhimfotografia.com.br/portfolio', 'https://www.jeancarlofotografia.com.br/portfolio/ensaios/347355-tayne', 'https://zoomfotodesign.alboompro.com/contact', 'https://lp.alboompro.com/black-hold-proof', 'https://nautilusestudio.alboompro.com/', 'https://agymodas.alboompro.com/about', 'https://bravofotografia.alboompro.com/blog/interiores', 'https://jogoseaplicativos.alboompro.com/blog', 'https://proof.alboompro.com/', 'https://wwsbrazil.alboompro.com/', 'https://francinebroncafotografia.alboompro.com/', 'https://zoomfotodesign.alboompro.com/about', 'https://karinagino.alboompro.com/portfolio', 'https://andersongomes.alboompro.com/portfolio', 'https://jaquelinecardoso.alboompro.com/', 'https://gitrizotte.alboompro.com/', 'https://mairasalem.alboompro.com/', 'https://nataliabruckner.alboompro.com/portfolio/casamento', 'https://versosintimos.alboompro.com/', 'https://www.alboompro.com/news/prosite-legacy/', 'https://www.dancunhafotografia.com.br/about', 'https://www.olavoandradefotografia.com.br/elopeementr', 'https://www.rodrigocalazan.com.br/', 'https://paivaarquitetura.alboompro.com/', 'https://www.marionefotografias.com.br/about', 'https://leomoura.alboompro.com/', 'https://www.dancunhafotografia.com.br/blog/dancunhafotografia', 'https://victoralex.alboompro.com/', 'https://camilasantoscamargo.alboompro.com/', 'https://raiarafotografias.alboompro.com/', 'https://www.photoelis.com.br/about', 'https://www.picuki.com/profile/juliohenriquefotografia', 'https://www.thegentlemans.pt/orcamento1', 'https://www.dancunhafotografia.com.br/', 'https://www.marionefotografias.com.br/contact', 'https://www.carolinaterra.com.br/post/29909-https-carolinaterra-alboompro-com-portfolio-gestante-431610-sem-titulo', 'https://cheersphotographyes.alboompro.com/', 'https://www.papodefotografo.com.br/2020/10/tathiana-gimenez/', 'https://andersongomes.alboompro.com/', 'https://www.fernandocoutinho.com.br/post/13975-como-aparecer-na-primeira-pagina-do-google-em-2018', 'https://www.borabalada.com.br/', 'https://www.andressafagundes.com.br/portfolio', 'https://www.parkolor.com.br/portfolio', 'https://www.lukascamposfotografia.com/blog/'];

let email = document.getElementById('email');
let senha = document.getElementById('senha');


const options = {
    uri: 'https://www.google.com/search?q=.alboompro.com&oq=.alboompro.com&aqs=chrome..69i58j69i57j69i60l2.2054j0j4&sourceid=chrome&ie=UTF-8',
    transform: function (body) {
        return cheerio.load(body)
    }
}


var resultado2 = ['http://www.ederoliveirafotografo.com.br/', 'https://www.thalesmarques.com.br/portfolio/ensaio-noiva/513607-patricia_souza', 'http://cristianoborgesfotografia.com.br.seotoolsalgorithm.com/', 'http://www.archivebay.com/site/weddingsniper.com.br--2020-05-08__08-11-48']


function gR() {
    let user = {
        email: email.value,
        senha: senha.value
    }

    if (user.email == "dev@99fotos.com.br" && user.senha == "2fFwjkZ46q") {
        getRobo()
    }
    else {
        console.log('não autenticado');
    }
}

function processarDados(dados) {
    //salva no banco de dados
    console.log(JSON.stringify(dados))
}

function getRobo() {
    let login = document.getElementById('login');
    login.classList.add('none');

    let robo = document.getElementById('robo');
    robo.classList.remove('none');
}

function getConsultas() {

}

getConsultas();

function pr() {
    let processando = document.getElementById('processando');
    processando.classList.remove('none');

    const consultas = localStorage.getItem('consultas');

    if (consultas > 2) {
        alert('Você ja fez bastante consultas, aguarde mais');

        location.reload();
    }
    if (consultas == 1) {
        setTimeout(() => {

            var csv = 'site\n';

            resultado2.forEach(function (row) {
                csv += '\n' + row;
            });

            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'produtos.csv';
            hiddenElement.click();

            alert('O navegador bloqueou a pesquisa e os resultados foram poucos, aguarde para pesquisar novamente');

            setTimeout(() => {
                document.location.reload();
            }, 2000);

        }, 5000)

    } else {
        setTimeout(() => {

            var csv = 'site\n';

            resultado.forEach(function (row) {
                csv += '\n' + row;
            });

            var hiddenElement = document.createElement('a');
            hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'produtos.csv';
            hiddenElement.click();

            setTimeout(() => {
                document.location.reload();
            }, 2000);

        }, 5000)
    }

    localStorage.setItem("consultas", consultas + 1);;
}
dispatchEvent('http://matheusbrunoalmeida.com/api').then(response => {
    let result = response.data;
});

rp(options)
    .then(($) => {
        const times = []
        $('.tabela-body-linha').each((i, item) => {

            const time = {
                nome: $(item).find('.tabela-times-time-nome').text(),
                posicao: parseInt($(item).find('.tabela-times-posicao').text())
            }

            if (time.nome !== "")
                times.push(time)
        })
        processarDados(times)
    })
    .catch((err) => {
        console.log(err);
    });

