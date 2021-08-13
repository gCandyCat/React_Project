//项目的入口文件
import React from 'react';  //处理逻辑
import ReactDOM from 'react-dom';//处理dom
import Test from './Testzujian'

//ReactDOM 会抛出一个render方法
//JSX = javascript.xml 元素，构成react的最小砖块，返回的是一个对象（虚拟的dom元素） 

const ele = <p>{'react'}</p>//插值使用：{}，可插字符串，数字，函数返回值，运算值，表达式
console.log(ele)
//ReactDOM.render(ele,document.querySelector('#root'));


//react只会更新它需要更新的部分
function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>{new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    //ReactDOM.render(element, document.querySelector('#root'));
  }
  
  //setInterval(tick, 1000);
  

//循环绑定元素，使用map
  const arr = ['1','2','3'];
  let ulEle = (<ul>
    { arr.map((item, index)=>{
      return (
          //循环绑定的JSX元素，必须要有key属性来区分不同的元素，否则会报错
       <li key={index}>{item}</li>
      )
    }) }
  </ul>)
  //ReactDOM.render(ulEle, document.querySelector('#root'));


  //过滤值
  //forEach、filter 没有返回值，没有办法对元素进行处理,只能对内部内容进行过滤，所以过滤还是得用map
    const goods=[
        {price:100,name:'a',id:1},
        {price:200,name:'b',id:2},
        {price:300,name:'c',id:3},
        {price:400,name:'d',id:4},
        {price:500,name:'e',id:5},
    ]
    let listEle = (
        <ul>
            {goods.map((item,index)=>{
                
                    
                return (item.price > 300 ? <li key={index} >{item.price}</li> : '')
               
            })

            }
        </ul>
    )
    //ReactDOM.render(listEle, document.querySelector('#root'));


    //组件
    //1,函数式组件声明
    function Welcome(props){   //组件名称首字母一定要大写

        return <p> hello{props.name} {props.value}</p>
    }
    
    //ReactDOM.render(<Welcome name='aaa' value="bbbb"/>, document.querySelector('#root'));


    //2,类组件  
    //用的 es6 的方式 继承
    //1,React.Component 是一个基类，使用类声明的组件，必须继承这个基类
    //2,在类中必须有 render 函数
    //3,在 render 函数中需要return 一个jsx元素
    //4，组件名称要以大写字母开头

    class Zujian extends React.Component{    //让当前的 Test 组件继承于 React.Component
        //必须使用 render 函数，能将虚拟 DOM 渲染成真实 DOM
        render(){
            //会将jsx所接收的属性转换为单个对象传递到组件，这个对象就是 propss
            return   <p>Test1111,{this.props.name}{this.props.value}</p>
        }

    }     

    ReactDOM.render(<Test name='aaa' value="bbbb"/>, document.querySelector('#root'));





























    