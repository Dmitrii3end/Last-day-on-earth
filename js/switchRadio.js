const unshowBuildPanelSections = () => {
    const sectionArray = document.querySelectorAll('.build-panel__section');

    for (let i = 1; i < sectionArray.length; i++) {
        sectionArray[i].classList.add('unshow');
    }
}

document.querySelectorAll('.build-type').forEach(elem => {
    elem.addEventListener('click', function() {
        switchBuildPanelSections(this.getAttribute('for'));
    })
})


const switchBuildPanelSections = section => {
    unshowBuildPanelSections();

    switch (section) {
        case 'wall':
            document.querySelector('#materials-type').classList.remove('unshow');
            document.querySelector('#wall-type').classList.remove('unshow');
            break;
        case 'floor':
            document.querySelector('#materials-type').classList.remove('unshow');
            break;
        case 'trap':
            document.querySelector('#trap-type').classList.remove('unshow');
            document.querySelector('#trap-direction').classList.remove('unshow');
            break;
        case 'decor':
            document.querySelector('#decor-type').classList.remove('unshow');
            break;
        case 'chest':
            document.querySelector('#chest-type').classList.remove('unshow');
            document.querySelector('#chest-color').classList.remove('unshow');
            break;
        case 'bench':
            document.querySelector('#bench-type').classList.remove('unshow');
            break;
    }
}