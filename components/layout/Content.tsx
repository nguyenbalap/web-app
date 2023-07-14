export default function Content({children}: {children: React.ReactNode}) {
    return (
        <main className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            {children}
        </main>
    )
}