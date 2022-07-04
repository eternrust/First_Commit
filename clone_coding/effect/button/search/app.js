function searchToggle(obj, evt) {
    let container = obj.closest('.search_wrapper');
    if(!container.classList.contains('active')){
        container.classList.add('active');
        evt.preventDefault();
    } else if(container.classList.contains('active') && obj === document.querySelector('.close')){
        container.classList.remove('active');
        container.querySelector('.search_input').value = '';
    }
}