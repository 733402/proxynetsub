import { getUser } from '../lib/auth';

export async function getServerSideProps({ req }) {
  const user = getUser(req);
  if (!user) {
    return { redirect: { destination: '/', permanent: false } };
  }
  return { props: { user } };
}

export default function Dashboard({ user }) {
  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <ul>
        <li><a href="/submit/proxy">Submit Proxy Link</a></li>
        <li><a href="/submit/game">Submit Game Link</a></li>
        <li><a href="/submit/suggestion">Submit Suggestion</a></li>
      </ul>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}
