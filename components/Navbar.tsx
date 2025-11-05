import { FaCouch } from "react-icons/fa";
import { SiUplabs } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";
import { NavigationMenuDemo } from "./NavigationMenu";

export default function Navbar() {
    return (
        <div className="text-[#343a40] mb-6 flex justify-between">
            <div className="flex gap-4">
                <div
                    className="px-4 py-2 w-12 h-10 items-center"
                    style={{
                        borderRadius: '10px',
                        background: 'linear-gradient(145deg, #f0f0f0, #cacaca);',
                        boxShadow: " 5px 5px 10px #636363,  -5px -5px 10px #ffffff",
                    }}
                >
                    <FaCouch />
                </div>

                <div>
                    <NavigationMenuDemo />
                </div>
            </div>

            <div className="flex gap-4">
                <div
                    className="px-4 py-2 flex gap-2 items-center"
                    style={{
                        borderRadius: '10px',
                        background: 'linear-gradient(145deg, #f0f0f0, #cacaca);',
                        boxShadow: " 5px 5px 10px #636363,  -5px -5px 10px #ffffff",
                    }}
                >
                    <SiUplabs className="text-blue-500"/>
                    <span className="text-blue-500 text-xs">Upgrade to Pro</span>
                </div>
                <div
                    className="px-4 py-2 flex gap-2 items-center"
                    style={{
                        borderRadius: '10px',
                        background: 'linear-gradient(145deg, #f0f0f0, #cacaca);',
                        boxShadow: " 5px 5px 10px #636363,  -5px -5px 10px #ffffff",
                    }}
                >
                    <IoDocumentText />
                    <span className="text-xs">Doc v.1.0</span>
                </div>
            </div>

        </div>
    )
}