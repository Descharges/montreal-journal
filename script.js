function flipPage(page){
    
    for (const elem of page.parentNode.children){
        elem.classList.remove('priority');
        elem.classList.remove('maxpriority');
    };
    page.previousElementSibling ? page.previousElementSibling.classList.add('priority') : {};
    page.nextElementSibling ? page.nextElementSibling.classList.add('priority') : {};
    page.classList.add("maxpriority");

    if (!page.classList.contains('flip')){
        page.classList.add('flip');
    }else{
        page.classList.remove('flip');
    }
}