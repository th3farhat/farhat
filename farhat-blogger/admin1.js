$(function() {
    function highlight() {
        $('.user.blog-author,.ssyby').closest('.comment-block').css('background', 'linear-gradient(50deg,#ffffff,#ffffff)').css('padding', '0');
    }
    $(document).bind('ready scroll click', highlight);
});
