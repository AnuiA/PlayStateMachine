// class Player extends egret.DisplayObjectContainer {
//     public MyPhoto: egret.Bitmap;
//     private MySta: StaMac = new StaMac;
//     public MoveSpeed: number = 15;
//     public Modle: number = 0;
//     public IdleAni: Array<egret.Texture> = new Array<egret.Texture>();
//     public MoveAni: Array<egret.Texture> = new Array<egret.Texture>();
//     public constructor() {
//         super();
//         this.MyPhoto = this.createBitmapByName("1_png");
//         this.addChild(this.MyPhoto);
//         this.LoadAni();
//         //更改锚点
//         this.anchorOffsetX = this.MyPhoto.width / 2;
//         this.anchorOffsetY = this.MyPhoto.height / 2;
//     }
//     private LoadAni() {
//         var texture: egret.Texture = RES.getRes("1_png");
//         this.IdleAni.push(texture);
//         texture = RES.getRes("2_png");
//         this.IdleAni.push(texture);
//         texture = RES.getRes("3_png");
//         this.IdleAni.push(texture);
//         texture = RES.getRes("4_png");
//         this.IdleAni.push(texture);
//         texture = RES.getRes("11_png");
//         this.MoveAni.push(texture);
//         texture = RES.getRes("12_png");
//         this.MoveAni.push(texture);
//         texture = RES.getRes("13_png");
//         this.MoveAni.push(texture);
//         texture = RES.getRes("14_png");
//         this.MoveAni.push(texture);
//         texture = RES.getRes("15_png");
//         this.MoveAni.push(texture);
//         texture = RES.getRes("16_png");
//         this.MoveAni.push(texture);
//     }
//     public PlayAni(Ani: Array<egret.Texture>) {
//         var count = 0;
//         var Bit = this.MyPhoto;
//         PlayAni1();
//         function PlayAni1() {
//             egret.Tween.get(Bit).wait(150).call(PlayAni2);
//         }
//         function PlayAni2() {
//             Bit.texture = Ani[count];
//             if (count < Ani.length - 1) {
//                 count++;
//             }
//             else { count = 0; }
//             PlayAni1();
//         }
//     }
//     public Move(x: number, y: number) {
//         var MS: MoveSta = new MoveSta(x, y, this);
//         this.MySta.Reload(MS);
//     }
//     public Idle() {
//         var IS: IdleSta = new IdleSta(this);
//         this.MySta.Reload(IS);
//     }
//     /**
//          * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
//          * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
//          */
//     private createBitmapByName(name: string): egret.Bitmap {
//         var result = new egret.Bitmap();
//         var texture: egret.Texture = RES.getRes(name);
//         result.texture = texture;
//         return result;
//     }
// }
// interface Sta {
//     Load();
//     exit();
// }
// class MoveSta implements Sta {
//     private Tx: number;
//     private Ty: number;
//     private player: Player;
//     private timer: egret.Timer;
//     private LeastTime: number;
//     constructor(x: number, y: number, player: Player) {
//         this.Ty = y;
//         this.Tx = x;
//         this.player = player;
//     }
//     Load() {
//         this.player.Modle++;
//         var xx = this.Tx - this.player.x;
//         var yy = this.Ty - this.player.y;
//         if (xx > 0) { this.player.scaleX = 1; } else { this.player.scaleX = -1; }//调整动画方向
//         var zz = Math.pow(xx * xx + yy * yy, 0.5);
//         var time: number = zz / this.player.MoveSpeed;
//         this.timer = new egret.Timer(50, time);
//         this.LeastTime = time;
//         this.timer.addEventListener(egret.TimerEvent.TIMER, () => {
//             this.player.x += xx / time;
//             this.player.y += yy / time;
//             this.LeastTime--;
//             if (this.LeastTime < 1) {
//                 this.timer.stop();
//                 if (this.LeastTime > -10) { this.player.Idle(); }//意味着是走停不是逼停
//             }
//         }, this);
//         this.timer.start();
//         this.player.PlayAni(this.player.MoveAni);
//     }
//     exit() {
//         this.LeastTime = -10;
//     }
// }
// class IdleSta implements Sta {
//     private player: Player;
//     constructor(player: Player) {
//         this.player = player;
//     }
//     Load() {
//         //      console.log("Loadidle");
//         this.player.Modle = 0;
//         this.player.PlayAni(this.player.IdleAni);
//     }
//     exit() {
//         //  console.log("exitIdle");
//     }
// }
// class StaMac {
//     private nowSta: Sta;
//     public Reload(S: Sta): void {
//         if (this.nowSta) {
//             this.nowSta.exit();
//         }
//         this.nowSta = S;
//         this.nowSta.Load();
//     }
// }
//# sourceMappingURL=Player.js.map