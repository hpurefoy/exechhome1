import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-navy-deep py-8">
      <Container className="flex flex-col items-center gap-2 text-center text-sm text-blue-100/60 sm:flex-row sm:justify-between sm:text-left">
        <p>&copy; 2026 Hank Purefoy &middot; eXp Realty &middot; Metro Atlanta, GA</p>
        <p className="font-semibold text-gold">The Executive Home Launch System&trade;</p>
      </Container>
    </footer>
  );
}
