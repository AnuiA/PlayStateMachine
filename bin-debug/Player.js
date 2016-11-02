var Pole = (function (_super) {
    __extends(Pole, _super);
    function Pole() {
        _super.call(this);
        this.MySta = new StaMac;
        this.MoveSpeed = 20;
        this.ChaTime = 150;
        this.Modle = 0;
        this.IdleAni = new Array();
        this.MoveAni = new Array();
        this.MyPhoto = this.createBitmapByName("1_png");
        this.addChild(this.MyPhoto);
        this.LoadAni();
        this.anchorOffsetX = this.MyPhoto.width / 2;
        this.anchorOffsetY = this.MyPhoto.height / 2;
    }
    var d = __define,c=Pole,p=c.prototype;
    p.LoadAni = function () {
        var texture = RES.getRes("11_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("1_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("2_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("3_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("4_png");
        this.MoveAni.push(texture);
    };
    p.PlayAni = function (Ani) {
        var count = 0;
        var Bit = this.MyPhoto;
        var M = this.Modle;
        var timer = new egret.Timer(125, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, Play, this);
        timer.start();
        function Play() {
            Bit.texture = Ani[count];
            if (count < Ani.length - 1) {
                count++;
            }
            else {
                count = 0;
            }
            //中断
            if (this.Modle != M) {
                console.log("tM:" + M + " nowM:" + this.Modle);
                timer.stop();
            }
        }
    };
    p.Move = function (x, y, tw) {
        var MS = new MoveSta(x, y, tw, this);
        this.MySta.Reload(MS);
    };
    p.Idle = function () {
        var IS = new IdleSta(this);
        this.MySta.Reload(IS);
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Pole;
}(egret.DisplayObjectContainer));
egret.registerClass(Pole,'Pole');
var MoveSta = (function () {
    function MoveSta(x, y, tw, Player) {
        this.Ty = y;
        this.Tx = x;
        this.tw = tw;
        this.Player = Player;
    }
    var d = __define,c=MoveSta,p=c.prototype;
    p.Load = function () {
        this.Player.Modle = 1;
        var xx = this.Tx - this.Player.x;
        var yy = this.Ty - this.Player.y;
        // console.log("xx+yy  "+xx+","+yy);
        if (xx >= 0) {
            this.Player.scaleX = 1;
        }
        else {
            this.Player.scaleX = -1;
        }
        this.tw.to({ x: this.Tx, y: this.Ty }, 100);
        // .call(function () {
        //     this.Idle();            
        // });
        // var zz = Math.pow(xx * xx + yy * yy, 0.5);
        // // var zz = Math.pow(64 * 64 + 64 * 64, 0.5);
        // var time: number = zz / this.Player.MoveSpeed;
        // this.timer = new egret.Timer(50, time);
        // this.LeastTime = time;
        // // 变换位置
        // this.timer.start();
        // this.timer.addEventListener(egret.TimerEvent.TIMER, () => {
        //     this.Player.x += xx / time;
        //     this.Player.y += yy / time;
        //     this.LeastTime--;
        //     if (this.LeastTime < 1) {
        //         this.timer.stop();
        //         if (this.LeastTime > -10) { this.Player.Idle(); }//意味着是走停不是逼停
        //     }
        // }, this);
        // this.timer.start();
        this.Player.PlayAni(this.Player.MoveAni);
        this.Player.x = this.Tx;
        this.Player.y = this.Ty;
    };
    p.exit = function () {
        this.LeastTime = -10;
        //       console.log("exitM");
    };
    return MoveSta;
}());
egret.registerClass(MoveSta,'MoveSta',["Sta"]);
var IdleSta = (function () {
    function IdleSta(Player) {
        this.Player = Player;
    }
    var d = __define,c=IdleSta,p=c.prototype;
    p.Load = function () {
        this.Player.Modle = 0;
        this.Player.PlayAni(this.Player.IdleAni);
    };
    p.exit = function () {
    };
    return IdleSta;
}());
egret.registerClass(IdleSta,'IdleSta',["Sta"]);
//变换状态
var StaMac = (function () {
    function StaMac() {
    }
    var d = __define,c=StaMac,p=c.prototype;
    p.Reload = function (S) {
        if (this.nowSta) {
            this.nowSta.exit();
        }
        this.nowSta = S;
        this.nowSta.Load();
    };
    return StaMac;
}());
egret.registerClass(StaMac,'StaMac');
//# sourceMappingURL=player.js.map