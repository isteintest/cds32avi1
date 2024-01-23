$(document).ready(function () {
    var _0x2a5312 = new Date();
    _0x2a5312.setDate(_0x2a5312.getDate() - 0x1);
    var _0x35ac01 = ["Januar", 'Februar', "März", "April", "Mai", 'Juni', "Juli", "August", "September", "Oktober", 'November', "Dezember"];
    var _0x52b572 = _0x35ac01[_0x2a5312.getMonth()] + " " + _0x2a5312.getDate();

    console.log(_0x52b572);
    $("#date").text(_0x52b572);
});
$(document).ready(function () {
    var _0xc49a67 = 235;
    function _0x45a6a0() {
        var _0x13a8d1 = Math.floor(_0xc49a67 / 0x3c);
        var _0x21a2fc = _0xc49a67 % 0x3c;
        var _0x252e51 = (_0x13a8d1 < 0xa ? '0' : '') + _0x13a8d1 + ':' + (_0x21a2fc < 0xa ? '0' : '') + _0x21a2fc;
        $("#timer").text(_0x252e51);
        _0xc49a67--;
        if (_0xc49a67 >= 0x0) {
            setTimeout(_0x45a6a0, 0x3e8);
        } else {}
    }
    _0x45a6a0();
});