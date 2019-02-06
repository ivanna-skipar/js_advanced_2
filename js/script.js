$(function () {

    function Bounce(element) {
        this.element = element;
        this.nameOfClass = element.addClass('square');
        this.move = function (step) {
            setInterval(function () {
                var h = $(window).height() - step; // віднімаємо від розміру вікна step одиниць, щоб мяч не вилітав за межі
                var w = $(window).width() - step;
                var y = Math.floor(Math.random() * h); // рух по y
                var x = Math.floor(Math.random() * w); //рух по x
                var move = $(element).animate({
                    top: y
                    , left: x
                }, 2000); // кожної секунди міняється положення мяча
            }, 2000);
        };
        $(element).click(function () {
            addBall();
        });
        this.newBalls = {
            colors: ['green', 'blue', 'yellow', 'cyan']
            , setBackground: function () {
                var backCol = this.colors[Math.floor(Math.random() * this.colors.length)];
                var radius = Math.floor(Math.random()*100);
                $(element).css({
                    background: backCol,
                    borderRadius: radius + "%"
                })
            }
        }

    }
    function addBall() {
        for (var i = 0; i < 3; i++) {
            var ball = $('<div></div>');
            $('body').prepend(ball);
            var Ball = new Bounce(ball);
            Ball.newBalls.setBackground();
            Ball.move(200);
        }
    }

    var newBalls = {
        colors: ['green', 'blue', 'yellow', 'cyan']
        , setBackground: function (color) {
            var backCol = this.colors[Math.floor(Math.random() * color.length)];
            var radius = Math.floor(Math.random()*100);
            $(this).css({
                background: backCol,
                borderRadius: radius + '%'
            })
        }
    }



    var ball = $('div');
    var mainBall = new Bounce(ball);
    newBalls.__proto__ = mainBall;
    mainBall.move(200);


});