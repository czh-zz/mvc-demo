import './app3.css'
import $ from 'jquery'

const html = `
        <section id="app3">
            <div class="square"></div>
        </section>
`

const $element = $(html).appendTo($('body>.page'))

const $square = $('#app3 .square')
const localKey = 'app3.active'
const active = localStorage.getItem(localKey) === 'yes' ? true : false
/*
if(active){
    $square.addClass('active')
}else{
    $square.removeClass('active')
}*/
//简写成
$square.toggleClass('active', active)


$square.on('click', () => {
    //toggleClass如果没就加上，如果有就删除
    //$square.toggleClass('active')等价于如下
    if ($square.hasClass('active')) {
        $square.removeClass('active')
        localStorage.setItem(localKey, 'no')
    } else {
        $square.addClass('active')
        localStorage.setItem(localKey, 'yes')
    }
})