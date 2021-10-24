const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        console.log('aua :)');
        removeActiveClasses();
        panel.classList.add('active'); //add active to class when clicked
    });
})

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active'); //loop through all the panel elements and remove active from the classs
    });
}