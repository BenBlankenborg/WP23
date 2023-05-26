function print_latest_news() {
    let articles_html = $.post("scripts/read_latest_news.php", {call_now: "True"});
    let news_container = $('#news_container');
    articles_html.done(function (data) {
        news_container.empty();
        news_container.append(data.html);
        $('.article_remove').click(function () {
            removeArticle(this);
        });
    });
}

$(function() {
    print_latest_news();
    window.setInterval(function () {
        print_latest_news();
    }, 5000);
});