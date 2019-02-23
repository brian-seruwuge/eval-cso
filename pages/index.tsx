import fetch from "isomorphic-fetch";
import Link from "next/link";
import React from "react";
import Layout from "src/components/Layout";

const PostLink = (props) => (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?title=${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
);

const Index = (props) => (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(({show}) => (
            <PostLink id={show.id} title={show.name}/>
        ))}
      </ul>
    </Layout>
);

Index.getInitialProps = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const data = await res.json();

    // tslint:disable-next-line:no-console
    console.log(`Show data fetched. Count: ${data.length}`);

    return {
      shows: data
    };
};

export default Index;
