class Tabs {
    constructor({
        rootSelector,
        activeControlClass = 'active',
        activePaneClass = 'active',

    }) {
        this._refs = this._getRefs(rootSelector);
        this._activeControlClass = activeControlClass;
        this._activePaneClass = activePaneClass;

        this._bindEvents();

    }

    _getRefs(root) {
        const refs = {};

        refs.controls = document.querySelector(`${root} [data-controls]`);
        refs.panes = document.querySelector(`${root} [data-panes]`);

        return refs;
    }

    _bindEvents() {
        this._refs.controls.addEventListener(
            'click',
            this._onControlsClick.bind(this));
    }

    _onControlsClick(event) {
        event.preventDefault();

        if (event.target.nodeName !== 'A') {
            console.log('Клик не по ссылке');
            return;
        }

        const currentControl = this._refs.controls.querySelector(
            `.${this._activeControlClass}`);


        if (currentControl) {
            currentControl.classList.remove(this._activeControlClass);

            const paneId = this._getPaneId(currentControl);
            const pane = this._getPaneById(paneId);
            pane.classList.remove(this._activePaneClass);
        }

        const controlItem = event.target;
        controlItem.classList.add(this._activeControlClass);

        const paneId = this._getPaneId(controlItem);
        const pane = this._getPaneById(paneId);
        pane.classList.add(this._activePaneClass);
    }

    _getPaneId(control) {
        return control.getAttribute('href').slice(1);
    }

    _getPaneById(id) {
        return this._refs.panes.querySelector(`#${id}`);
    }

}

const tabs1 = new Tabs({
    rootSelector: '#tabs-1',
    activeControlClass: 'controls__item--active',
    activePaneClass: 'pane--active',
});