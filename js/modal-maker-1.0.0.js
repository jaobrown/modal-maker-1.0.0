// Modal Maker 2018 Jared Brown

var ModalMaker = (function () {
    var _CreateSignInModal = function (headerText) {
        var _modalHTML = '<div class="modal"><div class="clickDiv"></div> \n' +
            '    <div class="formHolder">\n' +
            '        <h1>'+ headerText +'</h1>\n' +
            '        <form action="">\n' +
            '            <label for="">Username / Email</label>\n' +
            '            <input type="email" placeholder="email">\n' +
            '            <label for="">Password</label>\n' +
            '            <input type="password" placeholder="placeholder">\n' +
            '            <div class="signInSubmit">Sign In</div>\n' +
            '        </form>\n' +
            '        <span class="closeBtn">x</span>\n' +
            '    </div>\n' +
            '</div>';
        $("body").fadeIn(1000).append(_modalHTML);
        $(".clickDiv").click(function () {
            $(this).parent().remove();
        })

        $(".closeBtn").click(function () {
            $(".modal").remove();
        })
    };

    return {
        CreateSignInModal: _CreateSignInModal
    }
})();