

export function FuncDraw(canvas){
    this.canvas = canvas
    let cw = canvas.width;
    let ch = canvas.height
    let ctx = canvas.getContext("2d")
    let ticker = new Array();

    // 每一次x的取值增加多少
    let step = 0.01
    // 每一毫秒画几个点
    let pointsPerMillisecond = 100
    this.setConfig = function(s, p){
        step = s
        pointsPerMillisecond = p
    }

    this.clear = function (){
        let len = ticker.length
        if(len != 0){
            for(let i = 0; i < len; i++){
                clearInterval(ticker[i])
            }
            ticker = new Array()
        }
        ctx.clearRect(0, 0, cw, ch);
    }

    this.setColor = function (stroke, fill){
        ctx.strokeStyle = stroke
        ctx.fillStyle = fill
    }

    // (x, y)正常坐标系上的点，(cx, cy)为canvas里的坐标点, ctx为canvas绘图环境
    this.drawLine = function (x1, y1, x2, y2){
        let cx1 = x1+cw/2
        let cx2 = x2+cw/2
        let cy1 = ch/2-y1
        let cy2 = ch/2-y2

        ctx.moveTo(cx1, cy1)
        ctx.lineTo(cx2, cy2)
        ctx.stroke()
    }

    this.drawPoint = function (x, y){
        let cx = x+cw/2
        let cy = ch/2-y
        ctx.fillStyle = '#7e57c2'
        ctx.fillRect(cx, cy, 1, 1)
    }
    this.drawPoint2 = function (x, y){
        let cx = x+cw/2
        let cy = ch/2-y
        ctx.fillStyle = 'red'
        ctx.fillRect(cx-2.5, cy-2.5, 5, 5)
    }

    // 画出x轴和y轴
    this.drawCoords = function (){
        this.drawLine(-cw/2, 0, cw/2, 0);
        this.drawLine(0, ch/2, 0, -ch/2);
    }

    // 画直角坐标系的函数图像，不带动画
    this.drawFxNow = function (f, scalex, scaley,a,b){
        for(let x=-cw/2; x<cw/2; x+=step){
            this.drawPoint(x, f(a * x*scalex)* scaley + b)
        }
    }
    // 画直角坐标系的函数图像，带动画
    this.drawFx = function (f, scalex, scaley, a,b){
        let dp = this.drawPoint
        let currentx = -cw/2
        let t = setInterval(function(){
            for(let i=0; i<pointsPerMillisecond; i++){
                dp(currentx, f(a * currentx*scalex)* scaley + b)
                currentx += step
            }
            if(currentx > cw/2){
                clearInterval(t)
            }
        }, 1)
        ticker.push(t)
    }
}