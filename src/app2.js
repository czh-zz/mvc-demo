import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
//监听li元素事件，并获取第几个li
$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget);
    $li.addClass("selected")
        .siblings().removeClass("selected")
    const index = $li.index()
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
$tabBar.children().eq(0).trigger('click')
