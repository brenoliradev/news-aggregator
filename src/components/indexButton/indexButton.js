
const IndexButton = ({ x, addIndex, subtractIndex }) => {
    if (x/10+1 === 1) {
        return (
            <div>
                <button 
                    onClick={subtractIndex}
                    disabled
                    >
                    hey
                </button>
                <p>{x/10+1}</p>
                <button 
                    onClick={addIndex}
                    >
                    hey
                </button>
            </div>
        )
    } else if (x/10+1 > 1 && x/10+1 < 5) {
        return (
            <div>
                <button 
                    onClick={subtractIndex}
                    >
                    hey
                </button>
                <p>{x/10+1}</p>
                <button 
                    onClick={addIndex}
                    >
                    hey
                </button>
            </div>
        )
    } else if (x/10+1 === 5) {
        return (
            <div>
                <button 
                    onClick={subtractIndex}
                    >
                    hey
                </button>
                <p>{x/10+1}</p>
                <button 
                    onClick={addIndex}
                    disabled
                    >
                    hey
                </button>
            </div>
        )
    }
}

export default IndexButton;