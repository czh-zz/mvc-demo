import './app3.css'
import $ from 'jquery'

const $square = $('#app3 .square')
$square.on('click', () => {
    //toggleClass如果没就加上，如果有就删除
    $square.toggleClass('active')
})