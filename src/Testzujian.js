//  文件名首字母需要大写
// 引入 React
//import React from 'react'  
import React,{ Component } from 'react'  // 也可以用 es6 的方式，将 Component 解构出来 ，然后直接使用
import './TestZuJian.css'


//本页知识点
//1，类组件的声明
//2，创建子组件并引用
//3，父组件向子组件传值（单向数据流）
//4，子组件向父组件传值
//5，引用样式

//2,类组件  
    //用的 es6 的方式 继承
    //1,React.Component 是一个基类，使用类声明的组件，必须继承这个基类
    //2,在类中必须有 render 函数
    //3,在 render 函数中需要return 一个jsx元素
    //4，组件名称要以大写字母开头
    //5, react 遵循的是单向数据流，props 是只读的，不允许修改的
 
 // class Test extends React.Component{    //让当前的 Test 组件继承于 React.Component
 export default class Test extends Component{    //让当前的 Test 组件继承于 React.Component

    constructor(props){
        super(props);
        //遵循的是单向数据流，props 是只读的，不允许在子组件中修改的
        this.userData = {
            name:'张三',
            content:'测试数据传递',
            date:new Date().toLocaleTimeString(),
        }
    }

    add(val){
        alert(val)
    }



    //必须使用 render 函数，能将虚拟 DOM 渲染成真实 DOM
    render(){
        //会将jsx所接收的属性转换为单个对象传递到组件，这个对象就是 propss
        return  ( 
            <div>
                <p>测试组件引用2,{this.props.name}{this.props.value}</p>
                <MyBtn title='提交'></MyBtn>
                <MyBtn title='取消'></MyBtn>
                
                 <Content userData = {this.userData}></Content>
                 <TestData add = {this.add}></TestData>
            </div>
        )
    }

} 

// export default 抛出这个组件，也可以声明组件之后再抛出： export default Test;


// 指令 rcc 可直接创建组件结构
class MyBtn extends Component{
    render() {
        return (
            <button> {this.props.title} </button>
        )
    }
}



// 复用组件
/*
1,  将多个组件进行整合，例如调用两次以上相同的组件
2， 结构分厂复杂时需要将组件拆分成小组件
3， 会存在父子关系的数据传递

*/

class Content extends Component{
    render(){
        return(
            <div className='red'> 
                <p>111{this.props.userData.name}</p>
                <p>{this.props.userData.content}</p>
                <p>{this.props.userData.date}</p>
            </div>
        )
    }
}

//子组件向父组件传值
class TestData extends Component {
    testData = ()=>{
        this.props.add("我是子组件的值");
    }
    render() {
        return (
            <div>
                <p className='btn' onClick={this.testData}>点击测试子组件向父组件传值</p>
            </div>
        )
    }
}












