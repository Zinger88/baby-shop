const About = async () => {
    //const data: Response  = await fetch('https://api.vercel.app/blog');
    //const posts: Record<string, unknown>[] = await data.json();

    return (
        <div>
            <h1>About Us</h1>
            {/* <ul>
                {posts.map((post: Record<string, any>) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default About;
