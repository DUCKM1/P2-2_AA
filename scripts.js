

let pages = {
    'Web Akinators': [
        {name: 'Gribi strādāt?', page: 'Kādas darbības plāno veikt?'}, //buttons be  name => which page to
        {name: 'Gribi atpūsties?', page: 'Ko darīsi?'},
        {name: 'Gribi izklaidēties?', page: 'Ko spēlēsi?'}
    ],
    'Kādas darbības plāno veikt?': [
        {name: 'Gramatika', page: 'Izvēlies ko tieši tu gribi?'},
        {name: 'Kods', page: 'Kurā valodā programmēsi?'},
        {name: 'Plānošana', page: 'Kādus plānošanas veidus tu meklē?'},
        {name: 'Tabulas', page: 'Kādas tabulas veidus plāno taisīt?'},
        {name: 'Dokumenti', page: 'Kādus dokumentus plāno taisīt?'}
    ],



    'Kādus dokumentus plāno taisīt?': [
        {name: 'Atskaites', page: 'Atskaišu saite'},
        {name: 'Prezentācijas', page: 'Prezentāciju saite'},
        {name: 'Darba Dokumentus', page: 'Dokumentu saite'}
    ],
    'Atskaišu saite': [
        {name: 'Piktochart', link: 'https://piktochart.com/'}
    ],
    'Prezentāciju saite': [
        {name: 'Google Slides', link: 'https://docs.google.com/presentation'}
    ],
    'Dokumentu saite': [
        {name: 'Google Docs', link: 'https://docs.google.com/document/u/0/'}
    ],



    'Kādas tabulas veidus plāno taisīt?': [
        {name: 'Datu tabulas', page: 'Datu tabulu saite'},
        {name: 'Datu analīzi', page: 'Datu analīzes saite'},
        {name: 'Datu Vizualizāciju', page: 'Datu vizualizācijas saite'}
    ],
    'Datu tabulu saite': [
        {name: 'Google Spreadsheet', link: 'https://docs.google.com/spreadsheets/u/0/?pli=1'}
    ],
    'Datu analīzes saite': [
        {name: 'Julius AI', link: 'https://julius.ai/'}
    ],
    'Datu vizualizācijas saite': [
        {name: 'Flourish.studio', link: 'https://flourish.studio/'}
    ],



        //https://trello.com/
    'Kādus plānošanas veidus tu meklē?':[
        {name: 'Komandas', page: 'Komandas planošanas saite'},
        {name: 'Solo darba plānošana', page: 'Solo darba plānošans saite'}
    ],
    'Komandas planošanas saite': [
        {name: 'Trello.com', link: 'https://trello.com/'}
    ],
    'Solo darba plānošans saite': [
        {name: 'To-do.office.com', link: 'https://to-do.office.com/tasks/'}
    ],



    'Kurā valodā programmēsi?': [
        {name: 'C++', page: 'C++ saite'},
        {name: 'Java', page: 'Java saite'},
        {name: 'Python', page: 'Python saite'}
    ],
    'C++ saite': [
        {name: 'Programiz C++', link: 'https://www.programiz.com/cpp-programming/online-compiler/'}
    ],
    'Java saite': [
        {name: 'Programiz Java', link: 'https://www.programiz.com/java-programming/online-compiler/'}
    ],
    'Python saite': [
        {name: 'Programiz Python', link: 'https://www.programiz.com/python-programming/online-compiler/'}
    ],




    'Izvēlies ko tieši tu gribi?': [
        {name: 'Pārbaudīt sintaksi', page: 'Quill'},
        {name: 'Pārbaudīt teikumus', page: 'Grammarly'}
    ],
    'Quill': [
        {name: 'QuillBot', link: 'https://quillbot.com/blog/writing/english-grammar-resources/'}
    ],
    'Grammarly': [
        {name: 'Grammarly', link: 'https://www.grammarly.com/'}
    ],





    'Ko darīsi?': [
        {name: 'Klausīšos mūziku', page: 'Izvēlies kur klausīsies'},
        {name: 'Skatīšos streamus', page: 'Kur skatīsies?'},
        {name: 'Skatīšos vidakus', page: 'Kur skatīsies?'} //linked to 1 since 1 site can do both huinas
    ],
    'Izvēlies kur klausīsies':[
        {name: 'Youtube music', page: 'YT music'},
        {name: 'Spotify', page: 'Sptf'}
    ],
    'YT music': [
        {name: 'YouTube Music', link: 'https://music.youtube.com/'}
    ],
    'Sptf': [
        {name: 'Spotify', link: 'https://open.spotify.com/'}
    ],



    'Kur skatīsies?':[
        {name: 'YouTube', page: 'YT'},
        {name: 'Twitch', page: 'TW'},
        {name: 'Kick', page: 'Kick'}
    ],
    'YT': [
        {name: 'YouTube', link: 'https://www.youtube.com/'}
    ],
    'TW': [
        {name: 'Twitch', link: 'https://www.twitch.tv/'}
    ],
    'Kick': [
        {name: 'Kick', link: 'https://kick.com/'}
    ],

//https://www.chess.com/play/online
    'Ko spēlēsi?': [
        {name: 'Google snake', page: 'GS'},
        {name: 'Agar.io', page: 'AG'},
        {name: 'Snake.io', page: 'SK'},
        {name: 'Šahu', page: 'CHS'},
        {name: 'Kaut ko pats pameklēšu', page: 'PG'},
    ],

    'GS': [
        {name: 'Google Snake', link: 'https://www.google.com/search?q=google+snake&oq=google+snake&gs_lcrp=EgZjaHJvbWUyDggAEEUYORhDGIAEGIoFMgcIARAAGIAEMgcIAhAAGIAEMgwIAxAAGBQYhwIYgAQyDAgEEAAYFBiHAhiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDIyOTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'}
    ],
    'AG': [
        {name: 'Agar.io', link: 'https://agar.io/'}
    ],
    'SK': [
        {name: 'Snake.io', link: 'https://snake.io/'}
    ],
    'CHS': [
        {name: 'Chess.com', link: 'https://www.chess.com/play/online'}
    ],
    'PG': [
        {name: 'Crazy Games', link: 'https://www.crazygames.com/'}
    ],

};

// <button id="Work_Button" onClick="on_work_button()">Gribās strādāt?</button>
// <button id="Rest_Button" onClick="on_rest_Button()">Gribās atpūsties?</button>
// <button id="Fun_Button" onClick="on_fun_Button()">Gribāš izklaidēties?</button>

switch_page('Web Akinators');

function switch_page(page_name) {
    const buttons = document.getElementById('Buttons');

    if (this.value) {  //clicked
        const page_name_from_button = this.value; //read this.val
        const page = pages[page_name_from_button]; //check the value in pages (arr), where does it "click"

        if (!page) { //if page doesn't exist, apdirsies
            return;
        }
        buttons.innerHTML = ''; //deletes the previous buttons

        if (page.length === 1) { // if page contains only 1 element means its the end page

            buttons.id = "Links"; // change the id so if vajag can do css
            const link = page[0]; // saņem vienu to pages arr elementu un saves it as variable link

            const LinkText = document.createElement('a'); // create <a> tag jeb the link tag
            LinkText.textContent = link.name; // displayed text ir saistiits ar a tag. rupji a = BB texts iz linka bus BB
            LinkText.href = link.link; // assigned a link to tag a



            buttons.appendChild(LinkText); // add the <a> tag to the buttons container




        } else if (page.length > 1) { // if page contains more then 1 elements means its a question/button page

            const QuestionTitle = document.getElementById('question'); //h1 as variabale
            QuestionTitle.textContent = page_name_from_button; //the h1 is now the set, next, title

            for (let i = 0; i < page.length; i++ ) { //goes through the paeggsh
                const button = document.createElement('button'); // button = button ahh variable
                //each iteration adds a button


                button.class = 'button'; //links css to buttons so they look kumalala
                // button.class links the class button.id links the css id, just have to make sure hists unique

                button.value = page[i].page; //variable for swtich page, hands it to the pages
                button.textContent = page[i].name; //new button uzraksti from pages

                button.onclick = switch_page; // click button => wtich page

                buttons.appendChild(button); //add the new button to the div
            }

        } else { // error case where page content length < 1, jeb nekaa nav un visi apdrishas

        }


    } else { //called by code
        const page = pages[page_name]; //acceses buttons

        if (!page) { //if page doesn't exist, apdirsies
            return;
        }
        buttons.innerHTML = ''; //deletes the previous buttons

        const QuestionTitle = document.getElementById('question');
        QuestionTitle.textContent = page_name;

        for (let i = 0; i < page.length; i++ ) {
            const button = document.createElement('button');// button = button ahh variable
            button.class = 'button';
            button.value = page[i].page;
            button.textContent = page[i].name;

            button.onclick = switch_page; //same shi

            buttons.appendChild(button);
        }
    }


}


