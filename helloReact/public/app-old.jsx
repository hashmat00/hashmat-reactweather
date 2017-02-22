
var Greeter = React.createClass({
    
    getDefaultProps: function () {
        return {
          name: 'React',
          message: 'this is default message'
        };
    },
    
    
    getInitialState: function  () {
      return {
           name: this.props.name,
           message: this.props.message
      } ; 
    },
    
    
   onButtonClick: function (e) {
      e.preventDefault();
      
      var name = this.refs.name.value;
      var message = this.refs.message.value;
      this.refs.name.value = '';
      this.refs.message.value = '';
     
      
      if(typeof name === 'string' && name.length > 0) {
         this.setState({
             name:name
             
          }) ; 
      }
      
      if(typeof message === 'string' && message.length > 0) {
         this.setState({
             message:message
             
          }) ; 
      }
      
      
    
      
      
      
    },
    
    
    render: function () {
        var name = this.state.name;
        var message = this.state.message;
        
        return (
        <div>
            <h1>Hello {name}</h1>
            <p>{message} </p>
            
          
        
            <form onSubmit={this.onButtonClick}>
                <input type='text' ref='name'/>
                <textarea ref='message'></textarea>
                <button>Submit</button>
            </form>
            
            
            
        </div>
       );
    }
});


ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);