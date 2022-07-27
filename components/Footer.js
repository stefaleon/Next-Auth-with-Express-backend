export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; Next Auth - {currentYear}</p>
    </footer>
  );
}
