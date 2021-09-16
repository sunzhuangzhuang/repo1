class Snake {
  //表示蛇的元素
  head: HTMLElement;
  //蛇的身体
  bodies: HTMLCollection;
  element: HTMLElement;
  constructor() {
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.element = document.getElementById('snake')!;
    this.bodies = this.element.getElementsByTagName('div');
  }
  //获取蛇的坐标（蛇头）
  get X() {
    return this.head.offsetLeft
  }
  //获取y轴坐标
  get Y() {
    return this.head.offsetTop;
  }
  //设置蛇头的坐标
  set X(value: number) {
    if (this.X === value) {
      return
    }
    if (value < 0 || value > 290) {
      //进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      console.log('水平方向发生掉头');
      //如果发生掉头，让反方向继续移动
      if (value > this.X) {
        //如果新值value大于X,则说明蛇在向右走，此时发生掉头应该使蛇继续向左走
        value = this.X - 10;
      } else {
        value = this.X + 10;

      }
    }
    //移动身体
    this.moveBody()
    this.head.style.left = `${value}px`
    //检查是否撞到自己
    this.checkHeadBody()
  }
  set Y(value: number) {
    console.log(value)
    if (this.Y === value) {
      return
    }
    if (value < 0 || value > 290) {
      //进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了')
    }
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      console.log('水平方向发生掉头');
      //如果发生掉头，让反方向继续移动
      if (value > this.Y) {
        //如果新值value大于X,则说明蛇在向下走，此时发生掉头应该使蛇继续向左走
        value = this.Y - 10;
      } else {
        value = this.Y + 10;

      }
    }
    //移动身体
    this.moveBody()
    this.head.style.top = `${value}px`
    //检查是否撞到自己
    this.checkHeadBody()
  }
  // 设置蛇增加身体的方法
  addBody() {
    //向element添加一个div
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }
  //添加身体移动方法
  moveBody() {
    /* 
    将后边的身体设置为前边身体的位置
    */
    //遍历获取所有的身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      //获取前边身体的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      //将这个值设置到当前的身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
  //用来检查蛇头是否装到自己
  checkHeadBody(){
    //获取所有身体检查其是否和蛇头的坐标是否发生折叠
    for(let i=1;i<this.bodies.length;i++){
      let bd = this.bodies[i] as HTMLElement
      if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
        //进入判断说明撞到身体
        throw new Error('撞到自己了')
      }
    }
  }
}
export default Snake