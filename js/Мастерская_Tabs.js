const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('#tabs-1 [data-panes]'),
};

refs.controls.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.nodeName !== 'A') {
        console.log('Клик не по ссылке');
        return;
    }

    const currentControl = refs.controls.querySelector('.controls__item--active')
    
    if (currentControl) {
        currentControl.classList.remove('controls__item--active')
    }

    const controlItem = event.target;
    controlItem.classList.add('controls__item--active')

    
})