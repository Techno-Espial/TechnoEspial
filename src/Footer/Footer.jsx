
const Footer = () => {
    return (
        <div className="bg-[#1b1b1b] webFooter" id="webFooter">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-3 gap-10 pb-8 pt-24">
                    <p className="text-2xl">Techno Espial</p>
                    <p className="text-2xl">technoespial@gmail.com</p>
                    <form className="flex">
                        <input type="text" placeholder="Email" />
                        <input className="px-4 bg-[#00A4B0] text-white" type="submit" value="Subscribe" />
                    </form>
                </div>
                <p className="py-12">Copyright &copy; 2024 - All right reserved by Techno Espial </p>
            </div>
        </div>
    );
};

export default Footer;