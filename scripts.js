

let pages = {
    'Web Akinators': [
        {name: 'Gribi strādāt?', page: 'Kādas darbības plāno veikt?'}, //buttons be  name => which page to
        {name: 'Gribi atpūsties?', page: 'rest'},
        {name: 'Gribi izklaidēties?', page: 'fun'}
    ],
    'Kādas darbības plāno veikt?': [
        {name: 'Gramatika', page: 'fun'},
        {name: 'Kods', page: 'fun'},
        {name: 'Plānošana', page: 'fun'},
        {name: 'Tabulas', page: 'Kādas tabulas veidus plāno taisīt?'},
        {name: 'Dokumenti', page: 'Kādus dokumentus plāno taisīt?'}
    ],



    'Kādus dokumentus plāno taisīt?': [
        {name: 'Atskaites', page: 'Atskaišu saite'},
        {name: 'Prezentācijas', page: 'Prezentāciju saite'},
        {name: 'Darba Dokumentus', page: 'Dokumentu saite'}
    ],

    'Kādas tabulas veidus plāno taisīt?': [
        {name: 'Datu tabulas', page: 'Datu tabulu saite'},
        {name: 'Datu analīzi', page: 'Datu analīzes saite'},
        {name: 'Datu Vizualizāciju', page: 'Datu vizualizācijas saite'}
    ],
    'Prezentāciju saite': [
        {name: 'Google Slides', link: 'https://docs.google.com/presentation'}
    ],
    'rest': [

    ],
    'fun': [

    ]
};

// <button id="Work_Button" onClick="on_work_button()">Gribās strādāt?</button>
// <button id="Rest_Button" onClick="on_rest_Button()">Gribās atpūsties?</button>
// <button id="Fun_Button" onClick="on_fun_Button()">Gribāš izklaidēties?</button>

switch_page('Web Akinators');

function switch_page(page_name) {
    const buttons = document.getElementById('Buttons');

    if (this.value) {  //clicked
        const page_name_from_button = this.value; //read this.val
        const page = pages[page_name_from_button]; //check the value in pages, where does it "click"

        if (!page) { //if page doesn't exist, apdirsies
            return;
        }
        buttons.innerHTML = ''; //deletes the previous buttons

        if (page.length === 1) { // if page contains only 1 element means its the end page

            buttons.id = "Links"; // change the id so if vajag can do css
            const link = page[0]; // since only 1 element can use [0] to get it

            const LinkText = document.createElement('a'); // create <a> tag jeb the link
            LinkText.textContent = link.name; // assign display text to the <a> tag
            LinkText.href = link.link; // assign link to the <a> tag



            buttons.appendChild(LinkText); // add the <a> tag to the buttons container




        } else if (page.length > 1) { // if page contains more then 1 elements means its a question/button page

            const QuestionTitle = document.getElementById('question'); //h1 as variabale
            QuestionTitle.textContent = page_name_from_button; //the h1 is now the set, next, title

            for (let i = 0; i < page.length; i++ ) {
                const button = document.createElement('button'); // button = button ahh variable



                button.class = 'button'; //links css to buttons so they look kumalala
                // button.class links the class button.id links the css id, just have to make sure hists unique

                button.value = page[i].page;
                button.textContent = page[i].name; //new button uzraksti

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


