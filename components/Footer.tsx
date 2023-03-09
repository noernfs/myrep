export default function Footer() {
    return (
        <>
            <footer className="p-0">
                <div className=" bg-gray-900">
                    <div className="div1foot">
                        <div className="text-center pt-10">
                            <h3 className="h3foot">
                                Revolusi internet{" "}
                                <span className="text-blue-900">Bnetfit</span>
                            </h3>
                            <p>
                                {" "}
                                <span className="text-gray-100">
                                    Pelopor Perubahan Progresif Jaringan
                                    Internet
                                </span>
                            </p>
                        </div>
                        <div className="div2foot">
                            &copy; 2023 Bnetfit Corp. All rights reserved.
                            <div className="order-1 md:order-2">
                                <span className="px-2">About us</span>
                                <span className="px-2 border-l">
                                    Contact us
                                </span>
                                <span className="px-2 border-l">
                                    Privacy Policy
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
