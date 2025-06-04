

let pages = {
    'Web Akinators': [
        {name: 'Gribi strādāt?', page: 'work'}, //buttons be  name => which page to
        {name: 'Gribi atpūsties?', page: 'rest'},
        {name: 'Gribi izklaidēties', page: 'fun'}
    ],
    'work': [
        {name: 'mc', page: 'fun'},
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

    if (this.value) {
        const page_name_from_button = this.value;
        const page = pages[page_name_from_button];

        if (!page) {
            return;
        }
        buttons.innerHTML = '';

        const QuestionTitle = document.getElementById('question');
        QuestionTitle.textContent = page_name_from_button;

        for (let i = 0; i < page.length; i++ ) {
            const button = document.createElement('button');
            button.class = 'button';
            button.value = page[i].page;
            button.textContent = page[i].name;

            button.onclick = switch_page;

            buttons.appendChild(button);
        }
    } else {
        const page = pages[page_name];

        if (!page) {
            return;
        }
        buttons.innerHTML = '';

        const QuestionTitle = document.getElementById('question');
        QuestionTitle.textContent = page_name;

        for (let i = 0; i < page.length; i++ ) {
            const button = document.createElement('button');
            button.class = 'button';
            button.value = page[i].page;
            button.textContent = page[i].name;

            button.onclick = switch_page;

            buttons.appendChild(button);
        }
    }


}
