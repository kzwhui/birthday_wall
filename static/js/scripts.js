// Empty JS for your own code to be here
//

//notify默认值
$.notifyDefaults({
    placement:{
        from: "bottom",
        align: "right"
    },
    type: "danger",
    offset: {
        x: 20,
        y: 150
    }
});

function notifyError(msg)
{
    $.notify({
        icon: "glyphicon glyphicon-info-sign",
        message: msg
    });
}

function notifySuc(msg)
{
    $.notify({
        icon: 'glyphicon glyphicon-ok',
        message: msg
    }, {
        type: "success",
        delay: 1000,
        animate: {
            enter: "animated bounceInDown",
            exit: "animated bounceOutDown"
        }
    });
}
