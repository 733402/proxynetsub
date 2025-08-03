import { getUser } from '../../lib/auth';
import { useState } from 'react';

export async function getServerSideProps({ req }) {
  const user = getUser(req);
  if (!user) {
    return { redirect: { destination: '/', permanent: false } };
  }
  return { props: { user } };
}

export default function ProxyForm({ user }) {
  const [form, setForm] = useState({
    url: '',
    reason: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('/api/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user,
        type: 'proxy',
        fields: form,
      }),
    });
    alert('Submitted!');
    setForm({ url: '', reason: '' });
  };

  return (
    <div>
      <h1>Proxy Link Submission</h1>
      <form onSubmit={handleSubmit}>
        <label>Proxy URL:</label><br />
        <input name="url" value={form.url} onChange={handleChange} required /><br /><br />

        <label>Reason for submission:</label><br />
        <textarea name="reason" value={form.reason} onChange={handleChange} required /><br /><br />

        <button type="submit">Submit</button>
      </form>
      <br />
      <a href="/dashboard">← Back</a>
    </div>
  );
}
