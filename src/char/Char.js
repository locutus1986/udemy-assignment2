import React from 'react'

const Char = (props) => {
    const styles = {
        display:'inline-block',
        padding: '16px',
        textAlign:'center',
        margin: '16px',
        border: '1px solid black',
        backgroundColor: 'pink'
    }
    return <div style={styles} onClick={props.click}>
        {props.character}
    </div>
}

export default Char