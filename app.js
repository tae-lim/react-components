class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.fruit}</li>
   )
  }

  // onListItemClick(event) {
  //   console.log('I got clicked');
  // }

};

var GroceryList = (props) => (
   <ul>
    {props.fruits.map(fruit =>
      <GroceryListItem fruit={fruit} />
    )}
   </ul>
);


var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList fruits={fruits}/>
  </div>
);

var fruits = ['mango', 'strawberry']

//var fruits = ['mango', 'strawberry'];


ReactDOM.render(<App />, document.getElementById("app"))