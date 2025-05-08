export default function Layout ({
    children,
    Modal
}: {
    children: React.ReactNode,
    Modal: React.ReactNode
}) {
    return (
        <>
            {children}
            {Modal}
        </>
    )

}