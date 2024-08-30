
const VideoPlayer = () => {
    return (
        <div>
            <iframe
                className="w-full h-[500px]"
                src="https://drive.google.com/file/d/1PHz7Qxpj2RdzAPjxUSdRQpTUAY8dwt-Q/preview"
                allow="autoplay"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;