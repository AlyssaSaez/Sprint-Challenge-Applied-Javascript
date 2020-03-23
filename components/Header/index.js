// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const mainHeader = document.createElement('div');
    const dateHeader = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    mainHeader.appendChild(dateHeader);
    mainHeader.appendChild(title);
    mainHeader.appendChild(temp);

    mainHeader.classList.add('header');
    dateHeader.classList.add('date');
    temp.classList.add('temp');

    dateHeader.textContent = 'March 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°'

    return mainHeader;
}

const headerParent = document.querySelector('.header-container');

headerParent.appendChild(Header());