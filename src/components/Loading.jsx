import React from 'react';

function Loading(){
    return(
        <div style={styles}>
        <div class="progress">
        <div class="indeterminate"></div>
        </div>
        </div>
    )
}

const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
}
export default Loading;