var BackGroundKishoi = /** @class */ (function () {
    function BackGroundKishoi() {
        this.color = [
            "rgba(255, 8, 8, 0.247)",
            "rgba(222, 255, 8, 0.25)",
            "rgba(90, 255, 8, 0.25)",
            "rgba(8, 24, 255, 0.25)",
            "rgba(255, 255, 255, 0.25)",
            "rgba(0, 0, 0, 0.25)",
        ];
        this.f = true;
    }
    BackGroundKishoi.prototype.gradient = function (n, useN) {
        var text = "linear-gradient(" + n + "deg,";
        if (this.f) {
            for (var i = 0; i < 20; i++) {
                text += this.color[useN * 2] + ",";
                text += this.color[useN * 2 + 1] + ",";
            }
            text += this.color[useN * 2];
        }
        else {
            for (var i = 0; i < 20; i++) {
                text += this.color[useN * 2 + 1] + ",";
                text += this.color[useN * 2] + ",";
            }
            text += this.color[useN * 2 + 1];
        }
        text += ")";
        return text;
    };
    BackGroundKishoi.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            for (var i = 0; i < _this.elms.length; i++) {
                _this.elms[i].style.background = _this.gradient(20, 0) + "," + _this.gradient(80, 1) + "," + _this.gradient(120, 2);
                if (_this.f) {
                    _this.f = false;
                }
                else {
                    _this.f = true;
                }
            }
        }, 100);
    };
    return BackGroundKishoi;
}());
var TextDenger = /** @class */ (function () {
    function TextDenger() {
        this.color = [
            "yellow",
            "black"
        ];
        this.flag = true;
    }
    TextDenger.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            for (var i = 0; i < _this.elms.length; i++) {
                if (_this.flag) {
                    _this.elms[i].style.color = _this.color[0];
                    _this.elms[i].style.background = _this.color[1];
                }
                else {
                    _this.elms[i].style.color = _this.color[1];
                    _this.elms[i].style.background = _this.color[0];
                }
                _this.flag = !_this.flag;
            }
        }, 500);
    };
    return TextDenger;
}());
var rotationElms = /** @class */ (function () {
    function rotationElms() {
        this.deg = 0;
    }
    rotationElms.prototype.startX = function () {
        var _this = this;
        setInterval(function () {
            _this.deg++;
            if (_this.deg > 360) {
                _this.deg = 0;
            }
            for (var i = 0; i < _this.elms.length; i++) {
                _this.elms[i].style.transform = "rotateX(" + _this.deg + "deg)";
            }
        }, 20);
    };
    rotationElms.prototype.startY = function () {
        var _this = this;
        setInterval(function () {
            _this.deg++;
            if (_this.deg > 360) {
                _this.deg = 0;
            }
            for (var i = 0; i < _this.elms.length; i++) {
                _this.elms[i].style.transform = "rotateY(" + _this.deg + "deg)";
            }
        }, 20);
    };
    rotationElms.prototype.startZ = function () {
        var _this = this;
        setInterval(function () {
            _this.deg++;
            if (_this.deg > 360) {
                _this.deg = 0;
            }
            for (var i = 0; i < _this.elms.length; i++) {
                _this.elms[i].style.transform = "rotateZ(" + _this.deg + "deg)";
            }
        }, 20);
    };
    return rotationElms;
}());
var a = new rotationElms();
a.elms = document.getElementsByClassName("aa");
a.startX();
