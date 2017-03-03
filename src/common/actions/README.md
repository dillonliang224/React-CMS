# About this folder
This folder will hold all of your **flux** actions if you are using flux.
You can include actions into your components or stores like this:

```javascript
let react = require('react/addons');
let MyAction = require('actions/MyAction');
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    MyAction.exampleMethod();
  }
}
```

> 在页面点击一个article，组件通过dispatch发出action，store根据action的type属性调用对应的reducer并传入state和这个action，reducer对state进行处理并返回一个新的state放入store，connect监听到store发生变化，调用setState更新组件，此时组件的props也就跟着变化。

> reducer是一个纯函数，不处理ajax和date，这些都不是纯函数，所以ajax操作应该放在action里。
