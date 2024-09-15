
const VideoPlayer = () => {
    return (
        <div className="h-full">
            <iframe
                className="w-full h-full"
                src="https://drive.google.com/file/d/1R9xrcPUStC9N04YXEnmbVutO3ksocNWS/preview"
                allow="autoplay"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;