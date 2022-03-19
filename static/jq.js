var _li, _sections;

$(function() {
   _li = $("#myNavbar").find("li"); 
    _sections =  $("#wrapper").find(".section");   
    $(window).on('scroll', liBgs);
});


function liBgs() {
    for (var i = 0; i < _li.length ; i++) {
        var _litop = _li.eq(i).offset().top; 
        for (var j = 0; j < _sections.length; j++) {
            var $s = _sections.eq(j),
            _sectop = $s.offset().top,
            _secbottom = $s.offset().top+$s.height()-20;
            if (_litop > _sectop && _litop > _secbottom) {
                var _color = rgb2hex($s.css('background-color'));
                _li.eq(i).find('a').css('color',  (_color=="#ffffff") ? "#000000" : "#ffffff");
            }             
        }
        
    }
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}