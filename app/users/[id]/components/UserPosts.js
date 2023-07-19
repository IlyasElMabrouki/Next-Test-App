export default async function UserPosts({promise}) {
    const posts = await promise
    const content = posts.map(post => {
        return (
            <h2 key={post.id}>{post.title}</h2>
        )
    })
    return content
}
