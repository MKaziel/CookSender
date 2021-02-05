  // renderBubble = props => {
    //     let username = props.currentMessage.user.name
    //     let color = this.getColor(username)
        
    
    //     return (
    //       <Bubble
    //       style={{ marginLeft: 100 }}
    //       user={this.user} 
    //         {...props}
    //         textStyle={{
    //           right: {
    //             color: 'white'
    //           }
    //         }}
    //         wrapperStyle={{
    //           left: {
    //             backgroundColor: color,}
    //         }}
    //       />
    //     )
    //   }
    
    //   getColor(username){
    //     let sumChars = 0;
    //     for(let i = 0;i < username.length;i++){
    //       sumChars += username.charCodeAt(i);
    //     }
    
    //     const colors = [
    //         '#e67e229f', // carrot
    //         '#2ecc719f', // emerald
    //         '#3498db9f', // peter river
    //         '#8e44ad9f', // wisteria
    //         '#e74c3c9f', // alizarin
    //         '#1abc9c9f', // turquoise
    //       '#2c3e509f', // midnight blue
    //     ];
    //     return colors[sumChars % colors.length];
    //   }