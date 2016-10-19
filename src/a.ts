class Pole extends egret.DisplayObjectContainer {

    public MyPhoto: egret.Bitmap;
    private MySta: StaMac = new StaMac;
    public MoveSpeed: number = 20;
    public ChaTime: number = 150;
    public Modle: number = 0;
    public IdleAni: Array<egret.Texture> = new Array<egret.Texture>();
    public MoveAni: Array<egret.Texture> = new Array<egret.Texture>();

    public constructor() {
        super();
        this.MyPhoto = this.createBitmapByName("1_png");
        this.addChild(this.MyPhoto);
        this.LoadAni();
        this.anchorOffsetX = this.MyPhoto.width / 2;
        this.anchorOffsetY = this.MyPhoto.height / 2;
    }

    private LoadAni() {
        var texture: egret.Texture = RES.getRes("11_png");
        this.IdleAni.push(texture);


        texture = RES.getRes("1_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("2_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("3_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("4_png");
        this.MoveAni.push(texture);
    }

    public PlayAni(Ani: Array<egret.Texture>) {
        var count = 0;
        var Bit = this.MyPhoto;
        var M = this.Modle;
        var timer: egret.Timer = new egret.Timer(125, 0);
        timer.addEventListener(egret.TimerEvent.TIMER, Play, this);
        timer.start();

        function Play() {
            Bit.texture = Ani[count];
            if (count < Ani.length - 1) {
                count++;
            } else {
                count = 0;
            }

            //中断
            if (this.Modle != M) {
                console.log("tM:" + M + " nowM:" + this.Modle);
                timer.stop();
            }
        }

    }

    public Move(x: number, y: number) {
        var MS: MoveSta = new MoveSta(x, y, this);
        this.MySta.Reload(MS);
    }
    public Idle() {
        var IS: IdleSta = new IdleSta(this);
        this.MySta.Reload(IS);
    }

    private createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}

interface Sta {
    Load();
    exit();
}

class MoveSta implements Sta {
    private Tx: number;
    private Ty: number;
    private Player: Pole;
    private timer: egret.Timer;
    private LeastTime: number;
    constructor(x: number, y: number, Player: Pole) {
        this.Ty = y;
        this.Tx = x;
        this.Player = Player;
    }

    Load() {

        this.Player.Modle = 1;
        var xx = this.Tx - this.Player.x;
        var yy = this.Ty - this.Player.y;
        if (xx > 0) { this.Player.scaleX = 1; } else { this.Player.scaleX = -1; }
        var zz = Math.pow(xx * xx + yy * yy, 0.5);
        var time: number = zz / this.Player.MoveSpeed;
        this.timer = new egret.Timer(50, time);
        this.LeastTime = time;


        // 变换位置
        this.timer.start();
        this.timer.addEventListener(egret.TimerEvent.TIMER, () => {
            this.Player.x += xx / time;
            this.Player.y += yy / time;
            this.LeastTime--;
            if (this.LeastTime < 1) {
                this.timer.stop();
                if (this.LeastTime > -10) { this.Player.Idle(); }//意味着是走停不是逼停
            }
        }, this);
        // this.timer.start();
        this.Player.PlayAni(this.Player.MoveAni);
    }
    exit() {
        this.LeastTime = -10;
        //       console.log("exitM");
    }


}
class IdleSta implements Sta {
    private Player: Pole;
    constructor(Player: Pole) {
        this.Player = Player;
    }
    Load() {
        this.Player.Modle = 0;
        this.Player.PlayAni(this.Player.IdleAni);
    }
    exit() {

    }

}

//变换状态
class StaMac {
    private nowSta: Sta;

    public Reload(S: Sta): void {
        if (this.nowSta) {
            this.nowSta.exit();
        }
        this.nowSta = S;
        this.nowSta.Load();
    }
}