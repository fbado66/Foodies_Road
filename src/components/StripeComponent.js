import React from 'react'

class StripeComponent extends React.Component { 

    handleClick2 = (evt) => {
        // evt.preventDefault()
        console.log("Hello from Stripe Component")
    }

    handleClick() {
        console.log('this is:', this);
      }
    
    render() {
    
        return (
            <div>

                <button onClick={() => this.handleClick()}>
                    Click me
                </button>


                <button onClick={this.handleClick2}>Click me 2 </button>

            </div>
        )
    }
}

export default StripeComponent