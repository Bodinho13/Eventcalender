

const EwTextTile = (props: any) => {
    const {text} = props;
    
    return(
        <div className="textTile">
            <h4>{text}</h4>
        </div>
    );
}

export {
    EwTextTile
}