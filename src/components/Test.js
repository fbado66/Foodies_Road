import React from 'react'

function Test() {

    let handleClick = () => {
        console.log('this one seems to work')
    }

    return (
        <div>

            <button
            onClick = {handleClick}>Click Test Component</button>

        </div>
    )

}

export default Test 