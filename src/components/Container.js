import React from 'react'

function Container({children,width,marginTop,spacing}) {
    const containerStyle={
        background: '#fff',
        margin:'auto',
        width:spacing,
        marginTop,
        border:'1px soild black'
    }
    return (
        <div style={containerStyle}>
            {children}
        </div>
    )
}

Container.defaultProps={
  width:'70%' ,
  marginTop:'7%',
  marginBottom: '10%',
  
}

export default Container