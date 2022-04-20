class Tabs {
    constructor({ rootSelector }) {
        this._refs = this._getRefs(rootSelector);

    }
    _getRefs(root) {
        const refs = {};

        refs.controls = document.querySelector(`${root} [data-controls]`);
        refs.panes = document.querySelector(`${toot} data-panes`);

        return refs;
    }
}

const tabs1 = new Tabs({
    rootSelector: '#tabs-1',
})