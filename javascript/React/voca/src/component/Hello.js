import World from "./World";

export default function Hello(){
    return (
        <div>
            <h1 style={{
                color : '#f00',
                borderRight : "12px solid black",
            }}>
                Hello</h1>
            <World />
            <World />
        </div>
    );
}