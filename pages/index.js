export default function Home() {
  return (
    <div className="center">
      <h1>Welcome to the Proxy Net Submissions</h1>
      <p>Login to continue</p>
      <a href="/api/auth/login"><button>Login with Discord</button></a>
    </div>
  );
}
