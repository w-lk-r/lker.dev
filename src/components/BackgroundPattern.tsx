export default function BackgroundPattern() {
  return (
    <>
      {/* Light mode dots */}
      <div
        className="fixed inset-0 -z-10 dark:hidden"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(15, 23, 42, 0.1) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Dark mode dots */}
      <div
        className="fixed inset-0 -z-10 hidden dark:block"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(241, 245, 249, 0.05) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </>
  );
}
