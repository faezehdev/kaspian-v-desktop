let header = document.querySelector('header')
let hoverMenu = document.querySelector('.HoverMenu-C')
let hoverItems = document.querySelectorAll('.hover-item')
let Menus = [...document.querySelectorAll('.menus')]
hoverItems.forEach(item=>{
    item.addEventListener('mouseenter',(e)=>{
        let id =e.currentTarget.getAttribute('id')
        let menu
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


     header.classList.add('showBG')
    })
})
hoverMenu.addEventListener('mouseleave',(e)=>{
e.currentTarget.classList.remove('show')
e.currentTarget.classList.remove('showC')
setTimeout(() => {
    header.classList.remove('showBG')
},500);


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