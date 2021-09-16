//定义表示记分牌的类
class ScroePanel{
  //记录分数和顶级
    score = 0;
    level = 1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    //设置一个变量限制等级
    maxlevel:number;
    //设置一个变量限制多少分升级
    upScore:number;
    constructor (maxlevel:number = 10,upScore:number = 10){
      this.scoreEle = document.getElementById('score')!
      this.levelEle = document.getElementById('level')!
      this.maxlevel = maxlevel
      this.upScore = upScore
    }
    //设置加分方法
    addScore(){
      this.scoreEle.innerHTML = ++this.score + '';
      //判断分数多少?
      if(this.score % this.upScore === 0){
        this.levelUp()
      }
    }
    //提升等级方法
    levelUp(){
      if(this.level < this.maxlevel){
        this.levelEle.innerHTML = ++this.level + '';
      }
    }
}
export default ScroePanel
// const scroePanel = new ScroePanel(100,2);
// for (let i = 0; i < 1000; i++) {
//   scroePanel.addScore()
  
// }