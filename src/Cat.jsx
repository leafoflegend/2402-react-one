const Cat = ({ name, imgUrl }) => {
    return (
        <div
            style={{
                border: 'solid 1px whitesmoke',
                borderRadius: '20px',
                width: '250px',
                padding: '1em',
                marginBottom: '1em',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h3>{name}</h3>
            <img src={imgUrl} style={{ width: '100%' }} />
        </div>
    );
};

export default Cat;
