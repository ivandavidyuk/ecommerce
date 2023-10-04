function Footer() {
    return (
        <footer className="page-footer light-blue darken-2">
            <div className="container" >
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">E-shop</h5>
                        © {new Date().getFullYear()} Copyright
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">My links</h5>
                        <ul>
                            <li>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="https://vk.com/vanyadavidyuk"
                                    target="_blank"
                                >
                                    VK
                                </a>
                            </li>
                            <li>
                                <a
                                    className="grey-text text-lighten-3"
                                    href="https://t.me/vanyadavidyuk"
                                    target="_blank"
                                >
                                    Telegram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export { Footer };
