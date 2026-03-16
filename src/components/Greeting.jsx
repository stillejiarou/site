import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div style="display: flex; flex-direction: row; align-items: center;">
      <button onClick={() => setGreeting(randomMessage())} style="padding: 0 1rem; font-weight: 700; font-size: 2rem; background: 0; border: 0; color: red;">
        &lt;3
      </button>
      <span style="font-size: 2rem; font-weight: 700;">{greeting}!</span>
    </div>
  );
}