import parse from 'html-react-parser';

export default async function Page({ params }: { params: { slug: string } }) {
    const res = await fetch('http://localhost:3000/db.json');
    const posts = await res.json();
    const post = posts.topics.find((post: any) => post.id === params.slug);
    const postContent = post.content;
    const postTitle = post.title;

    const options = {
        htmlparser2: {
            lowerCaseTags: false,
        },
    };
    //return <div className="topic p-3" dangerouslySetInnerHTML={{ __html: post }} />;
    return (
        <div className="topic p-6">
            <h1 style={{ fontSize: '35px' }}>{postTitle}</h1>
            {parse(postContent, options)}
        </div>
    );
}
