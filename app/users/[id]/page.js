import { Suspense } from "react"

async function getUser(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!res.ok) throw new Error('failed to fetch user')
    return res.json()
}


async function getUserPosts(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    if (!res.ok) throw new Error('failed to fetch user posts')
    return res.json()
}

export default async function UserPage({ params : { id } }) {
    const userData = getUser(id)
    const postsData = getUserPosts(id)
    const [user,posts] = await Promise.all([userData,postsData])
    return (
        <div>
            <h2>{user.name}</h2>
            <Suspense fallback={<h2>Loading ...</h2>}>
                {
                    posts.map(post => {
                        return (
                            <h2 key={post.id}>{post.title}</h2>
                        )
                    })
                }
            </Suspense>
        </div>
    )
}
