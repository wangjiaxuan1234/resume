const lis = document.querySelectorAll('.menu_box li') as unknown as HTMLElement[]
lis.forEach(item => {
    item.addEventListener('mouseover', () => {
        console.log(item.offsetLeft, item.offsetWidth)
        const active = document.querySelector('.menu_box .active')
        active?.classList.remove('active')
        item.classList.add('active')
        setMenuUnderLine()
    })
})

const setMenuUnderLine = (): void => {
    const active = document.querySelector('.menu_box .active') as HTMLElement
    const underLine = document.querySelector('.menu_box .underline') as HTMLElement
    underLine.style.width = active.offsetWidth + 'px'
    underLine.style.left = active.offsetLeft + 'px'
}
setMenuUnderLine()