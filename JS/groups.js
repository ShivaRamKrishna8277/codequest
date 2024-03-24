$(document).ready(function() {
    $('.group').click(function() {
        $('.groups_left').addClass('hide_group_list');
        $('.groups_right').addClass('show_group_chat');
    });

    $('#back_to_group_list').click(function() {
        $('.groups_left').removeClass('hide_group_list');
        $('.groups_right').removeClass('show_group_chat');
    });
});
