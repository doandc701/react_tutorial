import Avatar from '@mui/material/Avatar';

function YoutubeItem(props) {
    return (
        <div className={`youtube-item ${props.className}`}>
            <div className="youtube-image">
                <img src={props.image} alt="thumbnail" />
            </div>
            <div className="youtube-footer">
                <Avatar alt="Remy Sharp" src={props.avatar} />
                <div className="youtube-info">
                    <h3 className="youtube-title">{props.title || 'This is example of title'}</h3>
                    <h4 className="youtube-auth">{props.auth || 'Man'}</h4>
                </div>
            </div>
        </div>
    );
}

export default YoutubeItem;
