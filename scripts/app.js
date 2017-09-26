var puzzles = [];
var vowels = ['A', 'E', 'I', 'O', 'U'];


var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var player1Score = document.getElementById('player1Score');
player2Score = document.getElementById('player2Score');
player1Bank = document.getElementById('player1Bank');
player2Bank = document.getElementById('player2Bank');
spinWheel = document.getElementById('spinWheel');

Array.prototype.randomize = function() {
        this.sort(function(a, b) {
            return Math.round(Math.random());
        });
    };
    var prefix = (function() {
        if (document.body.style.MozTransform !== undefined) {
            return "MozTransform";
        }
        else if (document.body.style.WebkitTransform !== undefined) {
            return "WebkitTransform";
        }
        else if (document.body.style.OTransform !== undefined) {
            return "OTransform";
        }
        else {
            return "";
        }
    }()),
        degToRad = function(deg) {
            return deg / (Math.PI * 180);
        },
        rotateElement = function(element, degrees) {
            var val = "rotate(-" + degrees + "deg)";
            if (element.style[prefix] != undefined) element.style[prefix] = val;
            var rad = degToRad(degrees % 360),
                filter = "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=" + rad + ", M12=-" + rad + ", M21=" + rad + ", M22=" + rad + ")";
            if (element.style.filter != undefined) element.style.filter = filter;
            element.setAttribute("data-rotation", degrees);
        },
        oc = function(a) { //object converter (changes array to an object)
            var o = {};
            for (var i = 0; i < a.length; i++) {
                o[a[i]] = '';
            }
            return o;
};