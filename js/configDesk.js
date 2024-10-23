let header = document.querySelector('header')
let hoverMenu = document.querySelector('.HoverMenu-C')
let hoverItems = document.querySelectorAll('.hover-item')
let Menus = [...document.querySelectorAll('.menus')]
let IsDark = false
hoverItems.forEach(item=>{
    item.addEventListener('mouseenter',(e)=>{
        header.classList.add('showBG')
        let id =e.currentTarget.getAttribute('id')
        let menu
        if(header.classList.contains('dark')){
            IsDark = true
            header.classList.remove('dark')
        }
        else{
            IsDark = false
        }
        switch(id){
            case 'product':{
                menu = Menus.filter(m=>{
                    return m.classList.contains('Pro-container')
                })
                hoverMenu.classList.remove('showC')
                hoverMenu.classList.add('show')
            break
            }
            case 'course':{
                menu = Menus.filter(m=>{
                    return m.classList.contains('Courses-conrainer')
                })
                hoverMenu.classList.remove('show')
                hoverMenu.classList.add('showC')
            break
            }
        }
        Menus.map(m=>{
            m.classList.remove('showMenu')
        })
        menu[0].classList.add('showMenu')
    })
})
hoverMenu.addEventListener('mouseleave',(e)=>{
e.currentTarget.classList.remove('show')
e.currentTarget.classList.remove('showC')
setTimeout(() => {
    header.classList.remove('showBG')
},500);

if(IsDark){
    header.classList.add('dark')
}
else{
    header.classList.remove('dark')
}
})
let elements = document.querySelectorAll('.course-link');
let links = document.querySelector('.Courses-conrainer')
let groupSize = 5;
let groupCount = Math.ceil(elements.length / groupSize);
  for (let i = 0; i < groupCount; i++) {
    let startIndex = i * groupSize;
    let endIndex = startIndex + groupSize;
    let groupElements = Array.from(elements).slice(startIndex, endIndex);
    let groupDiv = document.createElement('div');
  groupDiv.className = 'Row';
  groupElements.forEach(function (element,index) {
  groupDiv.appendChild(element);
  });
  links.appendChild(groupDiv)
}