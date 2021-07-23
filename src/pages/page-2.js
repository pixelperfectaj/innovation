import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Octokit } from "@octokit/rest";
import { Base64 } from 'js-base64';

const key = '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';
const octokit = new Octokit({
  auth: key,
});

async function getSHA(path) {
  const result = await octokit.repos.getContent({
    owner: "pixelperfectaj",
    repo: "innovation",
    path,
  });

  const sha = result?.data?.sha;

  return sha;
}

async function commitArticle() {
  console.log('hi')
  const path = `test.mdx`;
  const sha = await getSHA(path);
//
//   // const result = await octokit.repos.createOrUpdateFileContents({
//   //   owner: "pixelperfectaj",
//   //   repo: "innovation",
//   //   path,
//   //   message: `Add article 1`,
//   //   content: Base64.encode(`some content here`),
//   //   sha,
//   // });
//   //
//   // return result?.status || 500;
}

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page!</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <button onClick={commitArticle}>Submit!</button>
  </Layout>
)

export default SecondPage
