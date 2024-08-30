import youtubeIcon from "../assets/Images/youtube.png"
import facebookIcon from "../assets/Images/facebook.png"
import discordIcon from "../assets/Images/discord.png"
import linkedinIcon from "../assets/Images/linkedin.png"

const SocialMedia = () => {
    return (
        <div>
            <div className="container mx-auto flex justify-around items-center py-16">
                <a href="" className="text-[#fd1b13] yt">
                    <img src={youtubeIcon} alt="Youtube" width="100" />
                </a>
                <a href="" className="fb">
                    <img src={facebookIcon} alt="facebook" width="80" />
                </a>
                <a href="" className="dis">
                    <img src={discordIcon} alt="discord dc" width="80" />
                </a>
                <a href="" className="li">
                    <img src={linkedinIcon} alt="linkedin" width="80" />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;