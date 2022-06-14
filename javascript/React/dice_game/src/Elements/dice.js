
const Dice = () => {
    let rand = Math.floor(Math.random()*6+1);
    return (
    <div
        style={{
        display:'flex',
        width: '100px',
        height: '100px',
        backgroundColor: 'pink',
        borderRadius: '2rem',
        fontSize:'40px',
        justifyContent:'center',
        alignItems:'center',
    }}
    >
    <span>{rand}</span></div>); 
}

export default Dice