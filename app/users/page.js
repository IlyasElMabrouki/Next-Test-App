import Link from "next/link"

async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) throw new Error('failed to fetch data')
    return res.json()
}

export default async function UsersPage() {
    const users = await getData()
    console.log("Hello")
    return (
        <div>
            <Link href={"/"}>Back to Home</Link>
            {
                users.map(user => {
                    return (
                        <>
                            <p key={user.id}>
                                <Link href={`/users/${user.id}`}>{user.name}</Link>
                            </p>
                        </>
                    )
                })
            }
        </div>
    )
}

