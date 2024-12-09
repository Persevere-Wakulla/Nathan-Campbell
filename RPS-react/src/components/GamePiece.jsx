export default function GamePiece({ piece, phase }) {

    const { name, pic, border } = piece


    return (
        <div className={phase === 'begin' ? `piece ${name}` : 'piece'} id={name} style={border}>
            <img src={pic} alt={name} />
        </div>
    )
}