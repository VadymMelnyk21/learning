const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('#tabs-1 [data-panes]'),
};

refs.controls.addEventListener('click', onControlsClick)

function onControlsClick(event) {
event.preventDefault();

    if (event.target.nodeName !== 'A') {
        console.log('Клик не по ссылке');
        return;
    }

    const currentControl = refs.controls.querySelector('.controls__item--active')
    
    if (currentControl) {
        currentControl.classList.remove('controls__item--active')

        const paneId = getPaneId(currentControl)
        const pane = getPaneById(paneId);
        pane.classList.remove('pane--active');
    }

    const controlItem = event.target;
    controlItem.classList.add('controls__item--active')

    const paneId = getPaneId(controlItem)
    const pane = getPaneById(paneId);
    pane.classList.add('pane--active')
}

function getPaneId(control) {
    return control.getAttribute('href').slice(1);
}

function getPaneById(id) {
    return refs.panes.querySelector(`#${id}`);
}