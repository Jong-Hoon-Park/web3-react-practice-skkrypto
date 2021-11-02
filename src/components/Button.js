
export function ConnectButton(){
    return(
    <button style={{color:"white",backgroundColor:"green"}}>Connect</button>);
    
}

export function PendingButton(){
    return(
    <button style={{color:"white",backgroundColor:"pink"}}>Pending</button>);
    
}
export function ColoredButton(props){
    return(
        <button style={{color:"white",backgroundColor:props.backgroundColor}}>
            button
        </button>

    );
}