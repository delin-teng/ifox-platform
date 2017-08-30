$.validator.addMethod("mobileZH", function(value, element) {
    var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    return this.optional(element) || (mobile.test(value));
}, "");

$.validator.addMethod("password", function(value, element, length) {
    var pass = new RegExp("[a-zA-Z0-9]" + "{" + length + "}$");
    return this.optional(element) || (pass.test(value));
}, "");

$.validator.addMethod("resourceUrl", function(value, element, length) {
    var resource_url = new RegExp("^\/");
    return this.optional(element) || (resource_url.test(value));
}, "");

$.validator.setDefaults({
    errorClass: "error",
    success: 'valid',
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass(errorClass);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass(errorClass);
    },
    errorPlacement: function (error, element) {
        $(element).attr("data-original-title", $(error).text());

        $(element).tooltip('show');
        $(element).tooltip({
            trigger: "hover focus click"
        });
    }
});