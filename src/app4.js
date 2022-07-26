import './app4.css'
import $ from 'jquery'

const $circle = $('#app4 .circle')
//鼠标移进移出
$circle.on('mouseenter', () => {
    $circle.addClass('active')
}).on('mouseleave', () => {
    $circle.removeClass('active')
})