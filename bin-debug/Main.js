//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var config = [
    { x: 0, y: 0, walkable: true, image: "草地_jpg" },
    { x: 1, y: 0, walkable: true, image: "草地_jpg" },
    { x: 2, y: 0, walkable: true, image: "草地_jpg" },
    { x: 3, y: 0, walkable: false, image: "水_jpg" },
    { x: 4, y: 0, walkable: true, image: "草地_jpg" },
    { x: 5, y: 0, walkable: true, image: "草地_jpg" },
    { x: 6, y: 0, walkable: true, image: "草地_jpg" },
    { x: 7, y: 0, walkable: false, image: "水_jpg" },
    { x: 8, y: 0, walkable: true, image: "草地_jpg" },
    { x: 9, y: 0, walkable: true, image: "草地_jpg" },
    { x: 0, y: 1, walkable: true, image: "草地_jpg" },
    { x: 1, y: 1, walkable: true, image: "草地_jpg" },
    { x: 2, y: 1, walkable: true, image: "草地_jpg" },
    { x: 3, y: 1, walkable: false, image: "水_jpg" },
    { x: 4, y: 1, walkable: true, image: "草地_jpg" },
    { x: 5, y: 1, walkable: true, image: "草地_jpg" },
    { x: 6, y: 1, walkable: true, image: "草地_jpg" },
    { x: 7, y: 1, walkable: false, image: "水_jpg" },
    { x: 8, y: 1, walkable: true, image: "草地_jpg" },
    { x: 9, y: 1, walkable: true, image: "草地_jpg" },
    { x: 0, y: 2, walkable: true, image: "草地_jpg" },
    { x: 1, y: 2, walkable: true, image: "草地_jpg" },
    { x: 2, y: 2, walkable: true, image: "草地_jpg" },
    { x: 3, y: 2, walkable: false, image: "水_jpg" },
    { x: 4, y: 2, walkable: true, image: "草地_jpg" },
    { x: 5, y: 2, walkable: true, image: "草地_jpg" },
    { x: 6, y: 2, walkable: true, image: "草地_jpg" },
    { x: 7, y: 2, walkable: false, image: "水_jpg" },
    { x: 8, y: 2, walkable: true, image: "草地_jpg" },
    { x: 9, y: 2, walkable: true, image: "草地_jpg" },
    { x: 0, y: 3, walkable: true, image: "草地_jpg" },
    { x: 1, y: 3, walkable: true, image: "草地_jpg" },
    { x: 2, y: 3, walkable: true, image: "草地_jpg" },
    { x: 3, y: 3, walkable: false, image: "水_jpg" },
    { x: 4, y: 3, walkable: true, image: "草地_jpg" },
    { x: 5, y: 3, walkable: true, image: "草地_jpg" },
    { x: 6, y: 3, walkable: true, image: "草地_jpg" },
    { x: 7, y: 3, walkable: false, image: "水_jpg" },
    { x: 8, y: 3, walkable: true, image: "草地_jpg" },
    { x: 9, y: 3, walkable: true, image: "草地_jpg" },
    { x: 0, y: 4, walkable: true, image: "草地_jpg" },
    { x: 1, y: 4, walkable: true, image: "草地_jpg" },
    { x: 2, y: 4, walkable: true, image: "草地_jpg" },
    { x: 3, y: 4, walkable: false, image: "水_jpg" },
    { x: 4, y: 4, walkable: false, image: "水_jpg" },
    { x: 5, y: 4, walkable: true, image: "草地_jpg" },
    { x: 6, y: 4, walkable: false, image: "水_jpg" },
    { x: 7, y: 4, walkable: false, image: "水_jpg" },
    { x: 8, y: 4, walkable: true, image: "草地_jpg" },
    { x: 9, y: 4, walkable: true, image: "草地_jpg" },
    { x: 0, y: 5, walkable: true, image: "草地_jpg" },
    { x: 1, y: 5, walkable: true, image: "草地_jpg" },
    { x: 2, y: 5, walkable: true, image: "草地_jpg" },
    { x: 3, y: 5, walkable: true, image: "草地_jpg" },
    { x: 4, y: 5, walkable: true, image: "草地_jpg" },
    { x: 5, y: 5, walkable: true, image: "草地_jpg" },
    { x: 6, y: 5, walkable: true, image: "草地_jpg" },
    { x: 7, y: 5, walkable: true, image: "草地_jpg" },
    { x: 8, y: 5, walkable: true, image: "草地_jpg" },
    { x: 9, y: 5, walkable: true, image: "草地_jpg" },
    { x: 0, y: 6, walkable: true, image: "草地_jpg" },
    { x: 1, y: 6, walkable: true, image: "草地_jpg" },
    { x: 2, y: 6, walkable: true, image: "草地_jpg" },
    { x: 3, y: 6, walkable: true, image: "草地_jpg" },
    { x: 4, y: 6, walkable: true, image: "草地_jpg" },
    { x: 5, y: 6, walkable: true, image: "草地_jpg" },
    { x: 6, y: 6, walkable: true, image: "草地_jpg" },
    { x: 7, y: 6, walkable: true, image: "草地_jpg" },
    { x: 8, y: 6, walkable: true, image: "草地_jpg" },
    { x: 9, y: 6, walkable: true, image: "草地_jpg" },
    { x: 0, y: 7, walkable: true, image: "草地_jpg" },
    { x: 1, y: 7, walkable: true, image: "草地_jpg" },
    { x: 2, y: 7, walkable: true, image: "草地_jpg" },
    { x: 3, y: 7, walkable: true, image: "草地_jpg" },
    { x: 4, y: 7, walkable: true, image: "草地_jpg" },
    { x: 5, y: 7, walkable: true, image: "草地_jpg" },
    { x: 6, y: 7, walkable: true, image: "草地_jpg" },
    { x: 7, y: 7, walkable: true, image: "草地_jpg" },
    { x: 8, y: 7, walkable: true, image: "草地_jpg" },
    { x: 9, y: 7, walkable: true, image: "草地_jpg" },
    { x: 0, y: 8, walkable: true, image: "草地_jpg" },
    { x: 1, y: 8, walkable: true, image: "草地_jpg" },
    { x: 2, y: 8, walkable: true, image: "草地_jpg" },
    { x: 3, y: 8, walkable: true, image: "草地_jpg" },
    { x: 4, y: 8, walkable: true, image: "草地_jpg" },
    { x: 5, y: 8, walkable: true, image: "草地_jpg" },
    { x: 6, y: 8, walkable: true, image: "草地_jpg" },
    { x: 7, y: 8, walkable: true, image: "草地_jpg" },
    { x: 8, y: 8, walkable: true, image: "草地_jpg" },
    { x: 9, y: 8, walkable: true, image: "草地_jpg" },
    { x: 0, y: 9, walkable: true, image: "草地_jpg" },
    { x: 1, y: 9, walkable: true, image: "草地_jpg" },
    { x: 2, y: 9, walkable: true, image: "草地_jpg" },
    { x: 3, y: 9, walkable: true, image: "草地_jpg" },
    { x: 4, y: 9, walkable: true, image: "草地_jpg" },
    { x: 5, y: 9, walkable: true, image: "草地_jpg" },
    { x: 6, y: 9, walkable: true, image: "草地_jpg" },
    { x: 7, y: 9, walkable: true, image: "草地_jpg" },
    { x: 8, y: 9, walkable: true, image: "草地_jpg" },
    { x: 9, y: 9, walkable: true, image: "草地_jpg" },
];
var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap() {
        _super.call(this);
        this.init();
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.init = function () {
        for (var i = 0; i < config.length; i++) {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }
        // this.touchEnabled = true;
        // this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e: egret.TouchEvent): void {
        //     var playerX = 0;
        //     var playerY = 0;
        //     var move = false;
        //     var localX = e.localX;
        //     var localY = e.localY;
        //     var gridX = Math.floor(localX / TileMap.tilesize);
        //     var gridY = Math.floor(localY / TileMap.tilesize);
        //     console.log(gridX, gridY);
        //     var grid = new Grid(10, 10);
        //     for (var i = 0; i < config.length; i++) {
        //         grid.setWalkable(config[i].x, config[i].y, config[i].walkable);
        //     }
        //     var aStar: AStar = new AStar();
        //     grid.setStartNode(playerX, playerY);
        //     grid.setEndNode(gridX, gridY);
        //     //有路
        //     if (aStar.findPath(grid)) {
        //         var path = aStar._path;
        //         if (!move) {
        //             for (var i = 0; i < path.length; i++) {
        //                 move = true;
        //                 playerX = gridX;
        //                 playerY = gridY;
        //                 // console.log(path[i].x * TileMap.tilesize + "," + path[i].y * TileMap.tilesize);
        //                 // this.Player.Move(path[i].x * TileMap.tilesize, path[i].y * TileMap.tilesize);
        //                 var tempX = path[i].x * TileMap.tilesize;
        //                 var tempY = path[i].y * TileMap.tilesize
        //                 Player.Move(tempX, tempY);
        //                 // playerTween.to({ x: path[i].x * TileMap.tilesize, y: path[i].y * TileMap.tilesize }, 500, egret.Ease.sineIn)
        //                 //     .call(function () {
        //                 //         if (Math.abs(player.x - (gridX * TileMap.tilesize)) < 10 && Math.abs(player.y - (gridY * TileMap.tilesize)) < 10) {
        //                 //             console.log("到达目的地");
        //                 //             move = false;
        //                 //         }
        //                 //     });
        //             }
        //         } else {
        //             // egret.Tween.removeTweens(playerTween);
        //             console.log("remove");
        //             move = false;
        //         }
        //     } else {
        //         console.log("无法到达");
        //     }
        // }, this);
    };
    TileMap.tilesize = 64;
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
// class Tile extends egret.DisplayObjectContainer {
//     data: TileData;
//     constructor(data: TileData) {
//         super();
//         this.data = data;
//         var Bitmap = new egret.Bitmap();
//         this.addChild(Bitmap);
//         Bitmap.texture = RES.getRes(data.image);
//         this.x = data.x * TileMap.tilesize;
//         this.y = data.y * TileMap.tilesize;
//     }
// }
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    var d = __define,c=Main,p=c.prototype;
    p.onAddToStage = function (event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    p.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    p.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    p.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    p.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    p.createGameScene = function () {
        // var sky:egret.Bitmap = this.createBitmapByName("bg_jpg");
        // this.addChild(sky);
        // var stageW:number = this.stage.stageWidth;
        // var stageH:number = this.stage.stageHeight;
        // sky.width = stageW;
        // sky.height = stageH;
        var tilemap = new TileMap();
        this.addChild(tilemap);
        this.Player = new Pole();
        this.addChild(this.Player);
        this.Player.x = this.Player.y = 0;
        this.Player.Idle();
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var playerTween = egret.Tween.get(this.Player);
            // var playerX = 0;
            // var playerY = 0;
            var move = false;
            var localX = e.localX;
            var localY = e.localY;
            var gridX = Math.floor(localX / TileMap.tilesize);
            var gridY = Math.floor(localY / TileMap.tilesize);
            console.log(gridX, gridY);
            var grid = new Grid(10, 10);
            // this.Player.x = Math.floor(this.Player.x / TileMap.tilesize);
            // this.Player.y = Math.floor(this.Player.y / TileMap.tilesize);
            // console.log("*****Player :"+this.Player.x + "," + this.Player.y);
            for (var i = 0; i < config.length; i++) {
                grid.setWalkable(config[i].x, config[i].y, config[i].walkable);
            }
            var aStar = new AStar();
            grid.setStartNode(this.Player.x / TileMap.tilesize, this.Player.y / TileMap.tilesize);
            grid.setEndNode(gridX, gridY);
            //有路
            if (aStar.findPath(grid)) {
                var path = aStar._path;
                if (!move) {
                    for (var i = 0; i < path.length; i++) {
                        move = true;
                        // this.Player.x = gridX;
                        // this.Player.y = gridY;
                        // playerX = gridX;
                        // playerY = gridY;
                        console.log("grid :" + gridX + "," + gridY);
                        console.log("Player :" + this.Player.x + "," + this.Player.y);
                        // console.log("Length :" +path[i].x * TileMap.tilesize + "," + path[i].y * TileMap.tilesize);
                        this.Player.Move(path[i].x * TileMap.tilesize, path[i].y * TileMap.tilesize, playerTween);
                        if (i == length - 2) {
                            this.Player.Idle();
                        }
                    }
                }
                else {
                    // egret.Tween.removeTweens(playerTween);
                    console.log("remove");
                    move = false;
                }
            }
            else {
                console.log("无法到达");
            }
            // this.Player.x = playerX;
            // this.Player.y = playerY;
        }, this);
        /*

        var topMask = new egret.Shape();
        topMask.graphics.beginFill(0x000000, 0.5);
        topMask.graphics.drawRect(0, 0, stageW, 172);
        topMask.graphics.endFill();
        topMask.y = 33;
        this.addChild(topMask);

        var icon:egret.Bitmap = this.createBitmapByName("egret_icon_png");
        this.addChild(icon);
        icon.x = 26;
        icon.y = 33;

        var line = new egret.Shape();
        line.graphics.lineStyle(2,0xffffff);
        line.graphics.moveTo(0,0);
        line.graphics.lineTo(0,117);
        line.graphics.endFill();
        line.x = 172;
        line.y = 61;
        this.addChild(line);

*/
        // var colorLabel = new egret.TextField();
        // colorLabel.textColor = 0xffffff;
        // colorLabel.width = stageW - 172;
        // colorLabel.textAlign = "center";
        // colorLabel.text = "Hello Egret";
        // colorLabel.size = 24;
        // colorLabel.x = 172;
        // colorLabel.y = 80;
        // this.addChild(colorLabel);
        // var textfield = new egret.TextField();
        // this.addChild(textfield);
        // textfield.alpha = 0;
        // textfield.width = stageW - 172;
        // textfield.textAlign = egret.HorizontalAlign.CENTER;
        // textfield.size = 24;
        // textfield.textColor = 0xffffff;
        // textfield.x = 172;
        // textfield.y = 135;
        // this.textfield = textfield;
        //根据name关键字，异步获取一个json配置文件，name属性请参考resources/resource.json配置文件的内容。
        // Get asynchronously a json configuration file according to name keyword. As for the property of name please refer to the configuration file of resources/resource.json.
        // RES.getResAsync("description_json", this.startAnimation, this)
    };
    // private Moveba(event: egret.TouchEvent): void {
    //     this.Player.Move(event.stageX, event.stageY);
    // }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    p.startAnimation = function (result) {
        var self = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = [];
        for (var i = 0; i < result.length; i++) {
            textflowArr.push(parser.parser(result[i]));
        }
        var textfield = self.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var lineArr = textflowArr[count];
            self.changeDescription(textfield, lineArr);
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, self);
        };
        change();
    };
    /**
     * 切换描述内容
     * Switch to described content
     */
    p.changeDescription = function (textfield, textFlow) {
        textfield.textFlow = textFlow;
    };
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
//# sourceMappingURL=Main.js.map