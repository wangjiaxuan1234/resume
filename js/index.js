// 给li们绑定点击事件
let lis = document.querySelectorAll('.menu_box li')
lis.forEach(function(cur) {
    cur.addEventListener('click', function() {
        toggleClass(cur)
        setUnderline(cur)
    })
    cur.addEventListener('mouseenter', function() {
        setUnderline(cur)
    })
    cur.addEventListener('mouseleave', function() {
        setUnderline(document.querySelector('.menu_box .active'))
    })
})

function toggleClass(cur) {
    // 移除当前active类名
    let currentActiveElement = document.querySelector('.menu_box li.active')
    let classList = currentActiveElement.classList
    classList.remove('active');
    // 给自己加上active类名
    cur.classList.add('active')
}

function setUnderline(cur) {
    let underline = document.querySelector('.menu_box .underline')
    underline.style.left = cur.offsetLeft + 'px'
    if (cur.classList.contains('contact')) {
        underline.style.width = 0 + 'px'
    } else {
        underline.style.width = cur.offsetWidth + 'px'
    }
}

setUnderline(document.querySelector('.menu_box .active'))

// 何时判断
window.addEventListener('scroll', function() {
    // 如何判断
    let top = document.documentElement.scrollTop
    let header = document.querySelector('.header')
    if (top > 50) {
        header.classList.add('roll_up')
    } else {
        header.classList.remove('roll_up')
    }
})