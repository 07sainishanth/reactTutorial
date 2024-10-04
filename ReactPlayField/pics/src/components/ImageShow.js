function ImageShow({image}) {
    return (
        <div>
            <img src={image.urls.small} style={{width: '200px'}} alt={image.alt_description} />
        </div>
    )
}

export default ImageShow;