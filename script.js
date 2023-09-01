function flipPage(page){

    for (const elem of page.parentNode.children){
        if (elem == page){
            elem.classList.add('maxpriority');
            elem.classList.remove('disabled');
        }else if (elem == page.previousElementSibling || elem == page.nextElementSibling){
            elem.classList.remove('maxpriority');
            elem.classList.add('priority');
            elem.classList.remove('disabled');
        }else{
            elem.classList.remove('priority');
            elem.classList.remove('maxpriority');
            elem.classList.add('disabled');
        }
    };

    if (!page.classList.contains('flip')){
        page.classList.add('flip');
    }else{
        page.classList.remove('flip');
    }
}