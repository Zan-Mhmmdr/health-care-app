export default function Layout ({
    children,
<<<<<<< HEAD
    modal
}: {
    children: React.ReactNode,
    modal: React.ReactNode
=======
    Modal
}: {
    children: React.ReactNode,
    Modal: React.ReactNode
>>>>>>> 54dcfdc (fix: fix bug in page modal)
}) {
    return (
        <>
            {children}
<<<<<<< HEAD
            {modal}
=======
            {Modal}
>>>>>>> 54dcfdc (fix: fix bug in page modal)
        </>
    )

}