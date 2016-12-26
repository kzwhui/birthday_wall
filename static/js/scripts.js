// Empty JS for your own code to be here
//

//notify默认值
$.notifyDefaults({
    placement:{
        from: "bottom",
        align: "center"
    },
    type: "danger",
    offset: {
        x: 0,
        y: 20
    },
	template: '<div data-notify="container" class="col-xs-8 col-sm-3 col-md-3 alert alert-{0}" role="alert">' +
	 	      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
	 	      '<span data-notify="icon"></span> ' +
	 	      '<span data-notify="title">{1}</span> ' +
	 	      '<span data-notify="message">{2}</span>' +
	 	      '<div class="progress" data-notify="progressbar">' +
	 	      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
	 	      '</div>' +
	 	      '<a href="{3}" target="{4}" data-notify="url"></a>' +
	 	      '</div>'
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
