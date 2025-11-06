import { IconType } from "react-icons/lib"

interface Props {
    icon: IconType
    title: string
    content: string
}

export default function InfoText({ icon: Icon, title, content }: Props) {
    return (
        <div className="mt-6">
            <div className="flex justify-center">
                <div
                    className="w-15 h-15 flex justify-center items-center"
                    style={{
                        borderRadius: '50%',
                        background: '#e0e0e0',
                        boxShadow: 'inset 7px 7px 14px #bcbcbc, inset -7px -7px 14px #ffffff',
                    }}
                >
                    <Icon size={28} color="#023e8a" />
                </div>
            </div>

            <div className="text-center mt-4 px-4">
                <div className="text-md font-medium">
                    {title}
                </div>
                <div className="text-xs/6 tracking-wide">
                    {content}
                </div>
            </div>
        </div >
    )
}