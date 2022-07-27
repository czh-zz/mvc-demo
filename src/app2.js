import './app2.css'
import $ from 'jquery'

const html = `
        <section id="app2">
            <ol class="tab-bar">
                <li>1</li>
                <li>2</li>
            </ol>
            <ul class="tab-content">
                <li>内容1</li>
                <li>内容2</li>
            </ul>
        </section>
`
const $element = $(html).appendTo($('body >.page'))

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
const localKey = 'app2.index'
const index = localStorage.getItem(localKey) || 0

//监听li元素事件，并获取第几个li
$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget);
    $li.addClass("selected")
        .siblings().removeClass("selected")
    const index = $li.index()
    //离开页面时，保留当前页面的变动
    localStorage.setItem(localKey, index)

    $tabContent.children()
        //第index个显示
        .eq(index).addClass("active")
        //其他不显示
        .siblings().removeClass("active")

    /*不建议用.eq(index).show()
            .siblings().hide()
            和
    .eq(index).css({ diaplay: 'block' })
    .siblings().css({ display: 'none' })*/
});
//默认显示，触发事件（也可在index页面的li分别加elected，active）
$tabBar.children().eq(index).trigger('click')
