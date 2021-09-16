//游戏控制器,控制其他的所有了类

import Snake from "./Snake";
import Food from "./Food";
import ScroePanel from "./ScorePanel";
class GameControl {
  //定义三个属性
  //蛇
  snake: Snake;
  //食物
  food: Food;
  //记分牌
  ScroePanel: ScroePanel;

  //创建一个属性来存储蛇的移动方向（也就是按键的方向）
  direction: string = "";
  //创建一个属性用来记录游戏是否结束
  isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.ScroePanel = new ScroePanel(10,2)
    this.init()
  }
  //游戏初始化，调用即开始
  init() {
    // 
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    //调用run方法
    this.run()
  }
  //创建键盘按下的相应函数
  keydownHandler(event: KeyboardEvent) {
    console.log(event.key);
    //修改direction属性
    this.direction = event.key
    // this.run()

  }

  //创建蛇移动的方法
  run() {
    /* 
    根据方向(this.direction)来使蛇的位置改变
      向下  top 增加
      向上  top 减少
      向左  left 减少
      向右  left 增加
    */
    //获取蛇现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;
    //根据按键的方向修改xy值
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        //向上移动 top 减少
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        //向下移动 top 增加
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        //向左移动 left 减少
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        //向右移动 right 增加
        X += 10;
        break;
    }
    //检查蛇是否吃到食物
      this.checkEat(X,Y)
    //修改蛇的X和Y 值
    try {
      this.snake.Y = Y;
      this.snake.X = X;
    } catch (e) {
      //进入catch，说明出现了异常，游戏结束，弹出一个提示信息
      alert(e.message+'GEAM ORVER')
      this.isLive = false
    }

    //开启一个定时调用
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.ScroePanel.level - 1) * 30)
  }
  //定义一个方法，用来检查是否吃到食物
  checkEat(X:number,Y:number){
    if(X === this.food.X && Y === this.food.Y){
      console.log('吃到食物了');
        //食物的位置要进行重置
        this.food.change()
        //分数增加
        this.ScroePanel.addScore();
        //蛇要增加一节
        this.snake.addBody();
    }

  }
}
export default GameControl