function start(e) {
    var id = $(e).data('id')
    var question = $(e).data('question')

    if (question == 'start') {
        if (id == 'start1') {
            $('#start').hide()
            $('#start2').fadeIn( "slow" )
        } else {
            $('#start2').hide()
            $('#question-1').fadeIn( "slow" )
        }
    } else {
        $('#question-'+id).hide()
        $('#false-'+id).hide()
        $('#start').fadeIn( "slow" )
    }
}

function equal(e) {
    var id = $(e).data('id')
    var link = $(e).data('link')
    var parent = $(e).data('parent')
    var question = $(e).data('question')

    if (question) {
        if (id == 5) {
            $('#question-'+id).hide();
            $('#question-'+link).slideDown(); 
        }
        $('#question-'+id).hide();
        $('#question-'+parent).hide();
        $('#question-'+(id+1)).slideDown();
    } else {
        $('#question-'+id).hide();
        $('#false-'+id).fadeIn( "slow" )   
    }
}