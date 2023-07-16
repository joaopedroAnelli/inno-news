export default function TestVariablesPage() {
  return (
    <code>
      <pre>
        {JSON.stringify(
          {
            VAPID_PUBLIC_KEY: process.env.VAPID_PUBLIC_KEY,
            VAPID_PRIVATE_KEY: process.env.VAPID_PRIVATE_KEY,
            APP_DOMAIN: process.env.APP_DOMAIN,
          },
          null,
          2
        )}
      </pre>
    </code>
  );
}
