var Greeter = React.createClass({
    
    getDefaultProps: function () {
        return {
            name: 'Reacts..',
            message: 'This is default message props'
        };
    },
    getInitialState: function() {
      return {
          name: this.props.name
      }  
    },
    
    OnButtonClick: function(e) {
        e.preventDefault();
        
        var nameRef = this.refs.name;
        var name = nameRef.value;
        nameRef.value = '';
        
        if (typeof name === 'string' && name.length > 0 ){
                 this.setState({
                 name: name
                });
        }
       
       
        // alert(name);
    },
    
  
   
    
    render: function () {
        var name = this.state.name;
        var message = this.props.message;
        return (
        <div>
        <h1>Hello {name}</h1>
        <p>{message}</p>
        
       <form onSubmit={this.OnButtonClick}>
       <input type='text' ref='name'/>
       <button>Submit</button>
       </form>
        
        </div>
            
      );
    }
});






ReactDOM.render(
        <Greeter name="props name"  />,
         document.getElementById('app')
 );