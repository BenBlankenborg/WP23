function changeNames(){
    if(document.querySelector(".active").innerText == 'Assignment 1') {
        document.title = 'Webprogramming (LIX018P05) - Index'
    } else{
        document.title = 'Webprogramming (LIX018P05) - Second'
    }
}

function addArticle() {
    if(document.querySelector(".active").innerText == 'Assignment 1') {
        var elHeader = document.createElement('h1');
        var elText = document.createTextNode('This is my second article');
        elHeader.append(elText);
        var elParagraph = document.createElement('p');
        var elParText = document.createTextNode("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?");
        elParagraph.append(elParText);
        var secondArticle = document.createElement('article');
        secondArticle.append(elHeader);
        secondArticle.append(elParagraph);
        document.querySelector('.col-md-12').appendChild(secondArticle)
    }
}

function changeLink() {
    var list = document.getElementById('links').firstElementChild;
    var links = list.getElementsByTagName('li');
    var link3 = links[2];
    var alink3 = link3.querySelector('a');
    alink3.setAttribute("href", "https://google.com");
    alink3.setAttribute("target", "_blank");
}

function redNav() {
    var nav = document.getElementsByClassName("nav-item");
    for(var i = 0; i < nav.length; i++) {
        nav[i].querySelector('a').style.color = 'red'
    }
}

function javaObject() {
    if(document.querySelector(".active").innerText == 'Assignment 1') {
        var schedule = {
            'Week 1' : 'Assignment 1',
            'Week 2' : 'Assignment 1',
            'Week 3' : 'Assignment 2',
            'Week 4' : 'Assignment 2',
            'Week 5' : 'Assignment 3',
            'Week 6' : 'Assignment 3',
            'Week 7' : 'Final Project',

        }
        var schedulep = document.createElement('p');
        scheduletext = '';
        for(var i in schedule) {
            scheduletext += i + ' => ' + schedule[i] + ", ";
        }
        schedulep.append(scheduletext)
        document.querySelector('.col-md-12').append(schedulep)
    }
}

function sidebar() {
    if(document.querySelector(".active").innerText != 'Assignment 1') {
     var seconddiv = document.querySelector('.container').firstElementChild;
     var thirddiv = seconddiv.firstElementChild;
     thirddiv.removeAttribute('class')
     thirddiv.setAttribute('class', 'col-md-8');
     sbar = document.createElement('div');
     heading = document.createElement('h1');
     htext = document.createTextNode('Sidebar');
     heading.append(htext);
     sbar.appendChild(heading);
     seconddiv.appendChild(sbar)
    }
}


window.addEventListener('DOMContentLoaded', changeNames)
window.addEventListener('DOMContentLoaded', addArticle)
window.addEventListener('DOMContentLoaded', changeLink)
window.addEventListener('DOMContentLoaded', redNav)
window.addEventListener('DOMContentLoaded', javaObject)
window.addEventListener('DOMContentLoaded', sidebar)